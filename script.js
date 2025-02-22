// Toggle between Login and Signup forms
function toggleForms() {
    const container = document.querySelector('.container');
    container.classList.toggle('active');
}

// Validate Login Form
function validateLoginForm(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('login-error-message');

    if (username === "" || password === "") {
        errorMessage.textContent = "Please fill in all fields.";
        return;
    }

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Login successful!');
            // Redirect or perform other actions
        } else {
            errorMessage.textContent = data.message || 'Invalid username or password.';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        errorMessage.textContent = 'An error occurred. Please try again.';
    });
}

// Validate Signup Form
function validateSignupForm(event) {
    event.preventDefault();
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;
    const errorMessage = document.getElementById('signup-error-message');

    if (newUsername === "" || newPassword === "") {
        errorMessage.textContent = "Please fill in all fields.";
        return;
    }

    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: newUsername, password: newPassword }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Account created successfully!');
            toggleForms(); // Switch to login form
        } else {
            errorMessage.textContent = data.message || 'Error creating account.';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        errorMessage.textContent = 'An error occurred. Please try again.';
    });
}