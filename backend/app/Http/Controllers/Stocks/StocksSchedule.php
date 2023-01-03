<?php

namespace App\Http\Controllers\Stocks;

use App\Http\Controllers\Controller;
use App\Models\Stocks;
use Illuminate\Support\Facades\Http;

/**
 * 
 */
class StocksSchedule extends Controller implements StocksScheduleInterface
{
    private const BASE_URL_API = "https://api.marketstack.com/v1/eod";
    private $access_key;

    public function __construct()
    {
        $this->access_key = env('MARKETSTACK_KEY');
    }

    /**
     * Handle the incoming request.
     *
     * @return void
     */
    public function __invoke(): void
    {
        Stocks::select('stock_name')
            ->distinct()
            ->get()
            ->each(function ($item, $key) {
                $currentValue = $this->getCurrentValue($item->stock_name);
                $this->updateCurrentValue($item->stock_name, $currentValue);
            });
    }

    /**
     * This method get current value of stock by name from API.
     * @link https://marketstack.com/documentation
     *
     * @param string $stockName example "AAPL"
     * @return float current value
     */
    public function getCurrentValue(string $stockName): float
    {
        $query = [
            "access_key" => $this->access_key,
            "symbols" => $stockName,
            "sort" => "desc",
            "limit" => 1 // Only last value
        ];

        $response = Http::get(self::BASE_URL_API, $query);

        // Throw an exception if marketstack.com server error occurred
        $response->throw();

        return $response['data'][0]['close'];
    }

    /**
     * This method update all stocks by stockName with currentValue
     *
     * @param string $stockName
     * @param float $currentValue
     * @return void
     */
    public function updateCurrentValue(string $stockName, float $currentValue): void
    {
        Stocks::where('stock_name', $stockName)
              ->update(['current_value' => $currentValue]);
    }
}
