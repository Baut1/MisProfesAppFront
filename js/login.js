document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // obtain the user info values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    //Hardcoding
    user = localStorage.getItem('usuario') ? JSON.parse(localStorage.getItem('usuario')) : null;

    if (!user) {
        mensaje.textContent = 'Usuario o contraseña incorrectos.';
        mensaje.style.color = 'red';
        return;
    }

    if (user.email === email && user.password === password) {
        mensaje.textContent = '';
        window.location.href = 'materias.html';
    } else {
        mensaje.textContent = 'Usuario o contraseña incorrectos.';
        mensaje.style.color = 'red';
    }
});