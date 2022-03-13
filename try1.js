var Amadeus = require('amadeus');

var amadeus = new Amadeus({
    clientId: 'uDGFRwqjN9TMyagU3pwL4Yv53iUZzXN3',
    clientSecret: 'FjthFeiXCnw4KX9D'
    });


  

var code = "US";
    
// Travel Restrictions API by country
var output = amadeus.client.get('/v1/duty-of-care/diseases/covid19-area-report',
    { countryCode: code })
    .then(function (response) {
        //const jsonCities = require("./cities");
        var json = response.data
        console.log(json);
        //console.log(jsonCities);
      }).catch(function (error) {
        console.log(error.response);
      });
    
 


