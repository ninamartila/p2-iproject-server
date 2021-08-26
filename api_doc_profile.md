# Jobstreet App Server

Tour Schedule App is an application to Tour Scheduling. This app has :

- RESTful endpoint for asset's CRUD operation
- JSON formatted response

&nbsp;

## RESTful endpoints

### GET /profile

> Job Get All

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
{
    "username": "test",
    "email": "test@gmail.com",
    "id": 1,
    "fullName": "",
    "phoneNumber": "",
    "address": "",
    "imageProfile": "",
    "gender": "",
    "createdAt": "2021-08-25T19:38:42.400Z",
    "updatedAt": "2021-08-25T19:38:42.400Z"
}

```

_Response (400 - Bad Request)_

```
{
  "message": [
        "Username is required",
        "fullName is required",
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

### PUT /profile

> Job Get By Id

_Request Header_

```
{
    "access_token": <access_token>
}
```

_Request Body_

```
{
    "username": <username>,
    "email": <email>,
    "id": <id>,
    "fullName": <fullName>,
    "phoneNumber": <phoneNumber>,
    "address": <address>,
    "imageProfile": <imageProfile>,
    "gender": <gender>,
}
```

_Request Param_

```
not needed
```

_Response (200 Ok)_

```
{
    "username": "test",
    "email": "test@gmail.com",
    "id": 1,
    "fullName": "test",
    "phoneNumber": "test",
    "address": "test",
    "imageProfile": "https://ik.imagekit.io/awwiz0ff3hm/baju_atasan_muslim4_RKhIw2TLE.jpg",,
    "gender": "female",
    "createdAt": "2021-08-25T19:38:42.400Z",
    "updatedAt": "2021-08-25T19:38:42.400Z"
}

```

_Response (400 - Bad Request)_

```
{
  "message": [
        "Username is required",
        "fullName is required",
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
