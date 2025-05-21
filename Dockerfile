FROM node:18 as node

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build


FROM php:8.3-cli

# Instalar extensiones necesarias
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    curl \
    libzip-dev \
    zip \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    && docker-php-ext-install pdo pdo_mysql mbstring zip exif pcntl

# Instalar Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

# Copiar Laravel y archivos generados por Vite
COPY --from=node /app /var/www/html

# Instalar dependencias PHP
RUN composer install --no-interaction --prefer-dist --optimize-autoloader

# Dar permisos a Laravel
RUN chmod -R 775 storage bootstrap/cache

# Servir la app
CMD php artisan serve --host=0.0.0.0 --port=8080
