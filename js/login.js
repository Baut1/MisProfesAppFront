document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Here we obtain the user info values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Gather the user info from the local storage
    //const users = JSON.parse(localStorage.getItem('users')) || [];
    //const user = users.find(user => user.mail === username && user.password === password);

    //Harcoding the user info
    user = {
        email : 'usertest@gmail.com',
        password : '123456'
    }

    if (user.email == email && user.password == password ) {
        alert('Inicio de sesión exitoso');
        // This is for redirect the user to other page, could be the user profile.
        window.location.href = 'dashboard.html';
        } else {
        alert('Usuario o contraseña incorrectos');
        }
    });