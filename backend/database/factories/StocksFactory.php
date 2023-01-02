<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Stocks>
 */
class StocksFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'stock_name' => fake()->randomElement(['AAPL', 'MSFT', 'HPQ']),
            'purchase_cost' => fake()->randomFloat(2, 100, 500),
        ];
    }
}
