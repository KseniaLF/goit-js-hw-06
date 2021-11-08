const counterValue = document.querySelector("#value");

const removeBtn = document.querySelector('[data-action="decrement"]')
const addBtn = document.querySelector('[data-action="increment"]')

let value = 0;

addBtn.addEventListener("click", (event) => {
    // console.log("click inc");
    value += 1;
    counterValue.textContent = value;
});

removeBtn.addEventListener("click", (event) => {
    // console.log("click dec")
    value -= 1;
    counterValue.textContent = value;        
});

