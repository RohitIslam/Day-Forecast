const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

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

forecast(37.8267, -122.4233, (error, response) => {
  console.log("Error", error);
  console.log("Response", response);
});

geocode("Bangladesh", (error, response) => {
  console.log("Error", error);
  console.log("Response", response);
});
