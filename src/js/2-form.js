const form = document.querySelector(".feedback-form");
const storageKey = "feedback-form-state";

let formData = {
    email: "",
    message: "",
};

const savedData = localStorage.getItem(storageKey);
if (savedData) {
    formData = JSON.parse(savedData);
    if (formData.email) form.email.value = formData.email;
    if (formData.message) form.message.value = formData.message;
}

form.addEventListener("input", (evt) => {
    const { name, value } = evt.target;
    formData[name] = value.trim();
    localStorage.setItem(storageKey, JSON.stringify(formData));
});

form.addEventListener("submit", (evt) => {
    evt.preventDefault();

    if (!formData.email || !formData.message) {
        alert("Please fill all fields");
        return;
    }

    console.log(formData);

    localStorage.removeItem(storageKey);
    formData = { email: "", message: "" };
    form.reset();
});