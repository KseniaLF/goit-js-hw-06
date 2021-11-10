const categoriesContainer = document.querySelector("#categories")
const itemsCategoriesContainer = categoriesContainer.querySelectorAll(".item");

console.log("Number of categories:", itemsCategoriesContainer.length);

itemsCategoriesContainer.forEach(item => {
    const title = item.firstElementChild;
    console.log("Category:", title.textContent);
    const el = item.lastElementChild.children.length;
    console.log("Elements:", el)
})

