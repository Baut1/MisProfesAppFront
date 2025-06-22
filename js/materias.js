document.addEventListener("DOMContentLoaded", () => {
  fetch("json/materias.json")
    .then(res => res.json())
    .then(materias => {
      const contenedor = document.getElementById("materias-listado");

      materias.forEach(materia => {
        // Calcular cantidad total y promedio general
        const totalCalificaciones = materia.docentes.reduce((acc, docente) => acc + docente.cantidadCalificaciones, 0);

        const sumaPonderada = materia.docentes.reduce((acc, docente) => {
          return acc + (docente.promedio * docente.cantidadCalificaciones);
        }, 0);

        const promedioGeneral = totalCalificaciones > 0 ? (sumaPonderada / totalCalificaciones).toFixed(2) : "N/A";

        // Crear tarjeta de materia
        const card = document.createElement("div");
        card.className = "materia-card";
        card.innerHTML = `
          <h3>${materia.nombre}</h3>
          <p><strong>Calificaciones totales:</strong> ${totalCalificaciones}</p>
          <p><strong>Promedio general:</strong> ${promedioGeneral}</p>
          <a href="calificar.html?materia=${materia.id}" class="btn-comenzar">Calificar</a>
        `;
        contenedor.appendChild(card);
      });
    })
    .catch(error => {
      console.error("Error al cargar las materias:", error);
    });
});
