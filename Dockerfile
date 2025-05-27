FROM php:8.3-cli

# Actualizar paquetes para mitigar vulnerabilidades
RUN apt-get update && apt-get upgrade -y

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
