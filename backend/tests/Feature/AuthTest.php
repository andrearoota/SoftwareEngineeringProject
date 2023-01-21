<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Testing\Fluent\AssertableJson;
use Tests\TestCase;

class AuthTest extends TestCase
{
    use RefreshDatabase;

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_registration()
    {
        $user = [
            'first_name' => 'Mario',
            'last_name' => 'Rossi',
            'gender' => 'm',
            'birthdate' => '1998-03-26',
            'codice_fiscale' => 'LLLFFF98C26A794F',
            'email' => 'mario@test.com',
            'password' => 'password'
        ];

        $response = $this->postJson("api/auth/register", $user);

        $response
            ->assertStatus(200)
            ->assertJson(
                fn (AssertableJson $json) =>
                $json->hasAll(['user', 'status', 'message'])
            );

        $user = new User($response->decodeResponseJson()['user']);
        $user->id = $response->decodeResponseJson()['user']['id'];

        // Approved by admin
        $data = ['approved_by_administrator' => 'true'];

        // Not auth request
        $response = $this->patchJson("api/admin/users/$user->id", $data);
        $response->assertStatus(401)
            ->assertJson(
                fn (AssertableJson $json) =>
                $json->hasAll(['message'])
            );

        // Auth request with no Admin privileges
        $response = $this
            ->actingAs($user)
            ->patchJson("api/admin/users/$user->id", $data);

        $response->assertStatus(401)
            ->assertJson(
                fn (AssertableJson $json) =>
                $json->hasAll(['message'])
            );

        // Auth request with Admin privileges
        $admin = \App\Models\User::factory()->create([
            'approved_by_administrator' => true,
            'is_admin' => true,
        ]);

        $response = $this
            ->actingAs($admin)
            ->patchJson("api/admin/users/$user->id", $data);

        $response->assertStatus(200)
            ->assertJson(
                fn (AssertableJson $json) =>
                $json->hasAll(['status', 'message'])
                    ->where('status', 'success')
                    ->where('user.approved_by_administrator', true)
                    ->etc()
            );
    }

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_login()
    {
        $user = User::factory()->create();

        $data = [
            'email' => $user->email,
            'password' => 'password'
        ];

        $response = $this->postJson("api/auth/login", $data);
        $response->assertStatus(200)
            ->assertJson(
                fn (AssertableJson $json) =>
                $json->hasAll(['status', 'message'])
                    ->where('status', 'success')
                    ->whereType('authorisation.token', 'string')
                    ->etc()
            );

        $token = $response->decodeResponseJson()['authorisation']['token'];

        // Get data to test token
        $response = $this->getJson("api/users/$user->id/stocks", [], ['Authorization' => "Bearer $token"]);
        $response->assertStatus(200);
    }

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_logout()
    {
        $user = User::factory()->create();

        $data = [
            'email' => $user->email,
            'password' => 'password'
        ];

        $response = $this->postJson("api/auth/login", $data);
        $token = $response->decodeResponseJson()['authorisation']['token'];
        
        $response = $this
            ->actingAs($user)
            ->postJson("api/auth/logout");

        $response->assertStatus(200)
            ->assertJson(
                fn (AssertableJson $json) =>
                $json->hasAll(['status', 'message'])
                    ->where('status', 'success')
                    ->etc()
            );

        // Get data to test token
        $response = $this->getJson("api/users/$user->id/stocks", ['Authorization' => "Bearer $token"]);
        $response->assertStatus(401);
    }
}
