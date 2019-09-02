const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const geocode = require("./src/utils/geocode");
const forecast = require("./src/utils/forecast");

// Define path for express config
const staticPath = path.join(__dirname, "/public");
const viewPath = path.join(__dirname, "/templates/views");
const partialPath = path.join(__dirname, "/templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialPath);

// Setup static directory to serve
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Forecast The Day",
    name: "Rohit"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Forecast",
    name: "Rohit"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Forecast Help",
    name: "Rohit"
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address"
    });
  }

  geocode(req.query.address, (error, data) => {
    if (error) {
      return res.send({ error });
    }

    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) {
        return res.send({ error });
      }
      res.send({
        forecast: forecastData,
        Location: data.location,
        Latitude: data.latitude,
        Longitude: data.longitude,
        Rain_Probability: `${forecastData.precipProbability}%`,
        Temperature: `${forecastData.temperature} degree`
      });
    });
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    errorMsg: "404, Help Article Not Found",
    name: "Rohit"
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    errorMsg: "404, Page Not Found",
    name: "Rohit"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
