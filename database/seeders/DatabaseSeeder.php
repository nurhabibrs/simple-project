<?php

namespace Database\Seeders;

use App\Models;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Models\User::factory()->unverified()->create([
            'name' => 'Admin',
            'email' => 'admin@mail.com',
            'remember_token' => null,
        ]);

        $image_paths = array(
            'images/coffe1.jpg',
            'images/coffe2.jpg',
            'images/coffe3.jpg',
            'images/coffe4.jpg',
            'images/coffe5.jpg',
        );

        $names = array(
            'Coffe 1',
            'Coffe 2',
            'Coffe 3',
            'Coffe 4',
            'Coffe 5',
        );

        for ($i = 0; $i < count($names); $i++) {
            Models\Product::factory()->create([
                'name' => $names[$i],
                'image_path' => $image_paths[$i],
            ]);
        }
    }
}
