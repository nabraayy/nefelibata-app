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

# Instalar dependencias PHP y frontend
RUN composer install --no-dev --optimize-autoloader
RUN npm install && npm run build

# Limpiar y optimizar config Laravel
RUN php artisan config:clear && php artisan route:clear && php artisan view:clear

# Asignar permisos a storage y bootstrap/cache
RUN chown -R www-data:www-data /var/www && chmod -R 755 /var/www/storage

# Variables de entorno para Railway
ENV APP_ENV=production
ENV APP_DEBUG=false
ENV APP_URL=https://nefelibata-app-production.up.railway.app/build
ENV PORT=8080

# Exponer puerto Railway
EXPOSE 8080

# Comando por defecto para ejecutar Laravel
CMD php -S 0.0.0.0:8080 -t public

