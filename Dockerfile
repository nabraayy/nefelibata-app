FROM php:8.3-cli

# Instalar extensiones necesarias de PHP
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    curl \
    zip \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    libzip-dev \
    nodejs \
    npm \
    && docker-php-ext-install pdo pdo_mysql mbstring zip exif pcntl

# Instalar Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Crear directorio de trabajo
WORKDIR /var/www

# Copiar archivos del proyecto
COPY . .

# Instalar dependencias PHP y Node
RUN composer install --no-dev --optimize-autoloader
RUN npm install && npm run build

# Permisos y configuración
RUN chown -R www-data:www-data /var/www \
    && chmod -R 755 /var/www/storage

# Generar clave si no existe (opcional si la defines en .env)
RUN php artisan config:clear
RUN php artisan route:clear

# Exponer el puerto
EXPOSE 8000

# Comando de inicio (puedes cambiarlo por nginx/php-fpm si lo deseas)
CMD php artisan serve --host=0.0.0.0 --port=8000
