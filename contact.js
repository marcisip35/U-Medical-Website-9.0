document.getElementById('contact-info').addEventListener('submit', function(event) {
    event.preventDefault(); // Preventing default submission

    console.log("Form Validity: ", this.checkValidity());

    if (!this.checkValidity()) {
        alert('Please fill out all required fields.');
        return;
    }

    let parms = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_63s5ohe", "template_4jv6a0m", parms)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("Form Sent!!");
        }, function(error) {
            console.log('FAILED!', response.status, response.text);
            alert("Failed to send form: " + error);
        });
});