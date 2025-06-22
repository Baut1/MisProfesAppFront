document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // obtain the user info values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    //Harcoding
    user = localStorage.getItem('usuario') ? JSON.parse(localStorage.getItem('usuario')) : null;
    console.log(user);

    if (user.email == email && user.password == password ) {
        window.location.href = 'materias.html';
        } else {
        alert('Usuario o contraseña incorrectos');
        }
    });