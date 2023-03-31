const yargs = require('yargs');
const fetch = require('node-fetch')

const API_KEY = '<your_api_key>'

yargs.command({
  command: 'weatherapp',
  describe: 'This is a simple weather podcast on your terminal',
  builder: {
    city: {
      describe: 'Location to get weather api',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    const city = argv.city;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        const cityName = data.name
        const tempC = (data.main.temp - 273.15).toFixed(1)
        const feel_like = (data.main.feels_like - 273.15).toFixed(1)
        const description = data.weather[0].description
        console.log(`Current weather for ${cityName}: `)
        console.log(`Temperature: ${tempC}°C`);
        console.log(`Feels like: ${feel_like}°C`);
        console.log(`Weather description: ${description}`)
      })
      .catch((err) => console.log(err));
  },
});

yargs.parse();
