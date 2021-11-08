const ref = {
    inputEl: document.querySelector("#name-input"),
    nameEl: document.querySelector("#name-output"),
}

ref.inputEl.addEventListener("input", event => {
    if (event.currentTarget.value === "") {
        ref.nameEl.textContent = "Anonymous";
    }
    else {
        ref.nameEl.textContent = event.currentTarget.value;
    }
})