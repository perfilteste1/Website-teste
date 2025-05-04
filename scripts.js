// Smooth Scrolling for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Job Application Form Validation
document.getElementById('job-application-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const position = document.getElementById('position').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === "" || email === "" || position === "" || message === "") {
        alert("Please fill in all required fields.");
        return;
    }

    alert("Application submitted successfully!");
    this.reset();
});