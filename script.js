document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
        alert("Thank you for reaching out!");
        document.getElementById("contact-form").reset(); // Reset the form after submission
    } else {
        alert("Please fill in all fields.");
    }
});
