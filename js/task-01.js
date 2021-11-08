const categoriesContainer = document.querySelector("#categories")
// console.log(categoriesContainer.children.length)
const itemsCategoriesContainer = categoriesContainer.querySelectorAll(".item");
console.log("Number of categories:", itemsCategoriesContainer.length);

itemsCategoriesContainer.forEach(item => {
    const title = item.querySelector("h2");
    console.log("Category:", title.textContent);
    const el = item.querySelectorAll("li").length;
    console.log("Elements:", el)
})


