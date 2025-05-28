<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        
        // Usuario administrador
        User::create([
            'name' => 'Admin',
            'email' => 'admin@nefelibata.com',
            'password' => Hash::make('12345678'), // o bcrypt('admin1234')
            'role' => 'admin',
        ]);

        $this->call([
            ProductSeeder::class,
        ]);
    }
}
