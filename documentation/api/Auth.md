# Project: Auth
Metodi per l'autenticazione al sito.

## End-point: Login
Login di un utente.
### Method: POST
>```
>localhost:80/api/auth/login
>```
### Headers

|Content-Type|Value|
|---|---|
|Accept|application/json|


### Body formdata

|Param|value|Type|
|---|---|---|
|email|test@test.com|text|
|password|password|text|


### Response: 200
```json
{
    "status": "success",
    "user": {
        "id": 33,
        "first_name": "Nome",
        "last_name": "Cognome",
        "gender": "m",
        "birthdate": "1998-03-26T00:00:00.000000Z",
        "codice_fiscale": "LLLFFF98C26A794F",
        "email": "test@test.com",
        "email_verified_at": "2022-12-27T15:56:08.000000Z",
        "approved_by_administrator": true,
        "created_at": "2022-12-27T15:56:08.000000Z",
        "updated_at": "2022-12-27T15:56:08.000000Z"
    },
    "authorisation": {
        "token": "xxx",
        "type": "bearer"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Register
Registra un utente, affinchè sia attivo l'account bisogna attendere l'approvazione di un amministratore.
### Method: POST
>```
>localhost:80/api/auth/register
>```
### Headers

|Content-Type|Value|
|---|---|
|Accept|application/json|


### Body formdata

|Param|value|Type|
|---|---|---|
|first_name|Mario|text|
|last_name|Rossi|text|
|gender|m|text|
|birthdate|2020-04-12|text|
|codice_fiscale|RSSMRA20D12A794F|text|
|email|mario@test.com|text|
|password|mario1234|text|


### Response: 200
```json
{
    "status": "success",
    "message": "User created successfully",
    "user": {
        "approved_by_administrator": false,
        "first_name": "Mario",
        "last_name": "Rossi",
        "gender": "m",
        "birthdate": "2020-04-12T00:00:00.000000Z",
        "codice_fiscale": "RSSMRA20D12A794F",
        "email": "mario@test.com",
        "updated_at": "2022-12-27T22:53:37.000000Z",
        "created_at": "2022-12-27T22:53:37.000000Z"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Logout
Invalida il token di autorizzazione.
### Method: POST
>```
>localhost:80/api/auth/logout
>```
### Headers

|Content-Type|Value|
|---|---|
|Accept|application/json|


### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|xxx|string|


### Response: 200
```json
{
    "status": "success",
    "message": "Successfully logged out"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Refresh
Invalida l'attuale token di autorizzazione e ne genera uno nuovo.
### Method: POST
>```
>localhost:80/api/auth/refresh
>```
### Headers

|Content-Type|Value|
|---|---|
|Accept|application/json|


### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|xxx|string|


### Response: 200
```json
{
    "status": "success",
    "user": {
        "id": 33,
        "first_name": "Nome",
        "last_name": "Cognome",
        "gender": "m",
        "birthdate": "1998-03-26T00:00:00.000000Z",
        "codice_fiscale": "LLLFFF98C26A794F",
        "email": "test@test.com",
        "email_verified_at": "2022-12-27T15:56:08.000000Z",
        "approved_by_administrator": true,
        "created_at": "2022-12-27T15:56:08.000000Z",
        "updated_at": "2022-12-27T15:56:08.000000Z"
    },
    "authorisation": {
        "token": "xxx",
        "type": "bearer"
    }
}
```
