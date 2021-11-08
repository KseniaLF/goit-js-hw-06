const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", event => {
    if (Number(inputEl.dataset.length) === inputEl.value.length) {
        // console.log("valid")
       inputEl.classList.remove("invalid")
       inputEl.classList.add("valid") 
    }
    else {
        // console.log("notValid")
        inputEl.classList.remove("valid")
        inputEl.classList.add("invalid")
    }
})

