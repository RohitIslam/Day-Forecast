const express = require("express");
const app = express();
const path = require("path");

// Define path for express config
const staticPath = path.join(__dirname, "/public");
const viewPath = path.join(__dirname, "/templates");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewPath);

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
    title: "Forecast About",
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
  res.send("Express Weather");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
