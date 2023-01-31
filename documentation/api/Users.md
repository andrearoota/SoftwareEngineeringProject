# Project: Users
Endopoint utilizzabili dagli utenti autenticati

## End-point: Get all stocks
Ritorna le stocks dell'utente
### Method: GET
>```
>localhost:80/api/users/1/stocks
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
        "id": 1,
        "first_name": "Demian",
        "last_name": "De Angelis",
        "gender": "m",
        "birthdate": "1999-11-24T00:00:00.000000Z",
        "codice_fiscale": "OJWTGK04H13F775A",
        "wallet": 3091.2,
        "email": "roman10@example.com",
        "email_verified_at": "2023-01-03T22:49:00.000000Z",
        "approved_by_administrator": true,
        "is_admin": false,
        "created_at": "2023-01-03T22:49:00.000000Z",
        "updated_at": "2023-01-04T23:19:27.000000Z",
        "stocks": [
            {
                "id": 12,
                "stock_name": "CVS",
                "purchase_cost": 292.16,
                "number_stocks": 2,
                "current_value": 92.91,
                "user_id": 1,
                "created_at": "2023-01-03T22:49:00.000000Z",
                "updated_at": "2023-01-03T23:09:05.000000Z"
            },
        ]
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Increase wallet
Aggiunta fondi al portafoglio
### Method: PATCH
>```
>localhost:80/api/users/11/increase
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
        "id": 11,
        "first_name": "Nome",
        "last_name": "Cognome",
        "gender": "m",
        "birthdate": "1998-03-26T00:00:00.000000Z",
        "codice_fiscale": "LLLFFF98C26A794F",
        "wallet": 451.5,
        "email": "test@test.com",
        "email_verified_at": "2023-01-03T22:49:00.000000Z",
        "approved_by_administrator": true,
        "is_admin": true,
        "created_at": "2023-01-03T22:49:00.000000Z",
        "updated_at": "2023-01-04T23:23:36.000000Z"
    }
}
```