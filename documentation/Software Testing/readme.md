# Software Testing @andrearoota

## Libreria di test
Per testare il corretto funzionamento del software sfruttiamo il supporto nativo a `PHPUNIT` fornitoci dal framework Laravel ([documentazione](https://laravel.com/docs/9.x/testing)) utilizzando principalmente i test denominati `Feature` che consentono di testare grandi porzioni di codice includendo delle richieste HTTP ai JSON endpoint.

I test sono scritti all’interno della directory: `backend/tests/`.

## Generazione dati test
Un'altra funzionalità fornita dal framework è quella di generare oggetti o interi database di test utilizzando la libreria [Faker](https://fakerphp.github.io/).

```php
/**
 * Define the model's default state.
 *
 * @return array<string, mixed>
 */
public function definition()
{
    $gender = fake()->randomElement(['male', 'female']);
    return [
        'first_name' => fake("it_IT")->firstName($gender),
        'last_name' => fake("it_IT")->lastName(),
        'gender' => $gender[0],
        'birthdate' => fake()->date(),
        'codice_fiscale' => fake("it_IT")->unique()->taxId(),
        'wallet' => fake()->randomFloat(2, 100, 5000),
        'email' => fake()->unique()->safeEmail(),
        'email_verified_at' => now(),
        'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        'remember_token' => Str::random(10),
        'approved_by_administrator' => true,
        'is_admin' => false
    ];
}
```
Le definizioni dei dati da generare sono scritte all’interno della directory: `backend/database/`.

## Elenco test
### 01. AuthTest
Si occupa di testare l'intero servizio di autenticazione, è composto da tre sotto test:
- test_registration
- test_login
- test_logout

### 02. UserApiTest
Si occupa di testare le API esposte utilizzabili dagli utenti autenticati di livello **base**, è composto da due sotto test:
- test_get_stocks
- test_increase_or_decrease_wallet

### 03. AdminApiTest
Si occupa di testare le API esposte utilizzabili dagli utenti autenticati di livello **admin**, è composto da tre sotto test:
- test_get_users
- test_get_stocks
- test_approved_by_administrator

## Coverage
Di seguito il report generato da PHPUnit.
```
PASS  Tests\Unit\ExampleTest
✓ that true is true

PASS  Tests\Feature\AdminApiTest
✓ get users
✓ get stocks
✓ approved by administrator

PASS  Tests\Feature\AuthTest
✓ registration
✓ login
✓ logout

PASS  Tests\Feature\UserApiTest
✓ get stocks
✓ increase or decrease wallet

Tests:  9 passed
Time   2.40s

Console/Kernel 22..25, 23 ............................................. 33.3 %
Exceptions/Handler  .................................................. 100.0 %
Http/Controllers/Controller  ......................................... 100.0 %
Http/Controllers/Stocks/StocksController ............................... 0.0 %
Http/Controllers/Stocks/StocksSchedule ................................. 0.0 %
Http/Controllers/Stocks/StocksScheduleInterface  ..................... 100.0 %
Http/Controllers/User/UserAbstract 64..67, 137..143, 66, 141..145 ..... 79.7 %
Http/Controllers/User/UserAdmin 59..60, 85..86, 87..88 ................ 82.4 %
Http/Controllers/User/UserAuthInterface  ............................. 100.0 %
Http/Controllers/User/UserBase 43, 67 ................................. 92.0 %
Http/Kernel  ......................................................... 100.0 %
Http/Middleware/Authenticate 18 ....................................... 50.0 %
Http/Middleware/EncryptCookies  ...................................... 100.0 %
Http/Middleware/PreventRequestsDuringMaintenance  .................... 100.0 %
Http/Middleware/RedirectIfAuthenticated ................................ 0.0 %
Http/Middleware/TrimStrings  ......................................... 100.0 %
Http/Middleware/TrustHosts ............................................. 0.0 %
Http/Middleware/TrustProxies  ........................................ 100.0 %
Http/Middleware/ValidateSignature  ................................... 100.0 %
Http/Middleware/VerifyCsrfToken  ..................................... 100.0 %
Http/Middleware/onlyAdminAPI  ........................................ 100.0 %
Models/Stocks  ....................................................... 100.0 %
Models/User  ......................................................... 100.0 %
Providers/AppServiceProvider  ........................................ 100.0 %
Providers/AuthServiceProvider  ....................................... 100.0 %
Providers/BroadcastServiceProvider ..................................... 0.0 %
Providers/EventServiceProvider  ...................................... 100.0 %
Providers/RouteServiceProvider  ...................................... 100.0 %

Total Coverage ........................................................ 69.9 %
```