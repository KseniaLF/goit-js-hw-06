function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// console.log(getRandomHexColor());

const btn = document.querySelector(".change-color");
const colorTextEl = document.querySelector(".color");
const body = document.querySelector("body");

btn.addEventListener("click", () => {
  // console.log(getRandomHexColor())
  body.style.backgroundColor = getRandomHexColor();
  colorTextEl.textContent = getRandomHexColor();
})