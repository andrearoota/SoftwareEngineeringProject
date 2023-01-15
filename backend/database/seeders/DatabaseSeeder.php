<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(10)
            ->has(\App\Models\Stocks::factory()->count(15))
            ->create();

        \App\Models\User::factory()->create([
            'first_name' => 'Nome',
            'last_name' => 'Cognome',
            'gender' => 'm',
            'birthdate' => '1998-03-26',
            'codice_fiscale' => 'LLLFFF98C26A794F',
            'email' => 'admin@admin.com',
            'approved_by_administrator' => true,
            'is_admin' => true,
        ]);

        \App\Models\User::factory()
            ->has(\App\Models\Stocks::factory()->count(15))
            ->create([
                'first_name' => 'Nome',
                'last_name' => 'Cognome',
                'gender' => 'm',
                'birthdate' => '1998-03-26',
                'codice_fiscale' => 'LLLFFF98C26A794F',
                'email' => 'user@user.com',
                'approved_by_administrator' => true,
                'is_admin' => false,
            ]);
    }
}
