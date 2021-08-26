# Jobstreet App Server

Tour Schedule App is an application to Tour Scheduling. This app has :

- RESTful endpoint for asset's CRUD operation
- JSON formatted response

&nbsp;

## RESTful endpoints

### GET /userList

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
[
    {
        "id": 3,
        "username": "test1",
        "email": "test1@gmail.com",
        "password": "$2b$08$c/YJYv0Pegm0ZwEJqZpet.5NDqfEEiUcQ.t21AbcBni3dujIjnAhK",
        "ProfileId": 3,
        "createdAt": "2021-08-25T20:42:05.915Z",
        "updatedAt": "2021-08-25T20:42:05.915Z"
    },
    {
        "id": 4,
        "username": "test2",
        "email": "test2@gmail.com",
        "password": "$2b$08$FwTR0JJShBN8plL5EAsYn.M9oFoM2SEKE4DddxDh8Wriz4NDRCRfO",
        "ProfileId": 4,
        "createdAt": "2021-08-25T21:25:24.306Z",
        "updatedAt": "2021-08-25T21:25:24.306Z"
    },
    ...
]

```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```
