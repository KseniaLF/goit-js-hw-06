const box = document.querySelector("#boxes");
const input = document.querySelector("input");

const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");

input.addEventListener("input", event => {
    btnCreate.addEventListener("click", event => createBoxes(input.value))
    btnDestroy.addEventListener("click", event => destroyBoxes())
})

function createBoxes(amount) {
    // let size = "10px";
    let s = 30;
    for (let i = 0; i < amount; i++){
        s += 10;
        let size = `${30 + s}px`;
        const divEl = document.createElement("div");
        divEl.style.height = size;
        divEl.style.width = size;
        
        divEl.style.backgroundColor = getRandomHexColor();
        box.append(divEl)
    }
}

function destroyBoxes() {
    box.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



