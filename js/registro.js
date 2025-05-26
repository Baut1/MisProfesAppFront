document.getElementById("registroForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmar = document.getElementById("confirmar").value;
  const mensaje = document.getElementById("mensaje");

  if (!nombre || !email || !password || !confirmar) {
    mensaje.textContent = "Por favor, completá todos los campos.";
    return;
  }

  if (!email.endsWith("@tu-facultad.edu.ar")) {
    mensaje.textContent = "Usá tu correo institucional.";
    return;
  }

  if (password.length < 6) {
    mensaje.textContent = "La contraseña debe tener al menos 6 caracteres.";
    return;
  }

  if (password !== confirmar) {
    mensaje.textContent = "Las contraseñas no coinciden.";
    return;
  }

  // Simular guardado
  const usuario = { nombre, email, password };
  console.log("Usuario registrado:", usuario);
  mensaje.style.color = "green";
  mensaje.textContent = "¡Registro exitoso! Redirigiendo...";

  // Redireccionar luego de 2 segundos
  setTimeout(() => {
    window.location.href = "index.html"; // cambiar si hay otra página
  }, 2000);
});
