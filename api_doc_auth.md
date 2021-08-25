# Tour Schedule App Server

Tour Schedule App is an application to Tour Scheduling. This app has :

- RESTful endpoint for asset's CRUD operation
- JSON formatted response

&nbsp;

## RESTful endpoints

### GET /users

> User Get All

_Request Header_

```
{
    "access_token": <access_token>
}
```

_Request Body_

```
not needed
```

_Response (200 Ok)_

```
[
    {
        "username": "ninamartila",
        "email": "ninamartila@gmail.com",
        "role": "admin",
        "phoneNumber": "088102314141",
        "address": "jalan bandung"
    },
    {
        "username": "nina",
        "email": "aku@gmail.com",
        "role": "admin",
        "phoneNumber": "088102314141",
        "address": "jalan bandung"
    },
    ...
]

```

_Response (500 - Internet Server Error)_

```
{
  "message": "Internet Server Error"
}
```

---

### GET /users/:id

> User Get By Id

_Request Header_

```
{
    "access_token": <access_token>
}
```

_Request Param_

```
{
    "id": <id>
}
```

_Request Body_

```
not needed
```

_Response (200 Ok)_

```
{
    "username": "ninamartila",
    "email": "ninamartila@gmail.com",
    "role": "admin",
    "phoneNumber": "088102314141",
    "address": "jalan bandung"
}

```

_Response (404 - Not Found)_

```
{
  "message": "User Not Found
}
```

_Response (500 - Internet Server Error)_

```
{
  "message": "Internet Server Error"
}
```

---

### POST /users/register

> Registration User

_Request Header_

```
not needed
```

_Request Body_

```
{
   "username": <username>,
   "email": <email>,
   "password": <password>,
   "role": <role>,
   "phoneNumber": <phoneNumber>,
   "address": <address>
}
```

_Response (201 Ok)_

```
{
    "username": "coba21",
    "email": "coba21@gmail.com",
    "role": "admin",
    "phoneNumber": "088102314141",
    "address": "jalan bandung"
}
```

_Response (400 - Bad Request)_

```
{
  "message": [
        "Username is required",
        "Minimum 5 characters required in password",
        ...
    ]
}
```

_Response (500 - Internet Server Error)_

```
{
  "message": "Internet Server Error"
}
```

---

### POST /users/login

> Log In User

_Request Header_

```
not needed
```

_Request Body_

```
{
    "email": <email>,
    "password": <password>
}
```

_Response (200 Ok)_

```
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYsImVtYWlsIjoiY29iYTE3QGdtYWlsLmNvbSIsImlhdCI6MTYyNzk1OTAxMH0.Q-hFJA_WAibNHrkbK2whK_gUCvvNzCyaRIfj_X8XI-A"
}
```

_Response (401 - Unauthorized)_

```
{
    "message": "Email/password invalid"
}
```

_Response (500 - Internet Server Error)_

```
{
  "message": "Internet Server Error"
}
```

---

### PUT /users/:id

> Edit Data User By Id

_Request Header_

```
{
    "access_token": <access_token>
}
```

_Request Param_

```
{
    "id": <id>
}
```

_Request Body_

```
{
    "username": <username>,
    "email": <email>,
    "password": <password>,
    "role": <role>,
    "phoneNumber": <phoneNumber>,
    "address": <address>
}
```

_Response (200 Ok)_

```
{
    "id": 5,
    "username": "nina",
    "email": "nina@gmail.com",
    "password": "12345",
    "role": "admin",
    "phoneNumber": "088102314141",
    "address": "jalan bandung",
    "createdAt": "2021-08-03T01:50:00.647Z",
    "updatedAt": "2021-08-03T02:55:14.414Z"
}
```

_Response (400 - Bad Request)_

```
{
    "message": [
        "Username is required",
        "Minimum 5 characters required in password",
        ...
    ]
}
```

_Response (404 - Not Found)_

```
{
    "message": "User Not Found"
}
```

_Response (500 - Internet Server Error)_

```
{
  "message": "Internet Server Error"
}
```

---

### DELETE /users/:id

> Delete Data User By Id

_Request Header_

```
{
    "access_token": <access_token>
}
```

_Request Param_

```
{
    "id": <id>
}
```

_Request Body_

```
not needed
```

_Response (200 Ok)_

```
{
    "message": "User has been deleted"
}
```

_Response (404 - Not Found)_

```
{
    "message": "User Not Found"
}
```

_Response (500 - Internet Server Error)_

```
{
  "message": "Internet Server Error"
}
```
