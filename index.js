// change background color on button click
function toggleBackground() {
    document.body.style.background = document.body.style.background === 'lightblue' ? 'white' : 'lightblue';
}

// change font size using slider 
function adjustTextSize() {
    document.getElementById("text").style.fontSize = document.getElementById("slider").value + "px";
}

// toggle the hidden class on the modal element
function showModal() {
    document.getElementById("modal").classList.remove("hidden");
}

function hideModal() {
    document.getElementById("modal").classList.add("hidden");
}

// form validation
function validateForm() {
    let valid = true;
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    
    document.getElementById("nameError").textContent = name.length >= 3 ? "" : "Name must be at least 3 characters";
    document.getElementById("emailError").textContent = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : "Invalid email";
    document.getElementById("passwordError").textContent = /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(password) ? "" : "Password must be at least 8 characters, with an uppercase letter and a number";
    
    if (name.length < 3 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !/^(?=.*[A-Z])(?=.*\d).{8,}$/.test(password)) {
        valid = false;
    }
    
    return valid;
}

// display the selected message from the dropdown
function displayMessage() {
    let message = document.getElementById("dropdown").value;
    document.getElementById("dropdownMessage").textContent = message ? `You selected: ${message}` : "";
}