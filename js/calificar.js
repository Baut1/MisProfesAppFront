document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const materiaId = parseInt(urlParams.get("materia"));

  fetch("json/materias.json")
    .then(res => res.json())
    .then(materias => {
      const materia = materias.find(m => m.id === materiaId);
      if (!materia) {
        document.getElementById("nombre-materia").textContent = "Materia no encontrada";
        return;
      }

      document.getElementById("nombre-materia").textContent = materia.nombre;

      const contenedor = document.getElementById("lista-docentes");
      materia.docentes.forEach((docente, index) => {
        const card = document.createElement("div");
        card.className = "docente-card";
        card.innerHTML = `
          <h3>${docente.nombre}</h3>
          <p><strong>Calificaciones:</strong> ${docente.cantidadCalificaciones}</p>
          <p><strong>Promedio:</strong> ${docente.promedio.toFixed(2)}</p>
          <a href="opinar.html?materia=${materia.id}&docente=${index}" class="btn-comenzar">Calificar</a>
        `;
        contenedor.appendChild(card);
      });
    })
    .catch(err => {
      console.error("Error cargando la materia:", err);
    });
});
