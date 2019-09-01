const express = require("express");
const app = express();
const path = require("path");

console.log(__filename);
console.log(__dirname);
console.log(path.join(__dirname, "/public"));

app.use(express.static(path.join(__dirname, "/public")));

app.get("/weather", (req, res) => {
  res.send("Express Weather");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
