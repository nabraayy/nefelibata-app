import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');

    return {
        plugins: [
            laravel({
                input: 'resources/js/app.jsx',
                refresh: true,
            }),
            react(),
        ],
        base: mode === 'production' ? `${env.APP_URL}/build/` : '/',
        build: {
            manifest: true,
            outDir: 'public/build',
            rollupOptions: {
                input: 'resources/js/app.jsx',
            },
        },
        server: {
            host: true,
            port: 5173,
        },
    };
});
