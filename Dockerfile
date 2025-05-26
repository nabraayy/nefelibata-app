# Dockerfile para Railway
FROM php:8.3-cli

# Instala dependencias
RUN apt-get update && apt-get install -y \
    git unzip curl zip libpng-dev libonig-dev libxml2-dev libzip-dev nodejs npm \
    && docker-php-ext-install pdo pdo_mysql mbstring zip exif pcntl

# Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www
COPY . .

# Dependencias
RUN composer install --no-dev --optimize-autoloader
RUN npm install && npm run build

# Optimización Laravel
RUN php artisan config:clear && php artisan route:clear && php artisan view:clear
RUN php artisan optimize
RUN chown -R www-data:www-data /var/www && chmod -R 775 storage bootstrap/cache

# Expone el puerto que Railway asigne
ENV PORT=8080
EXPOSE 8080
CMD ["php", "artisan", "serve", "--host=127.0.0.1", "--port=8080"]

