const BASE_URL = 'http://localhost:8000'; // Update if needed

const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');
const messageDiv = document.getElementById('message');

function showMessage(msg, isError = false) {
  messageDiv.textContent = msg;
  messageDiv.className = isError ? 'error' : '';
}

registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const user = {
    firstname: document.getElementById('firstname').value,
    lastname: document.getElementById('lastname').value,
    email: document.getElementById('registerEmail').value,
    password: document.getElementById('registerPassword').value
  };

  try {
    const res = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.detail);
    showMessage(data.message);
  } catch (err) {
    showMessage(err.message, true);
  }
});

// Handle login
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const credentials = {
    email: document.getElementById('loginEmail').value,
    password: document.getElementById('loginPassword').value
  };

  try {
    const res = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });

    const data = await res.json();
    console.log(data)
    if (!res.ok) throw new Error(data.detail);
    showMessage(`${data.message}. Welcome, ${data.user.firstname}!`);
  } catch (err) {
    showMessage(err.message, true);
  }
});
