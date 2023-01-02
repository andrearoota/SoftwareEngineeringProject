<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User as ModelsUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserAdmin extends UserAbstract
{

    private $user;
    /**
     * We establish this function in our controller class so that we can use the auth:api middleware
     * within it to block unauthenticated access to certain methods within the controller
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
        $this->user = Auth::user();
    }

    /**
     * Get all stocks.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function getStocks(): \Illuminate\Http\JsonResponse
    {
        return response()->json([
            'status' => 'success',
            'users' => ModelsUser::all()->loadMissing(['stocks']),
        ]);
    }
}
