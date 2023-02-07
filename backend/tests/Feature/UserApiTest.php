<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Testing\Fluent\AssertableJson;
use Tests\TestCase;

class UserApiTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_get_stocks()
    {
        $user = User::factory()->create();

        $url = route('getUserStocks', ['user_id' => $user->id]);

        // Not auth request
        $response = $this->getJson($url);
        $response->assertStatus(401)
            ->assertJson(
                fn (AssertableJson $json) =>
                $json->hasAll(['message'])
            );

        // Auth request
        $response = $this
            ->actingAs($user)
            ->getJson($url);
        $response->assertStatus(200)
            ->assertJson(
                fn (AssertableJson $json) =>
                $json->hasAll(['status', 'user', 'user.stocks'])
                    ->etc()
            );
    }

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_increase_or_decrease_wallet()
    {
        $user = User::factory()->create([
            'wallet' => 50.0,
        ]);

        // Deposit

        $url = route('patchWallet', ['user_id' => $user->id]);

        $data = ['increase' => 57.75];

        $expectedWallet = $user->wallet + $data['increase'];

        // Not auth request
        $response = $this->patchJson($url, $data);
        $response->assertStatus(401)
            ->assertJson(
                fn (AssertableJson $json) =>
                $json->hasAll(['message'])
            );

        // Auth request
        $response = $this
            ->actingAs($user)
            ->patchJson($url, $data);
        $response->assertStatus(200)
            ->assertJson(
                fn (AssertableJson $json) =>
                $json->hasAll(['status', 'user'])
                    ->where('user.wallet', $expectedWallet)
                    ->etc()
            );

        // Withdraw
        $url = route('patchWallet', ['user_id' => $user->id]);

        $data = ['increase' => -60];

        $expectedWallet = $expectedWallet + $data['increase'];

        // Auth request
        $response = $this
            ->actingAs($user)
            ->patchJson($url, $data);
        $response->assertStatus(200)
            ->assertJson(
                fn (AssertableJson $json) =>
                $json->hasAll(['status', 'user'])
                    ->where('user.wallet', $expectedWallet)
                    ->etc()
            );
    }
}
