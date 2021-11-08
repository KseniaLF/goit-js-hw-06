const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listContainer = document.querySelector("#ingredients")

const addIngredients = ingredients => {
  return ingredients.map(ingredient => {
  const itemIngredients = document.createElement("li");
  itemIngredients.textContent = ingredient;
  itemIngredients.classList.add("item");
  listContainer.append(itemIngredients);
});
}

addIngredients(ingredients)