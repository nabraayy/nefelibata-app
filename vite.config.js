import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    // Cargar variables de entorno según el modo (development o production)
    const env = loadEnv(mode, process.cwd(), '');

    return {
        plugins: [
            laravel({
                input: 'resources/js/app.jsx',
                refresh: true,
            }),
            react(),
        ],
        base: mode === 'production' ? '/build/' : '/',
        server: {
            host: 'localhost',
            port: 5175,
            hmr: {
                host: 'localhost',
            },
        },
    };
});
