<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User as ModelsUser;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserBase extends UserAbstract
{
    private $user;
    /**
     * We establish this function in our controller class so that we can use the auth:api middleware
     * within it to block unauthenticated access to certain methods within the controller
     */
    public function __construct()
    {
        parent::__construct();
        $this->user = Auth::user();
    }

    /**
     * Get stocks.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function getStocks(Request $request): \Illuminate\Http\JsonResponse
    {
        if ($request->user_id !== $this->user->id) {
            throw new AuthorizationException('non autorizzato');
        }

        $this->user->stocks; // Save stocks into model
        return response()->json([
            'status' => 'success',
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
            'increase' => 'required|decimal:1,2',
        ]);

        $this->user->wallet = $request->float('increase');
        $this->user->save();

        return response()->json([
            'status' => 'success',
            'user' => $this->user,
        ]);
    }
}