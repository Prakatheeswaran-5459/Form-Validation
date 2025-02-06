
// Validate Function

function validateForm() {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var submitBtn = document.getElementById("submitBtn");

    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    


    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name cannot be empty.";
        nameInput.classList.add("error-border");
    } else {
        nameError.textContent = "";
        nameInput.classList.remove("error-border");
    }

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = "Enter a valid email.";
        emailInput.classList.add("error-border");
    } else {
        emailError.textContent = "";
        emailInput.classList.remove("error-border");
    }


    if (passwordInput.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        passwordInput.classList.add("error-border");
    } else {
        passwordError.textContent = "";
        passwordInput.classList.remove("error-border");
    }


    let allValid = document.querySelectorAll(".error-border").length === 0;
    submitBtn.disabled = !allValid;
}


var registrationForm=document.getElementById("registrationForm")
registrationForm.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Registration Successful!");
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    validateForm();
});