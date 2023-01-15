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

        $this->user->wallet += $request->float('increase');
        $this->user->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Wallet updated successfully',
            'user' => $this->user,
        ]);
    }
}