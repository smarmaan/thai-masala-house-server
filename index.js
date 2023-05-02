const express = require("express");

const app = express();

const cors = require("cors");

const port = process.env.PORT || 5000;

const chefDetails = require("./data/randomChef.json");

const recipes = require("./data/randomRecipes.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("welcome to Thai Masala Server");
});

app.get("/recipes", (req, res) => {
  res.send(recipes);
});

app.get("/chef-details", (req, res) => {
  res.send(chefDetails);
});

app.listen(port, () => {
  console.log(`Thai Masala Server API is running on port : ${port}`);
});
