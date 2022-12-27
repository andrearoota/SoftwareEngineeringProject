<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User as ModelsUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserAuth extends Controller
{

    /**
     * We establish this function in our controller class so that we can use the auth:api middleware
     * within it to block unauthenticated access to certain methods within the controller
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    /**
     * This method authenticates a user with their email and password.
     * When a user is successfully authenticated, the Auth facade attempt() method returns the JWT token.
     * The generated token is retrieved and returned as JSON with the user object
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
        $credentials = $request->only('email', 'password');

        $token = Auth::attempt($credentials);

        if ($token) {
            $user = Auth::user();
            if ($user->approved_by_administrator) {
                return response()->json([
                    'status' => 'success',
                    'user' => $user,
                    'authorisation' => [
                        'token' => $token,
                        'type' => 'bearer',
                    ]
                ]);
            }
        }

        return response()->json([
            'status' => 'error',
            'message' => 'Unauthorized',
        ], 401);
    }

    /**
     * This method creates the user record and logs in the user with token generations
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        /**
         * Validation logic
         * If fail return JSON
         * {"message":"...","errors":{"password":["..."]}}
         */
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'gender' => 'required|string|max:1|in:m,f',
            'birthdate' => 'required|date|date_format:Y-m-d',
            'codice_fiscale' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);

        $user = ModelsUser::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'gender' => $request->gender,
            'birthdate' => $request->birthdate,
            'codice_fiscale' => $request->codice_fiscale,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        // $token = Auth::login($user); No login because not approved by admin
        return response()->json([
            'status' => 'success',
            'message' => 'User created successfully',
            'user' => $user,
            /*'authorisation' => [
                'token' => $token,
                'type' => 'bearer',
            ]*/
        ]);
    }

    /**
     * This method invalidates the user Auth token
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function logout()
    {
        Auth::logout();
        return response()->json([
            'status' => 'success',
            'message' => 'Successfully logged out',
        ]);
    }

    /**
     * This method invalidates the user Auth token and generates a new token
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function refresh()
    {
        return response()->json([
            'status' => 'success',
            'user' => Auth::user(),
            'authorisation' => [
                'token' => Auth::refresh(),
                'type' => 'bearer',
            ]
        ]);
    }
}
