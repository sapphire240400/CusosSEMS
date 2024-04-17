// ;;;;;;;;;;;;;;;;;;;;;;;;;
// ;;  BOTONES ACTIVIDAD  ;;
//;;;;;;;;;;;;;;;;;;;;;;;;;;

 document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".toggle-button-subtabs");
  const contents = document.querySelectorAll(".content-subtabs");

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      
      buttons.forEach((btn) => {
        btn.classList.remove("active-button-subtabs");                // Remove the active-button class from all buttons
      });

      button.classList.add("active-button-subtabs");                  // Add the active-button class to the clicked button
      
      contents.forEach((content) => {
        content.classList.remove("active-content-subtabs");           // Hide all content containers
      });

      contents[index].classList.add("active-content-subtabs");        // Display the content  clicked button

      
    });
  });
});
