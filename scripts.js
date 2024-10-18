// Selecciona los elementos del DOM
const toggleButton = document.getElementById('sidebar-toggle');
const sidebar = document.getElementById('sidebar');
const contentArea = document.querySelector('.content'); // Ajusta la selección del área de contenido

// Evento para abrir y cerrar el sidebar
toggleButton.addEventListener('click', function() {
    sidebar.classList.toggle('collapsed');
});

function loadContent(url) {
    const contentDiv = document.querySelector('.content');

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la carga del contenido: ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            contentDiv.innerHTML = data;
        })
        .catch(error => {
            contentDiv.innerHTML = `<p>Error al cargar el contenido: ${error.message}</p>`;
        });
}
