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
  { countryCode: 'US' })
  .then(function (response) {
    const jsonCities = require("./cities");
    res.render('index', { cities: jsonCities, 
                          message: response.data,
                          country: response.data, 
                          here_api_key: here_api_key })
  }).catch(function (error) {
    console.log(error.response);
  });
});

app.get('/search/', (req, res, next) => {
   // Travel Restrictions API by city
  amadeus.client.get('/v1/duty-of-care/diseases/covid19-area-report', 
  { countryCode: 'US', 
    cityCode: req.query.cityCode })
  .then(function (response) {
    res.json(response.data);
    console.log(response.data);
  }).catch(function (error) {
    console.log("error");
    console.log(error.response);
  });
});

app.listen(3000, () => console.log('App now running on port 3000!'));
