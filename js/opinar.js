document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const materiaId = parseInt(params.get("materia"));
  const docenteIndex = parseInt(params.get("docente"));

  fetch("json/materias.json")
    .then(res => res.json())
    .then(materias => {
      const materia = materias.find(m => m.id === materiaId);
      if (!materia) return;

      const docente = materia.docentes[docenteIndex];
      if (!docente) return;

      document.getElementById("nombre-materia").textContent = "Materia: " + materia.nombre;
      document.getElementById("nombre-docente").textContent = "Profesor: " + docente.nombre;

      document.getElementById("opinionForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const calificacion = document.getElementById("calificacion").value;

        // Por ahora solo mostramos un mensaje
        alert(`Gracias por calificar a ${docente.nombre} con un ${calificacion}.`);
        window.location.href = "/materias.html";

      });
    })
    .catch(error => console.error("Error al cargar datos:", error));
});
