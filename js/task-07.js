const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", () => {
    // console.log(inputEl.value)
    textEl.style.fontSize = `${inputEl.value}px`;
})
