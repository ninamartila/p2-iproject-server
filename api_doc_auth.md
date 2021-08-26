# Tour Schedule App Server

Tour Schedule App is an application to Tour Scheduling. This app has :

- RESTful endpoint for asset's CRUD operation
- JSON formatted response

&nbsp;

## RESTful endpoints

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
   "password": <password>
}
```

_Response (201 Ok)_

```
{
    "id": 3,
    "username": "test1",
    "email": "test1@gmail.com"
}
```

_Response (400 - Bad Request)_

```
{
  "message": [
        "Username is required",
        "Password is required",
        ...
    ]
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
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

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```
