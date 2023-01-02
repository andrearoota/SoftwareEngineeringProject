<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;

interface UserAuthInterface
{
    /**
     * This method authenticates a user with their email and password.
     * When a user is successfully authenticated, the Auth facade attempt() method returns the JWT token.
     * The generated token is retrieved and returned as JSON with the user object
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request): \Illuminate\Http\JsonResponse;

    /**
     * This method creates the user record and logs in the user with token generations
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request): \Illuminate\Http\JsonResponse;

    /**
     * This method invalidates the user Auth token
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout(): \Illuminate\Http\JsonResponse;

    /**
     * This method invalidates the user Auth token and generates a new token
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh(): \Illuminate\Http\JsonResponse;
}
