#!/bin/bash

# Instalar dependencias PHP y JS
composer install --no-interaction --prefer-dist --optimize-autoloader
npm install

# Generar los assets
npm run build

# Esperar a que la DB esté lista y migrar
until php artisan migrate --force; do
  echo "Esperando a la base de datos..."
  sleep 5
done

# Ejecutar Laravel en modo producción con el built de Vite
php -S 0.0.0.0:${PORT:-8080} -t public
