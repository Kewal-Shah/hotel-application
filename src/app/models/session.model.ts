export class SessionModel {

getSessionData(){
   return {
      "currency": "USD",
      "posId": "hbg3h7rf28",
      "orderBy": "price asc, rating desc",
      "roomOccupancies": [
         {
            "occupants": [
               {
                  "type": "Adult",
                  "age": 25
               }
            ]
         }
      ],
      "stayPeriod": {
         "start": "",
         "end": ""
      },
         "bounds": {
         "circle": {
            "center": {
               "lat": 49.0097, 
               "long": 2.5479
            },
            "radiusKm": 50.5
         }
      }
   }
   }


getResultData(){
   return {
      "sessionId": "",
      "paging": {
         "pageNo": 1,
         "pageSize": 1,
         "orderBy": "price asc, rating desc"
      },
      "optionalDataPrefs": [
         "All"
      ],
      "currency": "USD",
      "contentPrefs": [
         "Basic",
         "Activities",
         "Amenities",
         "Policies",
         "AreaAttractions",
         "Descriptions",
         "Images",
         "CheckinCheckoutPolicy",
         "All"
      ],
      "filters": {
         "minHotelPrice": 1,
         "maxHotelPrice": 10000,
         "minHotelRating": 1,
         "maxHotelRating": 5,
         "hotelChains": [
            "Novotel",
            "Marriott",
            "Hilton",
            "Accor"
         ],
         "allowedCountry": "FR"
      }
   }
   
}
}