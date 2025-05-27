<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = ['name', 'price', 'image', 'category', 'description', 'gallery','discount'];

    protected $casts = [
        'gallery' => 'array',
    ];
}

