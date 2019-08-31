const request = require("request");
const geocode = require("./utils/geocode");

// const url =
//   "https://api.darksky.net/forecast/0600da0467cac24d99d77841bd89f98e/37.8267,-122.4233?units=si";

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect");
//   } else if (response.body.error) {
//     console.log(response.body.error);
//   } else {
//     console.log(response.body.currently);
//   }
// });

// const geocodeUrl =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/Bangladesh.json?access_token=pk.eyJ1IjoibWF0dGZpY2tlIiwiYSI6ImNqNnM2YmFoNzAwcTMzM214NTB1NHdwbnoifQ.Or19S7KmYPHW8YjRz82v6g&cachebuster=1567266180009&autocomplete=true&types=country";

// request({ url: geocodeUrl, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect");
//   } else if (response.body.features.length === 0) {
//     console.log("Unable to find location");
//   } else {
//     const latitude = response.body.features[0].center[1];
//     const longitude = response.body.features[0].center[0];
//     console.log(latitude, longitude);
//   }
// });

geocode("Bangladesh", (error, response) => {
  console.log("Error", error);
  console.log("Response", response);
});
