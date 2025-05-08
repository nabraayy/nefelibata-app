<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;


class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::insert([
            ['name' => 'Portátil HP', 'price' => 799.99, 'image' => '/portatil.png', 'category' => 'Ordenadores'],
            ['name' => 'Base refrigeradora', 'price' => 19.99, 'image' => '/refri/base-refri1.webp', 'category' => 'Ordenadores'],
            ['name' => 'Pantalla LED 24"', 'price' => 149.00, 'image' => '/panatalla/panatalla2.webp', 'category' => 'Ordenadores'],
        
            ['name' => 'IPhone 16', 'price' => 399.00, 'image' => '/moviles/m1.webp', 'category' => 'Móviles'],
            ['name' => 'IPhone 16', 'price' => 399.00, 'image' => '/moviles/mo1.webp', 'category' => 'Móviles'],
            ['name' => 'IPhone 16', 'price' => 399.00, 'image' => '/moviles/mov1.webp', 'category' => 'Móviles'],
            ['name' => 'IPhone 16', 'price' => 399.00, 'image' => '/moviles/movi1.webp', 'category' => 'Móviles'],
            ['name' => 'IPhone 16', 'price' => 399.00, 'image' => '/moviles/movil1.webp', 'category' => 'Móviles'],
        
            ['name' => 'Tablet Samsung', 'price' => 299.99, 'image' => '/tablet/tabl1.webp', 'category' => 'Tablets'],
            ['name' => 'Tablet Apple', 'price' => 499.99, 'image' => '/tablet/tablet1.webp', 'category' => 'Tablets'],
        
            ['name' => 'Auriculares inalámbricos', 'price' => 59.99, 'image' => '/auriculares/auri1.webp', 'category' => 'Auriculares'],
            ['name' => 'Cascos con micrófono', 'price' => 39.99, 'image' => '/cascos/cascos1.webp', 'category' => 'Auriculares'],
        
            ['name' => 'Ratón óptico', 'price' => 59.99, 'image' => '/raton/raton1.webp', 'category' => 'Ratones'],
        ]);
        
    }
}
