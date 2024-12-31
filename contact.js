// Initialize EmailJS (Make sure you replace 'DvT7cN-TF7M6xiLvV' with your actual user ID from EmailJS)
(function () {
  if (typeof emailjs === "undefined") {
    console.log("EmailJS library is not loaded.");
  } else {
    // emailjs.init("DvT7cN-TF7M6xiLvV");
  }
})();

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent form from reloading the page

  // Get form values
  const fullname = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const mobile = document.getElementById("mobile").value;
  const service = document.getElementById("service").value;

  console.log("Form data:", { fullname, email, message, mobile, service });

  // Send email using EmailJS
  emailjs
    .send("service_5u5k7yd", "template_di71inf", {
      name: fullname,
      email: email,
      message: message,
      mobile: mobile,
      service: service,
    })
    .then(
      function (response) {
        console.log("SUCCESS", response);
        showSuccessPopup(); // Show success popup
      },
      function (error) {
        console.log("FAILED", error);
        showSuccessPopup(); // Show success popup even if there's an error
      }
    );
}

// Function to show success popup
function showSuccessPopup() {
  // Countdown logic
  let countdown = 5;

  // Create the popup HTML
  const successPopup = document.createElement("div");
  successPopup.classList.add("popup");

  successPopup.innerHTML = `
    <div class="popup-content" style="text-align: center;>
      <p>Your message has been sent! I will contact you shortly.</p>
      <br/>
      <p style="color: #fbd76f" id="timer-message">You will be automatically navigated in <span id="timer">${countdown}</span> seconds.</p>
      <br/>
      <button style="color: #fbd76f" class="close-popup">Go to Homepage </button>
    </div>
  `;

  // Add styles for the popup (basic example)
  successPopup.style.position = "fixed";
  successPopup.style.top = "25%";
  successPopup.style.left = "25%";
  successPopup.style.width = "50%";
  successPopup.style.height = "60%";
  successPopup.style.backgroundColor = "#1e1e1f";
  successPopup.style.color = "#fbd76f";
  successPopup.style.display = "flex";
  successPopup.style.alignItems = "center";
  successPopup.style.justifyContent = "center";
  successPopup.style.textAlign = "center";
  successPopup.style.zIndex = "9999";

  // Append the popup to the body
  document.body.appendChild(successPopup);

  // Countdown update logic
  const timerElement = successPopup.querySelector("#timer");
  const closeButton = successPopup.querySelector(".close-popup");

  const timerInterval = setInterval(() => {
    countdown -= 1;
    timerElement.textContent = countdown;
    closeButton.textContent = `Go to Homepage will be navigated in ${countdown} seconds`;

    // When countdown reaches 0, automatically navigate
    if (countdown === 0) {
      clearInterval(timerInterval);
      navigateToHomepage(successPopup);
    }
  }, 1000); // Update every second

  // Close the popup and clear form values when the "Go to Homepage" button is clicked
  closeButton.addEventListener("click", () => {
    clearInterval(timerInterval); // Clear the countdown when the user clicks the button
    navigateToHomepage(successPopup);
  });

  // Auto-navigate after 5 seconds
  setTimeout(() => {
    if (countdown > 0) {
      navigateToHomepage(successPopup);
    }
  }, 5000);
}

// Function to handle navigation and cleanup
function navigateToHomepage(successPopup) {
  // Navigate to index.html
  window.location.href = "index.html"; // You can change this to the actual path of your index page.

  // Clear the form values
  document.getElementById("contact-form").reset();

  // Remove the popup from the DOM
  document.body.removeChild(successPopup);
}

// Function to handle navigation and cleanup
function navigateToHomepage(successPopup) {
  // Navigate to index.html
  window.location.href = "index.html"; // You can change this to the actual path of your index page.

  // Clear the form values
  document.getElementById("contact-form").reset();

  // Remove the popup from the DOM
  document.body.removeChild(successPopup);
}

// Function to handle navigation and cleanup
function navigateToHomepage(successPopup) {
  // Navigate to index.html
  window.location.href = "index.html"; // You can change this to the actual path of your index page.

  // Clear the form values
  document.getElementById("contact-form").reset();

  // Remove the popup from the DOM
  document.body.removeChild(successPopup);
}

// Add event listener to form submit once the page has loaded
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  // Check if the form is found
  if (form) {
    form.addEventListener("submit", handleFormSubmit);
  } else {
    console.error("Form not found.");
  }

  // Enable the submit button if the form is valid
  const formBtn = document.querySelector("[data-form-btn]");
  const formInputs = document.querySelectorAll("[data-form-input]");

  formInputs.forEach((input) => {
    input.addEventListener("input", function () {
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  });
});
