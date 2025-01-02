const emailInput = document.getElementById("email");
const errorIcon = document.querySelector("#error_icon");
const errorMessage = document.getElementById("error_message");
const validateButton = document.getElementById("submit_btn");

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

validateButton.addEventListener("click", () => {
    if (!validateEmail(emailInput.value)) {
        emailInput.classList.add("error");
        emailInput.placeholder = "janeappleseed#email.com";
        errorIcon.style.display = "block";
        errorMessage.style.display = "block";
    } else {
        emailInput.classList.remove("error");
        errorIcon.style.display = "none";
        errorMessage.style.display = "none";
    }
});
