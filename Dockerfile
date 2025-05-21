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

# Establecer el directorio de trabajo
WORKDIR /var/www/html

# Copiar el código al contenedor
COPY . .

# Instalar dependencias
RUN composer install --no-interaction --prefer-dist --optimize-autoloader

# Asignar permisos a carpetas necesarias
RUN chmod -R 775 storage bootstrap/cache

# Copiar entorno de producción si no existe .env
COPY .env.example .env

# Generar APP_KEY
RUN php artisan key:generate



# Servir Laravel en el puerto 8080
CMD php -S 0.0.0.0:8080 -t public
