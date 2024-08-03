document.addEventListener("DOMContentLoaded", () => {
    const genderSelect = document.getElementById("Gender");
    const languageSelect = document.getElementById("Language");
    const locationSelect = document.getElementById("Location");
    const searchInput = document.getElementById("Search-Doctors");
    const resetButton = document.getElementById("Reset");

    const doctors = document.querySelectorAll(".doctors li");

    const filterDoctors = () => {
        const selectedGender = genderSelect.value;
        const selectedLanguage = languageSelect.value;
        const selectedLocation = locationSelect.value.toLowerCase();
        const searchQuery = searchInput.value.toLowerCase();

        doctors.forEach(doctor => {
            const doctorName = doctor.querySelector('h1').textContent.toLowerCase();
            const [doctorGender, doctorLanguage, doctorLocation] = doctor.id.split(" ");

            const matchesGender = selectedGender === "none" || selectedGender === doctorGender;
            const matchesLanguage = selectedLanguage === "none" || selectedLanguage === doctorLanguage;
            const matchesLocation = selectedLocation === "none" || selectedLocation === doctorLocation;
            const matchesSearch = !searchQuery || doctorName.includes(searchQuery);

            if (matchesGender && matchesLanguage && matchesLocation && matchesSearch) {
                doctor.style.display = "block";
            } else {
                doctor.style.display = "none";
            }
        });
    };

    genderSelect.addEventListener("change", filterDoctors);
    languageSelect.addEventListener("change", filterDoctors);
    locationSelect.addEventListener("change", filterDoctors);
    searchInput.addEventListener("input", filterDoctors);

    resetButton.addEventListener("click", () => {
        genderSelect.value = "none";
        languageSelect.value = "none";
        locationSelect.value = "none";
        searchInput.value = "";
        doctors.forEach(doctor => {
            doctor.style.display = "block";
        });
    });

    filterDoctors();
});
