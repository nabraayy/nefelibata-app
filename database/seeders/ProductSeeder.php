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
    [
        'name' => 'Portátil HP',
        'price' => 799.99,
        'image' => '/portatil.png',
        'category' => 'Ordenadores',
        'description' => 'Portátil HP ideal para estudiantes y profesionales. Procesador Intel i5, 8GB RAM, 512GB SSD.',
        'gallery' => json_encode(["/portatil.png", "/portatil2.png", "/portatil3.png"]),
    ],
    [
        'name' => 'Base refrigeradora',
        'price' => 19.99,
        'image' => '/refri/base-refri1.webp',
        'category' => 'Ordenadores',
        'description' => 'Base refrigeradora silenciosa y eficiente con 2 ventiladores para mantener tu portátil fresco.',
        'gallery' => json_encode(["/refri/base-refri1.webp", "/refri/base-refri2.webp"]),
    ],
    [
        'name' => 'Pantalla LED 24"',
        'price' => 149.00,
        'image' => '/panatalla/panatalla2.webp',
        'category' => 'Ordenadores',
        'description' => 'Pantalla LED de 24 pulgadas con resolución Full HD y tecnología antirreflejo.',
        'gallery' => json_encode(["/panatalla/pantalla1.webp", "/panatalla/panatalla2.webp","/panatalla/panatalla3.webp","/panatalla/panatalla4.webp","/panatalla/panatalla5.webp"]),
    ],
    [
        'name' => 'IPhone 16',
        'price' => 399.00,
        'image' => '/moviles/m1.webp',
        'category' => 'Móviles',
        'description' => 'Nuevo iPhone 16 con chip A17 Bionic, cámara avanzada y diseño elegante.',
        'gallery' => json_encode(["/moviles/m1.webp", "/moviles/m2.webp", "/moviles/m3.webp", "/moviles/m4.webp", "/moviles/m5.webp", "/moviles/moviles.webp"]),
    ],
    [
        'name' => 'IPhone 16',
        'price' => 399.00,
        'image' => '/moviles/mo1.webp',
        'category' => 'Móviles',
        'description' => 'iPhone 16 con pantalla OLED de alta resolución y 128GB de almacenamiento.',
        'gallery' => json_encode(["/moviles/mo1.webp", "/moviles/mo2.webp","/moviles/mo3.webp","/moviles/mo4.webp","/moviles/moviles.webp"]),
    ],
    [
        'name' => 'IPhone 16',
        'price' => 399.00,
        'image' => '/moviles/mov1.webp',
        'category' => 'Móviles',
        'description' => 'Versión avanzada del iPhone 16 con enfoque en fotografía y autonomía.',
        'gallery' => json_encode(["/moviles/mov1.webp", "/moviles/mov2.webp","/moviles/mov3.webp","/moviles/mov3.webp","/moviles/mov4.webp","/moviles/moviles.webp"]),
    ],
    [
        'name' => 'IPhone 16',
        'price' => 399.00,
        'image' => '/moviles/movi1.webp',
        'category' => 'Móviles',
        'description' => 'iPhone 16 con Face ID, carga rápida y materiales reciclados.',
        'gallery' => json_encode(["/moviles/movi1.webp", "/moviles/movi2.webp","/moviles/movi3.webp","/moviles/movi4.webp","/moviles/moviles.webp"]),
    ],
    [
        'name' => 'IPhone 16',
        'price' => 399.00,
        'image' => '/moviles/movil1.webp',
        'category' => 'Móviles',
        'description' => 'Modelo base del iPhone 16 con gran rendimiento y fluidez en iOS.Modelo en blanco.',
        'gallery' => json_encode(["/moviles/movil1.webp", "/moviles/movil2.webp","/moviles/movil3.webp","/moviles/movil4.webp","/moviles/moviles.webp"]),
    ],
    [
        'name' => 'Tablet Apple',
        'price' => 299.99,
        'image' => '/tablet/tabl1.webp',
        'category' => 'Tablets',
        'description' => 'Tablet Apple con pantalla AMOLED, 64GB y batería de larga duración.',
        'gallery' => json_encode(["/tablet/table1.webp","/tablet/table2.webp","/tablet/tablet1.webp","/tablet/tablet2.webp","/tablet/tablet3.webp","/tablet/tablet4.webp","/tablet/tabl1.webp", "/tablet/tabl2.webp","/tablet/tabl3.webp","/tablet/tablet5.webp"]),
    ],
    [
        'name' => 'Tablet Apple',
        'price' => 499.99,
        'image' => '/tablet/tablet1.webp',
        'category' => 'Tablets',
        'description' => 'iPad Apple compatible con Apple Pencil y chip M1. Ideal para productividad.En diversos colores.',
        'gallery' => json_encode(["/tablet/tabl1.webp", "/tablet/tabl2.webp","/tablet/tabl3.webp","/tablet/table1.webp","/tablet/table2.webp","/tablet/tablet1.webp","/tablet/tablet2.webp","/tablet/tablet3.webp","/tablet/tablet4.webp","/tablet/tablet5.webp"]),
    ],
    [
        'name' => 'Auriculares inalámbricos',
        'price' => 59.99,
        'image' => '/auriculares/auri1.webp',
        'category' => 'Auriculares',
        'description' => 'Auriculares Bluetooth con cancelación activa de ruido y batería de 20h.En dos colores.',
        'gallery' => json_encode(["/auriculares/auri1.webp", "/auriculares/auri2.webp","/auriculares/auri3.webp","/auriculares/auri4.webp","/auriculares/auric1.webp","/auriculares/auric2.webp","/auriculares/auric3.webp","/auriculares/auric4.webp"]),
    ],
    [
        'name' => 'Cascos con micrófono',
        'price' => 39.99,
        'image' => '/cascos/cascos1.webp',
        'category' => 'Auriculares',
        'description' => 'Cascos gaming con micrófono retráctil, sonido envolvente y diseño ergonómico.En dos colores.',
        'gallery' => json_encode(["/cascos/cascos1.webp", "/cascos/cascos2.webp","/cascos/cascos3.webp","/cascos/cascos4.webp"]),
    ],
    [
        'name' => 'Ratón óptico',
        'price' => 59.99,
        'image' => '/raton/raton1.webp',
        'category' => 'Ratones',
        'description' => 'Ratón óptico inalámbrico con sensor de alta precisión y diseño ergonómico.',
        'gallery' => json_encode(["/raton/raton1.webp", "/raton/raton2.webp"]),
    ],
    [
        'name' => 'Cargador',
        'price' => 19.99,
        'image' => '/cargador/cargador1.webp',
        'category' => 'Cargadores',
        'description' => 'Cargador rápido de 20W para iPhone y iPad. Compatible con USB-C.',
        'gallery' => json_encode(["/cargador/cargador1.webp", "/cargador/cargador2.webp","/cargador/cargador3.webp","/cargador/cargador4.webp"]),
        
    ],
    [
        'name' => 'Baterias externas',
        'price' => 29.99,
        'image' => '/bateria/bateria1.webp',
        'category' => 'Baterías',
        'description' => 'Batería externa de 10000mAh con carga rápida y puerto USB-C.',
        'gallery' => json_encode(["/bateria/bateria1.webp", "/bateria/bateria2.webp","/bateria/bateria3.webp","/bateria/bateria4.webp"]),
    ],
    [
        'name' => 'Discos',
        'price' => 19.99,
        'image' => '/disco/disco1.webp',
        'category' => 'Discos',
        'description' => 'Disco duro externo de 1TB con conexión USB 3.0 y diseño compacto.',
        'gallery' => json_encode(["/disco/disco1.webp", "/disco/disco2.webp","/disco/disco3.webp","/disco/disco4.webp"]),
    ],
    [
        'name' => 'Teclado mecánico',
        'price' => 89.99,
        'image' => '/teclados/teclado1.png',
        'category' => 'Teclados',
        'description' => 'Teclado mecánico RGB con retroiluminación y switches mecánicos.',
        'gallery' => json_encode(["/teclados/teclado1.png", "/teclados/teclado2.png","/teclados/teclado3.png"]),
    ],
    [
        'name' => 'Webcam HD',
        'price' => 49.99,
        'image' => '/webcam/web-cam1.webp',
        'category' => 'Webcams',
        'description' => 'Webcam HD 1080p con micrófono integrado y enfoque automático.',
        'gallery' => json_encode(["/webcam/web-cam1.webp", "/webcam/web-cam2.webp","/webcam/web-cam3.webp", "/webcam/web-cam4.webp", "/webcam/web-cam5.webp"]),
        
    ],
]);

    }
}
