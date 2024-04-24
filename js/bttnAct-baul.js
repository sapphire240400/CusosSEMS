// ;;;;;;;;;;;;;;;;;;;;;;;;;
// ;;  BOTONES ACTIVIDAD  ;;
//;;;;;;;;;;;;;;;;;;;;;;;;;;

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".toggle-button-subtabs-baul");
  const contents = document.querySelectorAll(".content-subtabs-baul");

  // Agregar la clase "active-content-subtabs" al primer contenido
  contents[0].classList.add("active-content-subtabs-baul");

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => {
        btn.classList.remove("active-button-subtabs-baul");
      });

      button.classList.add("active-button-subtabs-baul");

      contents.forEach((content) => {
        content.classList.remove("active-content-subtabs-baul");
      });

      contents[index].classList.add("active-content-subtabs-baul");
    });
  });

  // Activar automáticamente el primer botón al cargar la página
  buttons[index].classList.add("active-button-subtabs-baul");
});