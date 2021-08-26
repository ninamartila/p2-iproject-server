# Jobstreet App Server

Tour Schedule App is an application to Tour Scheduling. This app has :

- RESTful endpoint for asset's CRUD operation
- JSON formatted response

&nbsp;

## RESTful endpoints

### GET /place

> Company Get All

_Request Header_

```
"access_token": <access_token>
```

_Request Body_

```
not needed
```

_Request query_

```
"query": <query>
```

_Response (200 Ok)_

```
[
    {
        "placeId": "ChIJG07t-x3vaC4RhblB9cTnPCs",
        "name": "Pantai Hawaii Belah Wetan",
        "location": {
            "lat": -6.9337009,
            "lng": 107.4969958
        },
        "address": "hawaii belah wetan, Jl. Citapen - Ciraden No.2, Citapen, Kec. Cihampelas, Kabupaten Bandung Barat, Jawa Barat 40562",
        "rating": 0,
        "ratingTotal": 0
    },
    {
        "placeId": "ChIJS7eS5tzvaC4RrZhdOCDVYOY",
        "name": "Pantai",
        "location": {
            "lat": -7.0113432,
            "lng": 107.5295899
        },
        "address": "Jl. Parung Serab No.9, Parungserab, Kec. Soreang, Bandung, Jawa Barat 40921",
        "rating": 5,
        "photos": [
            {
                "height": 996,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112192225491553071145\">DONNY RAMDANI</a>"
                ],
                "photo_reference": "Aap_uEByoPUExY7A5Ibk_jCrPXEHJYVwizaCqJIbr1J0_ixXMR7gpWJV_wdPNINV_Rw_rUUIqq5TbNFlyH2kLILwyX4ex2S5FJVt5cEoNbSLl6fw3SdQy155v-5POuD56AQTLIVouT88cssAylv7yZCUgJDT7nATmUm8KQ8lHvY43sk0YX4",
                "width": 797
            }
        ],
        "ratingTotal": 2
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
