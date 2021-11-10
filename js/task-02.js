const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listContainer = document.querySelector("#ingredients")

const a = ingredients.map(ingredient => {
  const itemIngredients = document.createElement("li");
  itemIngredients.textContent = ingredient;
  itemIngredients.classList.add("item");
  return itemIngredients;
})
listContainer.append(...a);
