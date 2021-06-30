var express = require("express");
var Amadeus = require('amadeus');

var amadeus = new Amadeus({
  clientId: '',
  clientSecret: ''
});

var app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get('/', (req, res, next) => {
  // this API call will be replaced by the search by country
  amadeus.media.files.generatedPhotos.get({
    category: 'BEACH'
  }).then(function (response) {
    const jsonCities = require("./cities");
    // this file we won't need it as we will take the data from the API
    const jsonCountry = require("./country");
    res.render('index', { cities: jsonCities, message: response.data, country: jsonCountry })
  }).catch(function (error) {
    console.log(error.response);
  });
});

app.get('/search/', (req, res, next) => {
  // the cityCode can be found at req.query.cityCode 
  amadeus.media.files.generatedPhotos.get({
    category: 'BEACH'
  }).then(function (response) {
    res.json(response.data);
    console.log(response.data);
  }).catch(function (error) {
    console.log("error");
    console.log(error.response);
  });
});

app.listen(3000, () => console.log('App now running on port 3000!'));