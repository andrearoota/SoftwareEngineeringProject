<?php

namespace App\Http\Controllers\Stocks;

interface StocksScheduleInterface
{
    /**
     * This method get current value of stock by name from API.
     * @link https://marketstack.com/documentation
     *
     * @param string $stockName example "AAPL"
     * @return float current value
     */
    public function getCurrentValue(string $stockName): float;

    /**
     * This method update all stocks by stockName with currentValue
     *
     * @param string $stockName
     * @param float $currentValue
     * @return void
     */
    public function updateCurrentValue(string $stockName, float $currentValue): void;

}
