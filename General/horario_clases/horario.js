document.addEventListener("DOMContentLoaded", () => {
    const schedule = document.querySelector(".schedule tbody");

    // Función para cargar y rellenar los datos
    async function cargarHorario(bloque) {
        try {
            // Carga el JSON
            const response = await fetch("General/horario_clases/horario.json");
            const data = await response.json();

            // Limpia la tabla antes de agregar nuevos datos
            schedule.querySelectorAll("td").forEach(td => td.textContent = "");

            // Obtén los datos del bloque seleccionado
            const bloqueData = data[bloque];
            if (!bloqueData) return;

            // Rellena la tabla con los datos
            Object.keys(bloqueData).forEach(id => {
                const cell = document.getElementById(id);
                if (cell) {
                    cell.textContent = bloqueData[id];
                    // Opcional: Estilo para las celdas con contenido
                    if (bloqueData[id]) {
                        cell.classList.add("filled"); // Clase CSS opcional
                    }
                }
            });
        } catch (error) {
            console.error("Error al cargar el horario:", error);
        }
    }

    // Cambiar horario al seleccionar otro bloque
    document.getElementById("bloque-select").addEventListener("change", (e) => {
        cargarHorario(e.target.value);
    });

    // Cargar el horario inicial
    cargarHorario(document.getElementById("bloque-select").value);
});
