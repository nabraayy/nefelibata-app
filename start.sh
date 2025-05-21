#!/bin/bash

composer install --no-interaction --prefer-dist --optimize-autoloader

cp .env.example .env

php artisan key:generate

until php artisan migrate --force; do
  echo "Esperando a la base de datos..."
  sleep 5
done

php artisan serve --host=0.0.0.0 --port=8080
