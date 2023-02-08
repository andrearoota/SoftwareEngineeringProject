<?php

namespace App\Http\Controllers\Stocks;

use App\Http\Controllers\Controller;
use App\Models\Stocks;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class StocksController extends Controller
{
    /**
     * We establish this function in our controller class so that we can use the auth:api middleware
     * within it to block unauthenticated access to certain methods within the controller
     */
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    /**
     * Sell stocks
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    protected function sellStocks(Request $request): \Illuminate\Http\JsonResponse
    {
        $user = Auth::user();

        if ($request->user_id != $user->id) { // Dovremmo implementare le policy
            throw new AuthorizationException('non autorizzato');
        }

        $stock = Stocks::where('id', $request->stock_id)->first();

        $user->wallet += ($stock->current_value * $stock->number_stocks);
        $stock->delete();
        $user->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Stocks updated successfully',
            'user' => $user,
        ]);
    }
}
