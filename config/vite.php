<?php

return [
    'manifest_path' => public_path('build/manifest.json'),
    'build_directory' => 'build',
    'asset_url' => env('ASSET_URL', null),
    'hot_file' => env('VITE_HOT_FILE', storage_path('framework/vite.hot')),
];
