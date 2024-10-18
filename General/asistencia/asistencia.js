document.addEventListener('DOMContentLoaded', function () {
    const tablaAsistencia = document.getElementById('tablaAsistencia');
    const mensaje = document.getElementById('mensaje');
    const marcarEntradaBtn = document.getElementById('marcarEntrada');
    const marcarSalidaBtn = document.getElementById('marcarSalida');

    let asistencia = {
        id: 1,
        codDocente: 87546374,
        fecha: obtenerFechaActual(),
        horaEntrada: null,
        horaSalida: null,
        estado: "Pendiente"
    };

    // Función para obtener la fecha actual en formato 'yyyy-mm-dd'
    function obtenerFechaActual() {
        const hoy = new Date();
        return hoy.toISOString().split('T')[0];
    }

    // Función para obtener la hora actual en formato 'HH:mm:ss'
    function obtenerHoraActual() {
        const ahora = new Date();
        return ahora.toTimeString().split(' ')[0];
    }

    // Función para marcar la hora de entrada
    marcarEntradaBtn.addEventListener('click', function () {
        if (!asistencia.horaEntrada) {
            asistencia.horaEntrada = obtenerHoraActual();
            asistencia.estado = "En Proceso";
            mensaje.textContent = "Entrada marcada con éxito a las " + asistencia.horaEntrada;
            actualizarTabla();
        } else {
            mensaje.textContent = "Ya se ha marcado la entrada.";
        }
    });

    // Función para marcar la hora de salida
    marcarSalidaBtn.addEventListener('click', function () {
        if (asistencia.horaEntrada && !asistencia.horaSalida) {
            asistencia.horaSalida = obtenerHoraActual();
            asistencia.estado = "Completado";
            mensaje.textContent = "Salida marcada con éxito a las " + asistencia.horaSalida;
            actualizarTabla();
        } else if (!asistencia.horaEntrada) {
            mensaje.textContent = "Primero debe marcar la entrada.";
        } else {
            mensaje.textContent = "Ya se ha marcado la salida.";
        }
    });

    // Función para actualizar la tabla de asistencia
    function actualizarTabla() {
        tablaAsistencia.innerHTML = `
            <tr>
                <td>${asistencia.id}</td>
                <td>${asistencia.codDocente}</td>
                <td>${asistencia.fecha}</td>
                <td>${asistencia.horaEntrada ? asistencia.horaEntrada : 'No marcada'}</td>
                <td>${asistencia.horaSalida ? asistencia.horaSalida : 'No marcada'}</td>
                <td>${asistencia.estado}</td>
            </tr>
        `;
    }

    // Inicializa la tabla
    actualizarTabla();
});

function toggleTable(mes) {
    const table = document.getElementById(mes);
    // Cambia el estilo de display de la tabla
    if (table.style.display === 'none' || table.style.display === '') {
        table.style.display = 'table'; // Muestra la tabla
    } else {
        table.style.display = 'none'; // Oculta la tabla
    }
}
