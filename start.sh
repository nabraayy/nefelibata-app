#!/bin/bash

# Instalar dependencias
composer install --no-interaction --prefer-dist --optimize-autoloader

# Copiar .env si no existe
cp .env.example .env

# Generar clave
php artisan key:generate

# Ejecutar migraciones (esperando a DB)
until php artisan migrate --force; do
  echo "Esperando a que la base de datos esté lista..."
  sleep 5
done

# Levantar servidor en el puerto 8080
php artisan serve --host=0.0.0.0 --port=8080
