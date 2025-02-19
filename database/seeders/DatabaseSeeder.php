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

        Models\Product::factory()->count(5)->create();
    }
}
