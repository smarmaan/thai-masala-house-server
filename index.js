const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

const chefDetails = require("./data/randomData.json");

app.get("/", (req, res) => {
  res.send("welcome to Thai Masala Server");
});

app.get("/chef-details", (req, res) => {
  res.send(chefDetails);
});

app.listen(port, () => {
  console.log(`Thai Masala Server API is running on port : ${port}`);
});
