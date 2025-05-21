#!/bin/bash

# Instala dependencias por si acaso
composer install --no-interaction --prefer-dist --optimize-autoloader

# Crea la clave si no existe
if [ ! -f .env ]; then
  cp .env.example .env
  php artisan key:generate
fi

# Espera a MySQL (importante)
until php artisan migrate --force; do
  echo "Esperando a que la base de datos esté disponible..."
  sleep 5
done

# Levanta Laravel
php -S 0.0.0.0:8080 -t public
# Ejecutar migraciones hasta que funcionen
until php artisan migrate --force; do
  echo "Esperando a que la base de datos esté lista..."
  sleep 5
done