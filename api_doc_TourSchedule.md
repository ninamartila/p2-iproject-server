# Jobstreet App Server

Jobstreet App is an application to job seeker. This app has :

- RESTful endpoint for asset's CRUD operation
- JSON formatted response

&nbsp;

## RESTful endpoints

### GET /jobs

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
    "id": 5,
        "title": "test1",
        "description": "test1",
        "jobType": "test1",
        "imageJob": "https://ik.imagekit.io/awwiz0ff3hm/baju_atasan_muslim4_RKhIw2TLE.jpg",
        "createdAt": "2021-08-05T12:25:37.315Z",
        "updatedAt": "2021-08-05T12:25:37.315Z",
        "CompanyId": 2,
        "UserId": 1,
        "Company": {
            "id": 2,
            "name": "test2",
            "companyLogo": "https://ik.imagekit.io/awwiz0ff3hm/53627e03-47b1-44e6-88be-f472db198074_MAWPhxeRwWy.jpg",
            "location": "test2",
            "email": "test2@gmail.com",
            "description": "test2",
            "createdAt": "2021-08-05T12:21:47.557Z",
            "updatedAt": "2021-08-05T12:21:47.557Z"
        }
    },
    {
        "id": 4,
        "title": "test3",
        "description": "test3",
        "jobType": "test3",
        "imageJob": "https://lh5.googleusercontent.com/-4TWjl4VRhb0/TXuYqcmYJMI/AAAAAAAAAEs/zOKfqbtAO10/s1600/baju+bodo1.jpg",
        "createdAt": "2021-08-05T12:25:00.832Z",
        "updatedAt": "2021-08-06T08:07:00.620Z",
        "CompanyId": 1,
        "UserId": 1,
        "Company": {
            "id": 1,
            "name": "test1",
            "companyLogo": "https://ik.imagekit.io/awwiz0ff3hm/53627e03-47b1-44e6-88be-f472db198074_6mC0FvJzZ6.jpg",
            "location": "test1",
            "email": "test1@gmail.com",
            "description": "test1",
            "createdAt": "2021-08-05T12:20:04.317Z",
            "updatedAt": "2021-08-05T12:20:04.317Z"
        }
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

### GET /jobs/:id

> Job Get By Id

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
    "id": 5,
    "title": "test1",
    "description": "test1",
    "jobType": "test1",
    "imageJob": "https://ik.imagekit.io/awwiz0ff3hm/baju_atasan_muslim4_RKhIw2TLE.jpg",
    "createdAt": "2021-08-05T12:25:37.315Z",
    "updatedAt": "2021-08-05T12:25:37.315Z",
    "CompanyId": 2,
    "UserId": 1
}

```

_Response (404 - Not Found)_

```
{
    "message": "Job Not Found"
}
```

_Response (500 - Internet Server Error)_

```
{
  "message": "Internet Server Error"
}
```

---

### POST /jobs/cerate

> Create Data Job

_Request Header_

```
{
    "access_token": <access_token>
}
```

_Request Body_

```
{
    "title": <title>,
    "description": <description>,
    "jobType": <jobType>,
    "imageJob": <imageJob>
    "UserId": <UserId>,
    "CompanyId": <CompanyId>
}
```

_Response (201 Ok)_

```
{
    "id": 17,
    "title": "test100",
    "description": "test100",
    "jobType": "test100",
    "UserId": 1,
    "CompanyId": 1,
    "imageJob": "https://ik.imagekit.io/awwiz0ff3hm/baju_atasan_muslim2_ce-hIdjA5w.jpg",
    "updatedAt": "2021-08-08T02:24:07.012Z",
    "createdAt": "2021-08-08T02:24:07.012Z"
}
```

_Response (400 - Bad Request)_

```
{
  "message": [
        "Title is required",
        "Job Type is required",
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

### PUT /jobs/:id

> Edit Data Job By Id

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
    "title": <title>,
    "description": <description>,
    "jobType": <jobType>,
    "UserId": <UserId>,
    "CompanyId": <CompanyId>
}
```

_Response (200 Ok)_

```
{
    "id": 17,
    "title": "test100",
    "description": "test100",
    "jobType": "test100",
    "UserId": 1,
    "CompanyId": 1,
    "imageJob": "https://ik.imagekit.io/awwiz0ff3hm/baju_atasan_muslim2_ce-hIdjA5w.jpg",
    "updatedAt": "2021-08-08T02:24:07.012Z",
    "createdAt": "2021-08-08T02:24:07.012Z"
}
```

_Response (400 - Bad Request)_

```
{
    "message": [
        "Description is required",
        "Job Type is required",
        ...
    ]
}
```

_Response (403 - Forbidden)_

```
{
    "message": [
        "U Dont Have Access",
    ]
}
```

_Response (404 - Not Found)_

```
{
    "message": "Job Not Found"
}
```

_Response (500 - Internet Server Error)_

```
{
  "message": "Internet Server Error"
}
```

---

### DELETE /jobs:id

> Delete Data Job By Id

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
    "message": "Job has been deleted"
}
```

_Response (403 - Forbidden)_

```
{
    "message": [
        "U Dont Have Access",
    ]
}
```

_Response (404 - Not Found)_

```
{
    "message": "Job Not Found"
}
```

_Response (500 - Internet Server Error)_

```
{
  "message": "Internet Server Error"
}
```
