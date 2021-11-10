const formEl = document.querySelector(".login-form")

formEl.addEventListener("submit", event => {
    event.preventDefault();

    const emailEl = event.currentTarget.elements.email;
    const passwordlEl = event.currentTarget.elements.password;

    if (emailEl.value === "" || passwordlEl.value === "") {
        alert("Все поля должны быть заполнены!")
    }

    const result = {};

    result[emailEl.name] = emailEl.value.trim();
    result[passwordlEl.name] = passwordlEl.value.trim();

    console.log(result)

    event.currentTarget.reset();
})