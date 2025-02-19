<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
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

        $random_key = random_int(0, 4);

        return [
            'name' => $names[$random_key],
            'description' => $this->faker->text(),
            'price' => $this->faker->numberBetween(20000, 50000),
            'stock' => $this->faker->numberBetween(1, 100),
            'image_path' => $image_paths[$random_key],
        ];
    }
}
