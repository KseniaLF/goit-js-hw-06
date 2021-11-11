const box = document.querySelector("#boxes");
const input = document.querySelector("input");

const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");

input.addEventListener("input", () => {
    btnCreate.addEventListener("click", event => createBoxes(input.value))
})
input.addEventListener("input", () => {
    btnDestroy.addEventListener("click", event => destroyBoxes())
})


    let s = 30;
function createBoxes(amount) {
    // let size = "10px";

    for (let i = 0; i < amount; i++){
        let size = `${30 + s}px`;
        const divEl = document.createElement("div");
        divEl.style.height = size;
        divEl.style.width = size;
        
        divEl.style.backgroundColor = getRandomHexColor();
        box.append(divEl)
        s += 10;
    }
}
    
function destroyBoxes() {
    box.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



// let boxSize = 30;

// function createBoxes(amount) {
//   for (let i = 1; i <= amount; i += 1) {
//     const boxs = `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color:${getRandomHexColor()};"></div>`;
//     box.insertAdjacentHTML('beforeend', boxs);
//     boxSize += 10;
//   }
// }

