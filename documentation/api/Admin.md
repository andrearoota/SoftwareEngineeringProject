# Project: Admin
Endpoint utilizzabili esclusivamente dagli utenti di tipo "admin".
# 📁 Collection: Users 


## End-point: Get all users
Ritorna tutti gli utenti iscritti al sito
### Method: GET
>```
>localhost:80/api/admin/users
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
    "users": [
        {
            "id": 2,
            "first_name": "Morgana",
            "last_name": "Barbieri",
            "gender": "f",
            "birthdate": "2012-03-26T00:00:00.000000Z",
            "codice_fiscale": "OSZFWA56V20L290R",
            "wallet": 985.81,
            "email": "wanda11@example.net",
            "email_verified_at": "2023-01-03T22:49:00.000000Z",
            "approved_by_administrator": true,
            "is_admin": false,
            "created_at": "2023-01-03T22:49:00.000000Z",
            "updated_at": "2023-01-03T22:49:00.000000Z"
        },
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Approve user
Approva o disapprova un utente
### Method: PATCH
>```
>localhost:80/api/admin/users/1
>```
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
        "updated_at": "2023-01-04T23:19:27.000000Z"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Stocks 


## End-point: Get all stocks
Ritorna tutti gli utenti e le relative stocks
### Method: GET
>```
>localhost:80/api/admin/stocks
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
    "users": [
        {
            "id": 2,
            "first_name": "Morgana",
            "last_name": "Barbieri",
            "gender": "f",
            "birthdate": "2012-03-26T00:00:00.000000Z",
            "codice_fiscale": "OSZFWA56V20L290R",
            "wallet": 985.81,
            "email": "wanda11@example.net",
            "email_verified_at": "2023-01-03T22:49:00.000000Z",
            "approved_by_administrator": true,
            "is_admin": false,
            "created_at": "2023-01-03T22:49:00.000000Z",
            "updated_at": "2023-01-03T22:49:00.000000Z",
            "stocks": [
                {
                    "id": 18,
                    "stock_name": "FB",
                    "purchase_cost": 362.95,
                    "number_stocks": 7,
                    "current_value": 169.49,
                    "user_id": 2,
                    "created_at": "2023-01-03T22:49:00.000000Z",
                    "updated_at": "2023-01-03T23:09:05.000000Z"
                },
            ]
        },
    ]
}
```