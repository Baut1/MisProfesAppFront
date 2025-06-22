document.addEventListener("DOMContentLoaded", () => {
  fetch("componentes/header.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("header-container").innerHTML = html;
    })
    .catch(err => {
      console.error("No se pudo cargar el header:", err);
    });
});
