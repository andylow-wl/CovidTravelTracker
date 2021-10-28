## Covid-19 Travel Restrictions 

In this prototype built with Node and Express.js we demonstrate Travel Restrictions for USA displayed on a map. We use the following APIs: 
- [Travel Restrictions](https://developers.amadeus.com/self-service/category/covid-19-and-travel-safety/api-doc/travel-restrictions): returns Travel Restrictions
- [HERE Maps for JavaScript](https://developer.here.com/): displays a map with markers and text bubbles

We've also hosted this [application](https://amadeus-travel-restrictions.herokuapp.com/) so you can directly play with it.

![title](public/demo.gif)

## How to run the project via Docker (recommended)

Build the image from the Dockerfile. This can be done with `docker build` or using the provided `docker-compose.yml` file.

### Build and run with plain docker

You can build the container with the following command:

```sh
docker build -t amadeus-travel-restrictions-node .
```

To start the image you have to provide the environment variables by passing them directly to the docker run command or by copying and modifying `.env-default` to `.env` and pass it with `--env-file` to the run command.

```sh
# passing environment variables to the run command
docker run -e AMADEUS_CLIENT_ID=... -e AMADEUS_CLIENT_SECRET=... -e HERE_API_KEY=... -p 8080:8080 amadeus-travel-restrictions-node

# passing the environment variables from .env file
docker run --env-file .env -p 8080:8080 amadeus-travel-restrictions-node
```

### Build and run with docker-compose

You can build the container with the following command:

```sh
docker-compose build
```

This is optional as docker-compose automatically builds the container if not done yet before the container starts.

The environment variables can be updated in the file `docker-compose.yml` or by copying `.env-default` to `.env` and updating the relevant settings there.

To start the container run:
```sh
docker-compose up

# run in background
docker-compose up -d
```


## How to run the project locally

Clone the repository.

```sh
git clone https://github.com/amadeus4dev/amadeus-travel-restrictions-node.git
cd amadeus-travel-restrictions-node
```

Install the dependencies

```
npm install
```

For authentication add your API key/secret to your environmental variables.

```sh
export AMADEUS_CLIENT_ID=YOUR_API_KEY
export AMADEUS_CLIENT_SECRET=YOUR_API_SECRET
export HERE_API_KEY=YOUR_HERE_API_KEY
```

You can easily switch between `test` and `production` Amadeus environments by setting:

```
export AMADEUS_HOSTNAME="test" # an empty value will also set the environment to test
```

or

```
export AMADEUS_HOSTNAME="production"
```

> Each environment has different API keys. Do not forget to update them!

Finally, run the Node server.

```sh
node app.js
```

Finally, open a browser and go to `http://localhost:3000/`.

## License

This library is released under the [MIT License](LICENSE).

## Help

Our [developer support team](https://developers.amadeus.com/support) is here
to help you. You can find us on
[StackOverflow](https://stackoverflow.com/questions/tagged/amadeus) and
[email](mailto:developers@amadeus.com).
