import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.jsx'],
            refresh: true,
            publicDirectory: 'public',
            buildDirectory: 'build', // MUY IMPORTANTE: esto empata con tu Laravel config/vite.php
        }),
        react(),
    ],
    build: {
        manifest: true,
        outDir: 'public/build',
        rollupOptions: {
            input: 'resources/js/app.jsx',
        },
    },
});
