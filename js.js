// Obtiene la referencia al elemento modal por su ID.
const modal = document.getElementById("mod");
// Obtiene la referencia al botón que abre la modal por su ID.
const btn = document.getElementById("btnMod");
// Obtiene la referencia al elemento de cierre (la 'x') dentro de la modal.
const span = document.querySelector(".cerrar");

// Verifica que los elementos de la modal existan antes de intentar añadir los event listeners.
if (btn && span && modal) {
  // Asigna una función al evento 'click' del botón para mostrar la modal.
  btn.onclick = function () {
    modal.style.display = "block"; // Cambia el estilo de la modal para que sea visible.
  }

  // Asigna una función al evento 'click' del elemento de cierre para ocultar la modal.
  span.onclick = function () {
    modal.style.display = "none"; // Cambia el estilo de la modal para que sea invisible.
  }

  // Asigna una función al evento 'click' global de la ventana para cerrar la modal
  // si el clic se realiza fuera del contenido de la modal.
  window.onclick = function (event) {
    if (event.target === modal) { // Compara si el elemento clickeado es la propia modal (el fondo oscuro).
      modal.style.display = "none"; // Oculta la modal.
    }
  }
}


/*
  Inicialización de Popovers de Bootstrap
  Asegura que todos los elementos con 'data-bs-toggle="popover"' sean inicializados
  como popovers de Bootstrap una vez que el DOM esté completamente cargado.
*/
document.addEventListener('DOMContentLoaded', function () {
  // Selecciona todos los elementos con el atributo 'data-bs-toggle="popover"'.
  // Se usa 'Array.from()' para convertir la NodeList resultante en un Array.
  const popoverTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="popover"]'));
  
  // Mapea la lista de elementos para crear una nueva instancia de Popover para cada uno.
  const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });
});


/*
  Funcionalidad de Toast de Bootstrap
  Define una función para mostrar dinámicamente un componente Toast.
*/
function mostrarToast() {
  // Obtiene la referencia al elemento Toast por su ID.
  const toastEl = document.getElementById("miToast");
  // Crea una nueva instancia de Toast de Bootstrap.
  const toast = new bootstrap.Toast(toastEl);
  // Muestra el Toast.
  toast.show();
}   


/*
  Funcionalidad de Alerta Dinámica de Bootstrap
  Gestiona la creación y visualización de alertas personalizadas.
*/

// Obtiene la referencia al contenedor donde se insertarán las alertas.
const alertPlaceholder = document.getElementById('liveAlertPlaceholder');

// Función para añadir una alerta al contenedor.
// Recibe un mensaje y un tipo de alerta (e.g., 'success', 'danger').
const appendAlert = (message, type) => {
  // Crea un nuevo elemento 'div' que actuará como envoltorio para la alerta.
  const wrapper = document.createElement('div');
  // Asigna el HTML interno del wrapper, que contiene la estructura de la alerta de Bootstrap.
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible fade show" role="alert">`, // 'fade show' para animaciones
    ` <div>${message}</div>`,
    ' <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join(''); // Une los elementos del array en una sola cadena HTML.

  // Añade el wrapper (con la alerta) al contenedor de alertas.
  alertPlaceholder.append(wrapper);
};

// Obtiene la referencia al botón que dispara la alerta.
const alertTrigger = document.getElementById('liveAlertBtn');

// Verifica si el botón de alerta existe antes de añadir el event listener.
if (alertTrigger) {
  // Asigna un event listener para el evento 'click' al botón de alerta.
  alertTrigger.addEventListener('click', () => {
    // Llama a la función 'appendAlert' para mostrar un mensaje de nuevo juego disponible.
    appendAlert('¡Nuevo juego disponible en el catálogo!', 'success');
  });
}
