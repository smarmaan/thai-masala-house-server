const express = require("express");

const app = express();

const cors = require("cors");

const port = process.env.PORT || 5000;

const chefDetails = require("./data/chefDetails.json");

const recipes = require("./data/randomRecipes.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("welcome to Thai Masala Server");
});

app.get("/chef-details", (req, res) => {
  res.send(chefDetails);
});

app.get("/chef-details/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const chefRecipesList = recipes.filter((recipe) => recipe.chef_id === id);

  res.send(chefRecipesList);
});

app.get("/recipes", (req, res) => {
  res.send(recipes);
});

app.get("/recipes/:id", (req, res) => {
  const id = req.params.id;

  console.log(id);

  const selectedRecipes = recipes.find((recipe) => recipe.id === id);

  res.send(selectedRecipes);
});

app.listen(port, () => {
  console.log(`Thai Masala Server API is running on port : ${port}`);
});
