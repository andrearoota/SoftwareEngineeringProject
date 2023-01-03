<?php

use App\Http\Controllers\User\UserAdmin;
use App\Http\Controllers\User\UserBase;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/**
 * API to handle the core logic of the authentication process.
 */
Route::controller(UserBase::class)->prefix('auth')->group(function () {
    Route::post('login', 'login')->name('login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
    Route::get('stocks', 'getStocks');
});

/**
 * API to handle stocks.
 */
Route::controller(UserBase::class)->prefix('stocks')->group(function () {
    Route::get('', 'getStocks');
});

/**
 * API to handle stocks.
 */
Route::controller(UserAdmin::class)->prefix('admin/stocks')->middleware('onlyAdmin')->group(function () {
    Route::get('', 'getStocks');
});