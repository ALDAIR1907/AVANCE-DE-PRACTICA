// JSON con los datos
const datosDocente = {
    "nombre": "Obregón Ramos, Máximo",
    "dni": "08161078",
    "fecha_nacimiento": "16/02/1975",
    "telefono_fijo": ["5316292", "5454654", "5310303"],
    "celular": ["951622994", "999626562"],
    "email": ["maximo@uni.edu", "maxobregon@gmail.com"],
    "ruc": "",
    "lib_militar": "",
    "estado_civil": "Casado",
    "fecha_matrimonio": "01/04/2005",
    "grupo_sanguineo": "-",
    "lugar_nacimiento": {
        "pais": "Perú",
        "departamento": "15 Lima",
        "provincia": "01 Lima",
        "distrito": "35 San Martín de Porres"
    },
    "domicilio": [
        {
            "pais": "Perú",
            "departamento": "15 Lima",
            "provincia": "01 Lima",
            "distrito": "35 San Martín de Porres",
            "tipo_via": "-",
            "nombre_via": "Mz F",
            "numero_inmueble": "F"
        }
    ]
};

function cargarDatos() {
    console.log(datosDocente); // Agregado para verificar si los datos se cargan correctamente
    document.getElementById('nombre-docente').textContent = datosDocente.nombre;
    document.getElementById('dni-docente').textContent = "DNI: " + datosDocente.dni;
    document.getElementById('fecha-nacimiento').textContent = datosDocente.fecha_nacimiento;
    document.getElementById('estado-civil').textContent = datosDocente.estado_civil;

    // Cargar teléfonos fijos
    const telefonosFijosList = document.getElementById('telefonos-fijos');
    datosDocente.telefono_fijo.forEach(telefono => {
        const li = document.createElement('li');
        li.textContent = telefono;
        telefonosFijosList.appendChild(li);
    });

    // Cargar celulares
    const celularesList = document.getElementById('celulares');
    datosDocente.celular.forEach(celular => {
        const li = document.createElement('li');
        li.textContent = celular;
        celularesList.appendChild(li);
    });

    // Cargar emails
    const emailsList = document.getElementById('emails');
    datosDocente.email.forEach(email => {
        const li = document.createElement('li');
        li.textContent = email;
        emailsList.appendChild(li);
    });

    // Cargar lugar de nacimiento
    document.getElementById('pais').textContent = datosDocente.lugar_nacimiento.pais;
    document.getElementById('departamento').textContent = datosDocente.lugar_nacimiento.departamento;
    document.getElementById('provincia').textContent = datosDocente.lugar_nacimiento.provincia;
    document.getElementById('distrito').textContent = datosDocente.lugar_nacimiento.distrito;

    // Cargar domicilio
    const domicilio = datosDocente.domicilio[0]; // Asumimos que hay un solo domicilio
    document.getElementById('direccion').textContent = `${domicilio.tipo_via} ${domicilio.nombre_via} ${domicilio.numero_inmueble}, ${domicilio.distrito}, ${domicilio.provincia}, ${domicilio.departamento}`;
}
