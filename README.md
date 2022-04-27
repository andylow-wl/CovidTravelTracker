# Covid Travel Tracker
- Take note that the project uses the free version of Amadeus API. Hence, the data are not up to date and the API has limited queries.
- Refer to the original github link: https://github.com/amadeus4dev/amadeus-node
- Refer to the API documentation : https://developers.amadeus.com/self-service/category/covid-19-and-travel-safety/api-doc/travel-restrictions/api-reference

## Project setup
```
npm install
```

## Additional steps to ensure that the project is able to run .
- Go to node modules>amadeus>lib>amadeus>client>request.js  
- Comment out the following code 
```
this.languageVersion = options.languageVersion.replace('v',''); 
```
(insert photo)

### Compiles and hot-reloads for development
```
npm run serve
```
Click on the the link displayed under Local. 
(Insert photo)


## Home Page
- Type in the country in the search bar and click on the country. 


## Comparison Page
- Type in the countries that you would like to compare on each search bar. 


### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
