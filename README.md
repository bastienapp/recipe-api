# Recipe API

Créer un serveur express qui démarre sur le port 8000.

Faire en sorte que l'url "/" affiche "it works".

Créer un objet oneRecipe qui contient les propriétés :
- id
- name
- description
- duration
avec des valeurs au choix

Créer une route '/recipe/test' qui renvoie le json de cette recette avec le statut 200

Créer un tableau `recipes` qui contient plusieurs recettes

Route '/recipes/' qui renvoie le json de recipes avec le statut 200

Route '/recipes/filter/' elle a pour query param maxDuration et elle affiche les recettes dont la durée est inférieur à maxDuration

Route '/recipes/:id/' qui retrouve une recette grace à son identifiant