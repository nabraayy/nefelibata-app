# Etapa 1: Build de Vite con Node
FROM node:18 AS node-builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


# Etapa 2: PHP + Laravel
FROM php:8.3-cli

# Instalar extensiones necesarias de PHP
RUN apt-get update && apt-get install -y \
    git unzip curl libzip-dev zip libpng-dev libonig-dev libxml2-dev \
    && docker-php-ext-install pdo pdo_mysql mbstring zip exif pcntl

# Instalar Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Crear directorio de trabajo
WORKDIR /var/www/html

# Copiar todos los archivos desde el build de Node y tu app
COPY --from=node-builder /app /var/www/html

# Instalar dependencias PHP de Laravel
RUN composer install --no-interaction --prefer-dist --optimize-autoloader

# Dar permisos a Laravel
RUN chmod -R 775 storage bootstrap/cache

# Iniciar Laravel en el puerto 8080
CMD php artisan serve --host=0.0.0.0 --port=8080
