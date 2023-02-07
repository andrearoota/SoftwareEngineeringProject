<?php

namespace App\Http\Controllers\User;

use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserBase extends UserAbstract
{
    /**
     * The user model.
     *
     * @var App\Models\User
     */
    private $user;

    /**
     * We establish this function in our controller class so that we can use the auth:api middleware
     * within it to block unauthenticated access to certain methods within the controller
     */
    public function __construct()
    {
        parent::__construct();
        /**
         * @link https://stackoverflow.com/questions/35160144/authuser-returns-null
         */
        $this->middleware(function ($request, $next) {
            $this->user = Auth::user();
            return $next($request);
        });
    }

    /**
     * Get stocks.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    protected function getStocks(Request $request): \Illuminate\Http\JsonResponse
    {
        if ($request->user_id != $this->user->id) {
            throw new AuthorizationException('non autorizzato');
        }

        $this->user->stocks; // Save stocks into model
        return response()->json([
            'status' => 'success',
            'message' => 'Stocks retrieved successfully',
            'user' => $this->user,
        ]);
    }

    /**
     * This method increase the wallet of the user_id
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    protected function increaseWallet(Request $request): \Illuminate\Http\JsonResponse
    {
        $request->validate([
            'increase' => 'required|numeric', // "decimal" don't work
        ]);

        if ($request->user_id != $this->user->id) { // Dovremmo implementare le policy
            throw new AuthorizationException('non autorizzato');
        }

        $amount = $request->float('increase');

        // if deposit 
        if ($amount >= 0) {
            $this->user->wallet += $amount;
            $this->user->save();

            return response()->json([
                'status' => 'success',
                'message' => 'Wallet updated successfully',
                'user' => $this->user,
            ]);
        }

        // if withdraw
        if ($this->user->wallet >= $amount) {

            /**
             * Qua ci va la logica di collegamento con l'istituto bancario
             */

            $this->user->wallet += $amount;
        } else {
            $totalStocksValue = 0;

            $this->user->stocks->each(function ($item) use ($totalStocksValue) {
                $totalStocksValue += ($item->number_stocks * $item->current_value);
            });

            if ($totalStocksValue >= $amount) {
                $this->user->wallet += $amount;
            } else {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Unavailable funds',
                    'user' => $this->user,
                ]);
            }
        }

        $this->user->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Wallet updated successfully',
            'user' => $this->user,
        ]);
    }
}
