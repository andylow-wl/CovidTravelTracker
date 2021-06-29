var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var Amadeus = require('amadeus');

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


var amadeus = new Amadeus({
  clientId: '',
  clientSecret: ''
});

app.get('/', (req,res,next) => {
  amadeus.referenceData.urls.checkinLinks.get({
    airlineCode: 'BA'
  }).then(function(response){
    const jsonCities = require("./cities");
    const jsonCountry = require("./country");
    res.render('index', { cities: jsonCities, message: response.data, country: jsonCountry })
  }).catch(function(error){
    console.log(error.response);
  });
});

app.get('/airportSearch/', function(req,res,next){
amadeus.referenceData.locations.get({
  keyword: req.query.term,
  subType: 'AIRPORT,CITY'
}).then(function(response){
  res.json(response.data);
  console.log(response.data);
}).catch(function(error){
  console.log("error");
  console.log(error.response);
});
});

app.get('/search/', (req,res,next) => {
  console.log("kala"+ req.query.term)
  amadeus.referenceData.urls.checkinLinks.get({
    airlineCode: 'IB'
  }).then(function(response){
    res.json(response.data);
    console.log(response.data);
  }).catch(function(error){
    console.log("error");
    console.log(error.response);
  });
  });

app.listen(3000, () => console.log('App now running on port 3000!'));