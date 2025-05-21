#!/bin/bash

# Instalar dependencias
composer install --no-interaction --prefer-dist --optimize-autoloader

# Copiar .env si no existe
cp .env.example .env

# Generar clave si no existe
php artisan key:generate

# Esperar a que MySQL esté listo antes de continuar
until php artisan migrate --force; do
  echo "Esperando a que la base de datos esté lista..."
  sleep 5
done

# Servir Laravel en el puerto 8080
php artisan serve --host=0.0.0.0 --port=8080
