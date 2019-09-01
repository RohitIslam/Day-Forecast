const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "/public")));

app.set("view engine", "hbs");

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
