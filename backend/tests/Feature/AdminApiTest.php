<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Testing\Fluent\AssertableJson;
use Tests\TestCase;

class AdminApiTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_get_users()
    {
        $admin = User::factory()->create(
            ["is_admin" => true]
        );

        $url = route('getAdminAllUsers');

        // Not auth request
        $response = $this->getJson($url);
        $response->assertStatus(401)
            ->assertJson(
                fn (AssertableJson $json) =>
                $json->hasAll(['message'])
            );

        // Auth request
        $response = $this
            ->actingAs($admin)
            ->getJson($url);
        $response->assertStatus(200)
            ->assertJson(
                fn (AssertableJson $json) =>
                $json->hasAll(['status', 'users.1'])
                    ->etc()
            );
    }

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_get_stocks()
    {
        $admin = User::factory()->create(
            ["is_admin" => true]
        );

        $url = route('getAdminAllStocks');

        // Not auth request
        $response = $this->getJson($url);
        $response->assertStatus(401)
            ->assertJson(
                fn (AssertableJson $json) =>
                $json->hasAll(['message'])
            );

        // Auth request
        $response = $this
            ->actingAs($admin)
            ->getJson($url);
        $response->assertStatus(200)
            ->assertJson(
                fn (AssertableJson $json) =>
                $json->hasAll(['status', 'users.1.stocks'])
                    ->etc()
            );
    }

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_approved_by_administrator()
    {
        $user = User::factory()->create();
        $admin = User::factory()->create(
            ["is_admin" => true]
        );

        $url = route('patchApprovedByAdministrator', ['user_id' => $user->id]);

        $data = ['approved_by_administrator' => 'true'];

        $expectedApprovedByAdministrator = true;

        // Not auth request
        $response = $this->patchJson($url, $data);
        $response->assertStatus(401)
            ->assertJson(
                fn (AssertableJson $json) =>
                $json->hasAll(['message'])
            );

        // Auth request
        $response = $this
            ->actingAs($admin)
            ->patchJson($url, $data);
        $response->assertStatus(200)
            ->assertJson(
                fn (AssertableJson $json) =>
                $json->hasAll(['status', 'user'])
                ->where('user.approved_by_administrator', $expectedApprovedByAdministrator)
                    ->etc()
            );
    }
}
