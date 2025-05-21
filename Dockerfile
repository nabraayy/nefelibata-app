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

# Copiar el código de Laravel al contenedor
WORKDIR /var/www/html
COPY . .

# Instalar dependencias de Laravel
RUN composer install

# Dar permisos a Laravel
RUN chmod -R 775 storage bootstrap/cache

# Servir Laravel en el puerto 8080
EXPOSE 8080
CMD php -S 0.0.0.0:8080 -t public
