
# Weather app

A simple command-line that retrives the current weather information for a specified location using the OpenWeatherMap API.


## Installation

Clone the project

```bash
  git clone https://github.com/coung21/weather-app-terminal.git
```

Go to the project directory

```bash
  cd weather-app
```

Install dependencies using npm or yarn

```bash
  npm install
```

or

```bash
  yarn install
```



## Usage

To get current weather information for a location, run the `app.js` script with the `weatherapp` command and provide the location using the `--city` option:
```arduino
 node app.js weatherapp --city "<location>"
```
For example, to get the weather information for New York:
```arduino
 node app.js weatherapp --city "New York"
```
This will output the current information weather for the specified location.

To view the available commands and options, run the `app.js` script with the `weatherapp` and using `--help` option:

```bash
 node app.js weatherapp --help
```




## Configuration

The Weather App uses the OpenWeatherMap API to retrieve weather information. To use the application, you need to obtain an API key from [OpenWeatherMap](https://openweathermap.org/) and set it as a constant `API_KEY` in `app.js`

```javascript
 const API_KEY = <your_api_key> // replace with your own api key
 ```




## Screenshots

![App screenshot](https://user-images.githubusercontent.com/120638231/229171619-66c960bc-1bf9-4d8d-86e2-68eeba6779a7.png)




## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License



