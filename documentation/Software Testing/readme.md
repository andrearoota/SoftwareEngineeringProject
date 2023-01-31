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
Si occupa di testare le API esposte utilizzabili dagli utenti autenticati di livello **admin**, è composto da due sotto test:
- test_get_users
- test_get_stocks
- test_approved_by_administrator