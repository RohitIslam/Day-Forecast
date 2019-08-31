const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

geocode(address, (error, data) => {
  if (error) {
    return console.log("Error", error);
  }

  forecast(data.latitude, data.longitude, (error, forecastData) => {
    if (error) {
      return console.log("Error", error);
    }
    console.log(`Location: ${data.location}`);
    console.log(`Latitude: ${data.latitude}`);
    console.log(`Longitude: ${data.longitude}`);
    console.log(`Rain Probability: ${forecastData.precipProbability}%`);
    console.log(`Temperature: ${forecastData.temperature} degree`);
  });
});
