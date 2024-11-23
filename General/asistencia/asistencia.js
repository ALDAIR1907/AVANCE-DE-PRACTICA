// Variables para almacenar datos
let studentAttendance = [];
let teacherAttendance = [];

// Actualizar reloj
function updateClock() {
    const now = new Date();
    document.getElementById("clock").innerText = now.toLocaleTimeString();
}

// Validar horarios para entrada o salida
function validateTime(type, role) {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    if (type === "entry") {
        if ((hours === 7 && minutes >= 45) || (hours === 8 && minutes <= 5)) {
            return { status: "Puntual", message: `${role} registrado a tiempo.` };
        } else {
            return { status: "Tardanza", message: `${role} registrado con tardanza.` };
        }
    } else if (type === "exit") {
        if (hours >= 14 && hours < 15) {
            return { status: "Puntual", message: `${role} salida registrada correctamente.` };
        } else {
            return { status: "Inválido", message: `${role} hora de salida no válida.` };
        }
    }
}

// Registrar asistencia
function registerAttendance(type, role) {
    const now = new Date();
    const time = now.toLocaleTimeString();
    const validation = validateTime(type, role);

    const attendanceList = role === "Docente" ? teacherAttendance : studentAttendance;

    if (validation.status !== "Inválido") {
        attendanceList.push({
            type: type === "entry" ? "Entrada" : "Salida",
            time: time,
            status: validation.status,
        });
        document.getElementById(role === "Docente" ? "teacher-status" : "status").innerText =
            validation.message;
        updateAttendanceLog(role);
    } else {
        document.getElementById(role === "Docente" ? "teacher-status" : "status").innerText =
            validation.message;
    }
}

// Mostrar historial de asistencia
function updateAttendanceLog(role) {
    const logElement = role === "Docente" ? "teacher-attendance-log" : "attendance-record";
    const attendanceList = role === "Docente" ? teacherAttendance : studentAttendance;

    document.getElementById(logElement).innerText = JSON.stringify(attendanceList, null, 2);
}

// Asignar eventos a botones
document.getElementById("markAttendanceBtn").addEventListener("click", () => {
    registerAttendance("entry", "Alumno");
});

document.getElementById("teacher-entry").addEventListener("click", () => {
    registerAttendance("entry", "Docente");
});

document.getElementById("teacher-exit").addEventListener("click", () => {
    registerAttendance("exit", "Docente");
});

// Actualizar reloj cada segundo
setInterval(updateClock, 1000);
updateClock();
 