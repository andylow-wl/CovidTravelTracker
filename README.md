# Covid Travel Tracker
### Part of BT3103 Project

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
