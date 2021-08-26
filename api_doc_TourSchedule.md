# Jobstreet App Server

Tour Schedule App is an application to Tour Scheduling. This app has :

- RESTful endpoint for asset's CRUD operation
- JSON formatted response

&nbsp;

## RESTful endpoints

### GET /tourSchedules/public

> Job Get All

_Request Header_

```
not needed
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
        "planDate": "2022-06-25T00:00:00.000Z",
        "endDate": "2022-06-30T00:00:00.000Z",
        "memberSlot": 20,
        "placeId": "ChIJPVOsXpcAey4RNi7iUxT-GzU",
        "isPublic": true,
        "description": "bla bla bla",
        "price": 100000,
        "status": "plan",
        "placeName": "Pantai Parangtritis",
        "placeAddress": "Pantai Parangtritis, Daerah Istimewa Yogyakarta",
        "placeRating": 4.5,
        "name": "Tour with friend",
        "createdAt": "2021-08-25T11:07:56.975Z",
        "updatedAt": "2021-08-25T11:07:56.975Z",
        "UserTourSchedule": {
            "id": 1,
            "UserId": 1,
            "TourScheduleId": 1,
            "role": "creator",
            "status": "apply",
            "createdAt": "2021-08-25T11:07:57.032Z",
            "updatedAt": "2021-08-25T11:07:57.032Z"
        }
    },
    {
        "id": 2,
        "planDate": "2022-06-25T00:00:00.000Z",
        "endDate": "2022-06-30T00:00:00.000Z",
        "memberSlot": 20,
        "placeId": "ChIJPVOsXpcAey4RNi7iUxT-GzU",
        "isPublic": true,
        "description": "bla bla bla",
        "price": 100000,
        "status": "plan",
        "placeName": "Pantai Parangtritis",
        "placeAddress": "Pantai Parangtritis, Daerah Istimewa Yogyakarta",
        "placeRating": 4.5,
        "name": "Tour with family",
        "createdAt": "2021-08-25T11:08:09.369Z",
        "updatedAt": "2021-08-25T11:08:09.369Z",
        "UserTourSchedule": {
            "id": 2,
            "UserId": 1,
            "TourScheduleId": 2,
            "role": "creator",
            "status": "apply",
            "createdAt": "2021-08-25T11:08:09.412Z",
            "updatedAt": "2021-08-25T11:08:09.412Z"
        }
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

---

### GET /tourSchedules/public/:id

> Job Get By Id

_Request Header_

```
not needed
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
   "id": 2,
    "planDate": "2022-06-25T00:00:00.000Z",
    "endDate": "2022-06-30T00:00:00.000Z",
    "memberSlot": 20,
    "placeId": "ChIJPVOsXpcAey4RNi7iUxT-GzU",
    "isPublic": true,
    "description": "bla bla bla",
    "price": 100000,
    "status": "plan",
    "placeName": "Pantai Parangtritis",
    "placeAddress": "Pantai Parangtritis, Daerah Istimewa Yogyakarta",
    "placeRating": 4.5,
    "name": "Tour with family",
    "createdAt": "2021-08-25T11:08:09.369Z",
    "updatedAt": "2021-08-25T11:08:09.369Z",
    "UserTourSchedule": {
        "id": 2,
        "UserId": 1,
        "TourScheduleId": 2,
        "role": "creator",
        "status": "apply",
        "createdAt": "2021-08-25T11:08:09.412Z",
        "updatedAt": "2021-08-25T11:08:09.412Z"
    }
}

```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---

### GET /tourSchedules/private

> Create Data Job

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

_Response (201 Ok)_

```
{
    "id": 2,
    "planDate": "2022-06-25T00:00:00.000Z",
    "endDate": "2022-06-30T00:00:00.000Z",
    "memberSlot": 20,
    "placeId": "ChIJPVOsXpcAey4RNi7iUxT-GzU",
    "isPublic": true,
    "description": "bla bla bla",
    "price": 100000,
    "status": "plan",
    "placeName": "Pantai Parangtritis",
    "placeAddress": "Pantai Parangtritis, Daerah Istimewa Yogyakarta",
    "placeRating": 4.5,
    "name": "Tour with family",
    "createdAt": "2021-08-25T11:08:09.369Z",
    "updatedAt": "2021-08-25T11:08:09.369Z",
    "UserTourSchedule": {
        "id": 2,
        "UserId": 1,
        "TourScheduleId": 2,
        "role": "creator",
        "status": "apply",
        "createdAt": "2021-08-25T11:08:09.412Z",
        "updatedAt": "2021-08-25T11:08:09.412Z"
    }
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---

### POST /tourSchedules

> Edit Data Job By Id

_Request Header_

```
{
    "access_token": <access_token>
}
```

_Request Param_

```
not needed
```

_Request Body_

```
{
    "planDate": <planDate>,
    "endDate": <endDate>,
    "memberSlot": <memberSlot>,
    "placeId": <placeId>,
    "isPublic": "isPublic,
    "description": <description>
    "price": <price>,
    "status": <status>,
    "placeName": <placeName>,
    "placeAddress": <placeAddress>,
    "placeRating": <placeRating>,
    "name": <name>,
}
```

_Response (200 Ok)_

```
{
    "id": 2,
    "planDate": "2022-06-25T00:00:00.000Z",
    "endDate": "2022-06-30T00:00:00.000Z",
    "memberSlot": 20,
    "placeId": "ChIJPVOsXpcAey4RNi7iUxT-GzU",
    "isPublic": true,
    "description": "bla bla bla",
    "price": 100000,
    "status": "plan",
    "placeName": "Pantai Parangtritis",
    "placeAddress": "Pantai Parangtritis, Daerah Istimewa Yogyakarta",
    "placeRating": 4.5,
    "name": "Tour with family",
    "createdAt": "2021-08-25T11:08:09.369Z",
    "updatedAt": "2021-08-25T11:08:09.369Z",
}
```

_Response (400 - Bad Request)_

```
{
    "message": [
        "Description is required",
        "name is required",
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
