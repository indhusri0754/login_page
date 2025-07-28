import React from 'react';

function LoginForm() {
   const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  try {
            const response = fetch('/api/register', { // Replace with your Spring Boot login endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            if (response.ok) {
                // Login successful, redirect or update UI
                console.log('Login successful!');
                alert('Login successful!');               
            } else {
                // Login failed, display error message
                const errorData = response.json();
                console.error('Login failed:', errorData.message);
                alert('Login failed: ' + errorData.message);
            }
        } catch (error) {
            console.error('Network error:', error);
            alert('An error occurred during login.');
        }

}

export default LoginForm;