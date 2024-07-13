// Define the correct password
const correctPassword = "aiub";

// Get the form, password input, heading, and CV links container
const passwordForm = document.getElementById("passwordForm");
const passwordInput = document.getElementById("password");
const cvLinksContainer = document.getElementById("cvLinks");
const heading = document.getElementById("heading");

// Attach a submit event listener to the form
passwordForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the entered password
    const enteredPassword = passwordInput.value;

    // Check if the entered password is correct
    if (enteredPassword === correctPassword) {
        displayCVLinks();
    } else {
        document.getElementById("error").textContent = "Incorrect password. Please try again.";
    }
});

function displayCVLinks() {
    // Clear any previous content
    cvLinksContainer.innerHTML = "";

    // Change the heading text
    heading.textContent = "Here Are Your CV Links";

    // Define CVs with their names and links
    const cvs = [
        { name: "One Page (ATS) CV", link: "https://drive.google.com/file/d/124eCOhPj-uvwxc3QAEahYs72QrETvyOK/preview" },
        { name: "Analog CV", link: "https://drive.google.com/file/d/1pfObjXWnzhXwuws_anGEbLJOFbj8mjyN/preview" }
        // Add more CVs as needed
    ];

    // Generate CV links dynamically as styled buttons
    cvs.forEach(cv => {
        const cvButton = document.createElement("button");
        cvButton.textContent = cv.name;
        cvButton.classList.add("cv-button"); // Add a CSS class for styling
        cvButton.addEventListener("click", function () {
            window.open(cv.link); // Open the CV link in a new tab/window when clicked
        });
        cvLinksContainer.appendChild(cvButton);
        cvLinksContainer.appendChild(document.createElement("br"));
    });

    // Hide the password input and submit button
    passwordInput.style.display = "none";
    passwordForm.querySelector("input[type=submit]").style.display = "none";
}
