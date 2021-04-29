const express = require('express');
const app = express();
const port = 8000;

const recipes = [
  {
    id: 33,
    name: 'pancake',
    description: 'une grosse crêpe',
    duration: 10,
  },
  {
    id: 11,
    name: 'choucroute',
    description: 'non Vegan',
    duration: 200,
  },
  {
    id: 39,
    name: 'pates',
    description: 'pasta della mamma',
    duration: 8,
  },
];

app.get(`/recipes/`, (req, res) => {
  res.status(200).json(recipes);
});

app.get('/', function (req, res) {
  res.send('it works');
});

app.get(`/recipes/filter/`, (req, res) => {
  const { maxDuration } = req.query;
  console.log(typeof maxDuration);
  // const maxDuration = req.query.maxDuration;
  const result = recipes.filter((recipe) => recipe.duration <= maxDuration);
  res.status(200).json(result);
});

app.get(`/recipes/:id`, (req, res) => {
  const { id } = req.params;
  const result = recipes.find((recipe) => recipe.id === parseInt(id, 10));
  if (result !== undefined) {
    res.status(200).json(result);
  } else {
    res.sendStatus(404);
  }
});

app.listen(port, () => {
  console.log(` Server open to port ${port}`);
});
