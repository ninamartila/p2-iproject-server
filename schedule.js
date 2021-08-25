// REQUEST POST schedule
const request = {
  "planDate": "",
  "endDate": "",
  "invitedUsers": [1, 2, 3],
  "memberSlot": 50,
  "placeId": "ChIJPVOsXpcAey4RNi7iUxT-GzU",
  "isPublic": true, // PRIVATE, PUBLIC
  "description": "bla bla bla",
  "price": 100000, // 0 if free
  "nameLocation": "Pantai Parangtritis",
  "address": "Pantai Parangtritis, Daerah Istimewa Yogyakarta",
  "rating": 4.5,
}

// RESPONSE schedule object (list, detail)
const response = {
  "id": 1,
  "planDate": "",
  "endDate": "",
  "members": [
    {
      "userId": 1,
      "username": "",
      "email": "",
      "role": "",
      "fullname": "",
      "photo": "",
      "status": "", // PENDING, ACCEPTED, REJECTED
    }
    // ...
  ],
  price: 100000,
  "status": "PLAN", // PLAN, STARTED, END
  "description": "bla bla bla",
  "memberSlot": 50,
  "placeId": "ChIJPVOsXpcAey4RNi7iUxT-GzU",
  "place": {
    "id": "ChIJPVOsXpcAey4RNi7iUxT-GzU",
    "name": "Pantai Parangtritis",
    "location": {
      "lat": -8.024607999999999,
      "lng": 110.3298045
    },
    "address": "Pantai Parangtritis, Daerah Istimewa Yogyakarta",
    "rating": 4.5,
    "ratingTotal": 9241,
    "photos": [],
  },
}