fetch('docente.json')
  .then(response => response.json())
  .then(data => {
    const docente = data["Información del Docente"];

    // Header
    document.querySelector('.docente-info-basica h1').textContent = docente["Nombre Completo"];
    document.querySelector('.docente-info-basica p').textContent = `DNI: ${docente.DNI}`;

    // Datos Personales
    const datosPersonalesHTML = `
      <p><strong>Sexo:</strong> ${docente.Sexo}</p>
      <p><strong>Fecha de Nacimiento:</strong> ${docente["Fecha de Nacimiento"]}</p>
      <p><strong>Teléfono Fijo:</strong> ${docente.Teléfonos.Fijo}</p>
      <p><strong>Celular:</strong> ${docente.Teléfonos.Celular}</p>
      <p><strong>Estado Civil:</strong> ${docente["Estado Civil"]}</p>
      <p><strong>Fecha de Matrimonio:</strong> ${docente["Fecha de Matrimonio"]}</p>`;
    document.querySelector('.docente-seccion .docente-datos').innerHTML = datosPersonalesHTML;

    // Lugar de Nacimiento
    const lugarNacimientoHTML = `
      <p><strong>País:</strong> ${docente["Lugar de Nacimiento"].País}</p>
      <p><strong>Provincia:</strong> ${docente["Lugar de Nacimiento"].Provincia}</p>
      <p><strong>Departamento:</strong> ${docente["Lugar de Nacimiento"].Departamento}</p>
      <p><strong>Distrito:</strong> ${docente["Lugar de Nacimiento"].Distrito}</p>`;
    document.querySelectorAll('.docente-seccion .docente-datos')[1].innerHTML = lugarNacimientoHTML;
  })
  .catch(error => console.error('Error cargando datos:', error));

  // Abrir y cerrar el modal
    const modal = document.getElementById('modal-agregar-domicilio');
    const openModalBtn = document.getElementById('agregar-domicilio-btn');
    const closeModalBtn = document.querySelector('.close-btn');

    openModalBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    document.addEventListener("DOMContentLoaded", () => {
      const modalFormacion = document.getElementById('modal-agregar-formacion');
      const openFormacionBtn = document.getElementById('agregar-formacion-btn');
      const closeModalFormacionBtn = modalFormacion.querySelector('.close-btn');
      const formFormacion = document.getElementById('form-formacion');
      const formacionTabla = document.querySelector('.formacion-tabla tbody');
      let orden = 1;

      // Abrir el modal de formación
      openFormacionBtn.addEventListener('click', () => {
          modalFormacion.style.display = 'flex';
      });

      // Cerrar el modal de formación
      closeModalFormacionBtn.addEventListener('click', () => {
          modalFormacion.style.display = 'none';
      });

      window.addEventListener('click', (event) => {
          if (event.target === modalFormacion) {
              modalFormacion.style.display = 'none';
          }
      });

      // Manejar el envío del formulario
      formFormacion.addEventListener('submit', (event) => {
          event.preventDefault();

          const formData = new FormData(formFormacion);
          const nuevaFila = document.createElement('tr');

          nuevaFila.innerHTML = `
              <td>${orden++}</td>
              <td>${formData.get('formacion')}</td>
              <td>${formData.get('pais')}</td>
              <td>${formData.get('universidad')}</td>
              <td>${formData.get('especialidad')}</td>
              <td>${formData.get('fecha-inicio')}</td>
              <td>${formData.get('fecha-final')}</td>
              <td>${formData.get('grado')}</td>
              <td>
                  <button class="btn-warning">Editar</button>
                  <button class="btn-danger">Eliminar</button>
              </td>
          `;

          formacionTabla.appendChild(nuevaFila);
          modalFormacion.style.display = 'none';
          formFormacion.reset();
      });
  });
