document.getElementById('Appointment-Form').addEventListener('submit', function (event) {
    event.preventDefault();

    console.log("Form Validity: ", this.checkValidity());

    if (!this.checkValidity()) {
        alert('Please fill out all required fields.');
        return;
    }

    let parms = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        location: document.getElementById('location').value,
        appointment: document.getElementById('appointment').value,
        info: document.getElementById('info').value,
    };

    emailjs.send("service_63s5ohe", "template_h0u54lc", parms)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("Form Sent!!");
        }, function (error) {
            console.log('FAILED!', response.status, response.text);
            alert("Failed to send form: " + error);
        });
});

//Mobile Integration
const appointmentForm = document.getElementById("Appointment-Form");
checkScreenWidth();
function checkScreenWidth() {
    if (window.innerWidth < 550) {
        appointmentForm.innerHTML = `<div class="item">
                            <label for="name" style="margin-bottom: 10px;">Name <span style="color:red;">*</span></label>
                            <label></label>
                            <input placeholder="First Name" id="firstName" name="firstName" required>
                            <input placeholder="Last Name" id="lastName" name="lastName" required>
                        </div>
                        <div class="item">
                            <label for="email">Email <span style="color:red;">*</span></label>
                            <input placeholder="Email Address" id="email" name="email" required>
                            <label for="phone">Phone <span style="color:red;">*</span></label>
                            <input placeholder="Phone Number" id="phone" name="phone" required>
                        </div>
                        <div class="item">
                            <label for="date">Date <span style="color:red;">*</span></label>
                            <input type="date" class="date-input" id="date" name="date" required>
                            <label for="time">Time <span style="color:red;">*</span></label>
                            <select id="time" name="time" required>
                                <option>Select...</option>
                                <option>Morning</option>
                                <option>Afternoon</option>
                            </select>
                        </div>
                        <div class="item">
                            <label for="location">Location <span style="color:red;">*</span></label>
                            <select id="location" name="location" required>
                                <option>Select...</option>
                                <option>Valley Vista Clinic</option>
                            </select>
                            <label for="appointment">Type of Appointment <span style="color:red;">*</span></label>
                            <select id="appointment" name="appointment" required>
                                <option>Select...</option>
                                <option>New Patient</option>
                                <option>Urgent Immediate Care</option>
                                <option>Feeling Unwell</option>
                                <option>Annual Wellness Visit</option>
                                <option>Follow Up Appointment</option>
                                <option>Prescription Refill</option>
                                <option>Other </option>
                            </select>
                        </div>
                        <div class="item">
                            <label for="info">Additional Info</label>
                            <textarea placeholder="Type anything you want us to know" id="info" name="info" required></textarea>
                        </div>
                        <div class="item">
                            <button style="margin-top: 20px;">Submit</button>
                        </div>`;
    } else {
        appointmentForm.innerHTML = `<div class="item">
                            <label for="name" style="margin-bottom: 10px;">Name <span style="color:red;">*</span></label>
                            <label></label>
                            <input placeholder="First Name" id="firstName" name="firstName" required>
                            <input placeholder="Last Name" id="lastName" name="lastName" required>
                        </div>
                        <div class="item">
                            <label for="email">Email <span style="color:red;">*</span></label>
                            <label for="phone">Phone <span style="color:red;">*</span></label>
                            <input placeholder="Email Address" id="email" name="email" required>
                            <input placeholder="Phone Number" id="phone" name="phone" required>
                        </div>
                        <div class="item">
                            <label for="date">Date <span style="color:red;">*</span></label>
                            <label for="time">Time <span style="color:red;">*</span></label>
                            <input type="date" class="date-input" id="date" name="date" required>
                            <select id="time" name="time" required>
                                <option>Select...</option>
                                <option>Morning</option>
                                <option>Afternoon</option>
                            </select>
                        </div>
                        <div class="item">
                            <label for="location">Location <span style="color:red;">*</span></label>
                            <label for="appointment">Type of Appointment <span style="color:red;">*</span></label>
                            <select id="location" name="location" required>
                                <option>Select...</option>
                                <option>Valley Vista Clinic</option>
                            </select>
                            <select id="appointment" name="appointment" required>
                                <option>Select...</option>
                                <option>New Patient</option>
                                <option>Urgent Immediate Care</option>
                                <option>Feeling Unwell</option>
                                <option>Annual Wellness Visit</option>
                                <option>Follow Up Appointment</option>
                                <option>Prescription Refill</option>
                                <option>Other </option>
                            </select>
                        </div>
                        <div class="item">
                            <label for="info">Additional Info</label>
                            <textarea placeholder="Type anything you want us to know" id="info" name="info" required></textarea>
                        </div>
                        <div class="item">
                            <button style="margin-top: 20px;">Submit</button>
                        </div>`;
    }
}

window.addEventListener('resize', checkScreenWidth);