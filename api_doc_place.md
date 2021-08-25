# Jobstreet App Server

Jobstreet App is an application to job seeker. This app has :

- RESTful endpoint for asset's CRUD operation
- JSON formatted response

&nbsp;

## RESTful endpoints

### GET /companies

> Company Get All

_Request Header_

```
"access_token": <access_token>
```

_Request Body_

```
not needed
```

_Response (200 Ok)_

```
[
    {
        "id": 1,
        "name": "test1",
        "companyLogo": "https://ik.imagekit.io/awwiz0ff3hm/53627e03-47b1-44e6-88be-f472db198074_6mC0FvJzZ6.jpg",
        "location": "test1",
        "email": "test1@gmail.com",
        "description": "test1",
        "createdAt": "2021-08-05T12:20:04.317Z",
        "updatedAt": "2021-08-05T12:20:04.317Z"
    },
    {
        "id": 2,
        "name": "test2",
        "companyLogo": "https://ik.imagekit.io/awwiz0ff3hm/53627e03-47b1-44e6-88be-f472db198074_MAWPhxeRwWy.jpg",
        "location": "test2",
        "email": "test2@gmail.com",
        "description": "test2",
        "createdAt": "2021-08-05T12:21:47.557Z",
        "updatedAt": "2021-08-05T12:21:47.557Z"
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

### GET /companies/:id

> Company Get By Id

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
    "id": 1,
    "name": "test1",
    "companyLogo": "https://ik.imagekit.io/awwiz0ff3hm/53627e03-47b1-44e6-88be-f472db198074_6mC0FvJzZ6.jpg",
    "location": "test1",
    "email": "test1@gmail.com",
    "description": "test1",
    "createdAt": "2021-08-05T12:20:04.317Z",
    "updatedAt": "2021-08-05T12:20:04.317Z"
}

```

_Response (404 - Not Found)_

```
{
    "message": "Company Not Found"
}
```

_Response (500 - Internet Server Error)_

```
{
  "message": "Internet Server Error"
}
```

---

### POST /companies/cerate

> Create Data Companies

_Request Header_

```
"access_token": <access_token>
```

_Request Body_

```
{
    "name": <name>,
    "companyLogo": <comapanyLogo>,
    "location": <location>,
    "email": <email>,
    "description": <description>
}
```

_Response (201 Ok)_

```
{
    "id": 3,
    "name": "test3",
    "companyLogo": "https://ik.imagekit.io/awwiz0ff3hm/baju_atasan_muslim4_uHVjfLvaiC.jpg",
    "location": "test3",
    "email": "test3@gmail.com",
    "description": "test3",
    "updatedAt": "2021-08-08T01:43:22.428Z",
    "createdAt": "2021-08-08T01:43:22.428Z"
}
```

_Response (400 - Bad Request)_

```
{
  "message": [
        "Name is required",
        "Company Logo is required",
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

### PUT /comapanies/:id

> Edit Data Companies By Id

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
    "id": 3,
    "name": "test3",
    "companyLogo": "https://ik.imagekit.io/awwiz0ff3hm/baju_atasan_muslim4_uHVjfLvaiC.jpg",
    "location": "test3",
    "email": "test3@gmail.com",
    "description": "test3",
    "updatedAt": "2021-08-08T01:43:22.428Z",
    "createdAt": "2021-08-08T01:43:22.428Z"
}
```

_Response (400 - Bad Request)_

```
{
    "message": [
        "Name is required",
        "Location is required",
        ...
    ]
}
```

_Response (404 - Not Found)_

```
{
    "message": "Company Not Found"
}
```

_Response (500 - Internet Server Error)_

```
{
  "message": "Internet Server Error"
}
```

---

### DELETE /companies/:id

> Delete Data Company By Id

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
    "message": "Company has been deleted"
}
```

_Response (404 - Not Found)_

```
{
    "message": "Company Not Found"
}
```

_Response (500 - Internet Server Error)_

```
{
  "message": "Internet Server Error"
}
```
