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
        parent::__construct();
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

    /**
     * Get all users.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    protected function getUsers(Request $request): \Illuminate\Http\JsonResponse
    {
        $request->validate([
            'approved' => 'in:true,false', // Only so it accepts string "true" / "false", using "boolean" only accepts "0" / "1"
        ]);

        if ($request->query('approved') === null) {
            $response = ModelsUser::all();
        } else {
            $response = ModelsUser::all()
                ->where('approved_by_administrator', $request->boolean('approved'));
        }

        return response()->json([
            'status' => 'success',
            'users' => $response,
        ]);
    }

    /**
     * Update "approved_by_administrator" by user id.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    protected function updateApprovedByAdministrator(Request $request): \Illuminate\Http\JsonResponse
    {
        $request->validate([
            'approved_by_administrator' => 'required|in:true,false',
        ]);

        $this->user = ModelsUser::where('id', $request->user_id)
            ->first();

        if ($this->user === null) {
            return response()->json([
                'status' => 'error',
                'message' => 'This user_id not exist.',
            ]);
        }

        $this->user->approved_by_administrator = $request->boolean('approved_by_administrator');
        $this->user->save();

        return response()->json([
            'status' => 'success',
            'user' => $this->user,
        ]);
    }
}
