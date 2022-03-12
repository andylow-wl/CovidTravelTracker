function getDetails(code){    
    var express = require("express");
    var Amadeus = require('amadeus');

    var amadeus = new Amadeus({
    clientId: process.env.AMADEUS_CLIENT_ID,
    clientSecret: process.env.AMADEUS_CLIENT_SECRET
    });
    var here_api_key = process.env.HERE_API_KEY;

    var app = express();
    app.set("view engine", "ejs");
    app.use(express.static("public"));


    app.get('/', (req, res, next) => {
    // Travel Restrictions API by country
    amadeus.client.get('/v1/duty-of-care/diseases/covid19-area-report',
    { countryCode: code })
    .then(function (response) {
        const jsonCities = require("./cities");
        var json = res.json({ cities: jsonCities, 
                            message: response.data,
                            country: response.data, 
                            here_api_key: here_api_key })
        return json
    }).catch(function (error) {
        console.log(error.response);
    });
    });


}
