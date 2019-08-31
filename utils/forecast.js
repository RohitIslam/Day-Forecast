const request = require("request");

const forecast = (lat, lon, callback) => {
  const url = `https://api.darksky.net/forecast/0600da0467cac24d99d77841bd89f98e/${lat},${lon}?units=si`;

  request({ uri: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect", undefined);
    } else if (response.body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(undefined, response.body.currently);
    }
  });
};

module.exports = forecast;
