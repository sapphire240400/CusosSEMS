// JavaScript para la funcionalidad de los modales
var modals = document.querySelectorAll('.modal'); // Obtiene todos los modales

// Obtiene los botones que abren los modales
var btns = document.querySelectorAll('button[id^="myBtn"]');

// Obtiene los elementos <span> que cierran los modales
var spans = document.querySelectorAll('.close');

// Función para abrir el modal específico
function openModal(index) {
  modals[index].style.display = "block";
}

// Función para cerrar todos los modales
function closeModal() {
  modals.forEach(function(modal) {
    modal.style.display = "none";
  });
}

// Asigna eventos de clic a los botones de abrir modales
btns.forEach(function(btn, index) {
  btn.onclick = function() {
    closeModal(); // Cierra todos los modales antes de abrir uno nuevo
    openModal(index); // Abre el modal correspondiente al botón clicado
  }
});

// Asigna eventos de clic a los elementos <span> para cerrar modales
spans.forEach(function(span) {
  span.onclick = function() {
    closeModal(); // Cierra todos los modales
  }
});

// Cierra el modal si se hace clic fuera del contenido del modal
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    closeModal(); // Cierra todos los modales
  }
}