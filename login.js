// login.js

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const firstName = form.querySelector('input[placeholder="First Name"]');
  const lastName = form.querySelector('input[placeholder="Last Name"]');
  const email = form.querySelector('input[placeholder="Email address"]');
  const password = form.querySelector('input[placeholder="Password"]');

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent form submission

    // Simple validation
    if (!firstName.value.trim() || !lastName.value.trim() || !email.value.trim() || !password.value.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Password validation (at least 6 characters)
    if (password.value.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    // If all checks pass, redirect to dashboard (or submit form)
    alert("Login successful! Redirecting...");
    form.submit();
  });

  // Optional: Toggle password visibility
  const togglePassword = document.createElement("button");
  togglePassword.type = "button";
  togglePassword.textContent = "Show";
  togglePassword.classList.add("btn", "btn-sm", "btn-secondary", "mb-3");
  password.parentNode.appendChild(togglePassword);

  togglePassword.addEventListener("click", () => {
    if (password.type === "password") {
      password.type = "text";
      togglePassword.textContent = "Hide";
    } else {
      password.type = "password";
      togglePassword.textContent = "Show";
    }
  });
});
