<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Stocks>
 */
class StocksFactory extends Factory
{
    private $stocksName = [
        "AAPL", "ABBV", "ABT", "ACN", "ADBE", "AIG", "AMGN", "AMT", "AMZN",
        "AVGO", "AXP", "BA", "BAC", "BIIB", "BK", "BKNG", "BLK", "BMY",
        "BRKB", "C", "CAT", "CHTR", "CL", "CMCSA", "COF", "COP", "COST",
        "CRM", "CSCO", "CVS", "CVX", "DD", "DHR", "DIS", "DOW", "DUK",
        "EMR", "EXC", "F", "FB", "FDX", "GD", "GE", "GILD", "GM", "GOOG",
        "GOOGL", "GS", "HD", "HON", "IBM", "INTC", "JNJ", "JPM", "KHC",
        "KO", "LIN", "LLY", "LMT", "LOW", "MA", "MCD", "MDLZ", "MDT",
        "MET", "MMM", "MO", "MRK", "MS", "MSFT", "NEE", "NFLX", "NKE",
        "NVDA", "ORCL", "PEP", "PFE", "PG", "PM", "PYPL", "QCOM", "RTX",
        "SBUX", "SO", "SPG", "T", "TGT", "TMO", "TMUS", "TSLA", "TXN",
        "UNH", "UNP", "UPS", "USB", "V", "VZ", "WBA", "WFC", "WMT", "XOM"
    ];

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'stock_name' => fake()->randomElement($this->stocksName),
            'purchase_cost' => fake()->randomFloat(2, 100, 500),
            'number_stocks' => fake()->numberBetween(1, 20),
            'current_value' => fake()->randomFloat(2, 5, 20)
        ];
    }
}
