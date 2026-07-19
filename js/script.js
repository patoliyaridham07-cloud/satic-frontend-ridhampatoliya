// Assignment Submission Portal

const form = document.getElementById("assignmentForm");
const tableBody = document.getElementById("tableBody");
const scrollBtn = document.getElementById("scrollBtn");

// Scroll to form
scrollBtn.addEventListener("click", () => {
    document.getElementById("submit").scrollIntoView({
        behavior: "smooth"
    });
});

// Submit Form
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const enroll = document.getElementById("enroll").value.trim();
    const email = document.getElementById("email").value.trim();
    const semester = document.getElementById("semester").value;
    const subject = document.getElementById("subject").value.trim();
    const title = document.getElementById("title").value.trim();
    const date = document.getElementById("date").value;
    const file = document.getElementById("file").files[0];

    if (
        name === "" ||
        enroll === "" ||
        email === "" ||
        semester === "" ||
        subject === "" ||
        title === "" ||
        date === "" ||
        !file
    ) {
        alert("Please fill all fields.");
        return;
    }

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${enroll}</td>
        <td>${subject}</td>
        <td>${semester}</td>
        <td>${title}</td>
        <td>${date}</td>
    `;

    tableBody.appendChild(row);

    alert("Assignment Submitted Successfully!");

    form.reset();
});

// Highlight current navigation link
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(item => item.classList.remove("active"));
        this.classList.add("active");
    });
});

// Set today's date as minimum submission date
const dateInput = document.getElementById("date");
const today = new Date().toISOString().split("T")[0];
dateInput.setAttribute("min", today);

// Welcome message
window.addEventListener("load", () => {
    console.log("Assignment Submission Portal Loaded Successfully.");
});
