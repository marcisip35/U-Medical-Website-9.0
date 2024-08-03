document.getElementById('report-form').addEventListener('submit', function(event) {
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
        subject: document.getElementById("subject").value,
        typeReport: document.getElementById("typeReport").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_4hv68mh", "template_ngavpjg", parms)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("Form Sent!!");
        }, function(error) {
            console.log('FAILED!', response.status, response.text);
            alert("Failed to send form: " + error);
        });
});

//Mobile Integration
const reportForm = document.getElementById("report-form");
checkScreenWidth();
function checkScreenWidth(){
    if(window.innerWidth < 550){
        reportForm.innerHTML = `<h1>Report an Issue or Share Your Feedback</h1>
                        <div class="item">
                            <label for="firstName">Name <span style="color: red">*</span></label>
                            <label for="lastName"></label>
                            <input placeholder="First Name" name="firstName" id="firstName" required></input>
                            <input placeholder="Last Name" name="lastName" id="lastName" required></input>
                        </div>

                        <div class="item">
                            <label for="email">Email <span style="color: red">*</span></label>
                            <input placeholder="Email Address" name="email" id="email" required></input>
                        </div>

                        <div class="item">
                            <label for="phone">Phone</label>
                            <input placeholder="Phone Number" name="phone" id="phone"></input>
                        </div>

                        <div class="item">
                            <label for="subject">Subject <span style="color: red">*</span></label>
                            <select name="subject" id="subject" required>
                                <option value="">Select a Topic</option>
                                <option value="Issue/Problem">Issue or Problem</option>
                                <option value="Suggestion">Suggestion</option>
                                <option value="Feedback">Feedback</option>
                            </select>
                            <label for="typeReport">Type of Report <span style="color: red">*</span></label>
                            <select name="typeReport" id="typeReport" required>
                                <option value="">Select...</option>
                                <option value="Kartik">Issue Loading Pictures</option>
                                <option value="Dexter"></option>
                            </select>
                        </div>

                        <div class="item">
                            <label for="message">Message <span style="color: red">*</span></label>
                            <label></label>
                            <textarea name="message" id="message" required placeholder="Explain your issue or problem you have encountered, or suggest or give feedback. The more deatailed your message request is the better..."></textarea>
                        </div>

                        <button id="submit" type="submit">Submit</button>`;
    };
};
window.addEventListener('resize', checkScreenWidth);