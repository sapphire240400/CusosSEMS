// Variables globales para manejar las pestañas
let currentTab = 0;

// Función para mostrar una pestaña específica
function showTab(tabIndex) {
    // Ocultar todas las pestañas y desactivar los botones
    const tabContents = document.querySelectorAll('.tab-content-curso');
    const tabButtons = document.querySelectorAll('.tab-button-curso');
    tabContents.forEach(tab => tab.style.display = 'none');
    tabButtons.forEach(button => button.classList.remove('active'));

    // Mostrar la pestaña deseada y activar el botón correspondiente
    tabContents[tabIndex].style.display = 'block';
    tabButtons[tabIndex].classList.add('active');

    // Actualizar el índice de la pestaña activa
    currentTab = tabIndex;

    // Actualizar visibilidad de botones previo y siguiente
    updateButtonVisibility();
}
























// Función para manejar la visibilidad de los botones previo y siguiente
function updateButtonVisibility() {
    const prevButton = document.querySelector('.pre');
    const nextButton = document.querySelector('.next');
    const tabButtons = document.querySelectorAll('.tab-button-curso');
    prevButton.style.visibility = currentTab === 0 ? 'hidden' : 'visible';
    
    // Obtener el número total de pestañas
    const totalTabs = tabButtons.length;

    // Ocultar el botón "Siguiente" si la pestaña actual es la última
    nextButton.style.visibility = currentTab === (totalTabs - 1) ? 'hidden' : 'visible';

    // Obtener la pestaña actual
    const currentTabContent = document.querySelector('.tab-wrapper_act .tab-content-curso:nth-child(' + (currentTab + 1) + ')');

    // Verificar si la pestaña actual es la última
    if (currentTab === totalTabs - 1) {
        // Verificar si hay actividad en la última pestaña
        const activityLink = currentTabContent.querySelector('a[target="_blank2"]');
        if (activityLink) {
            activityLink.addEventListener('click', function() {
                //alert("Es la última actividad");
            });
        }
    } else { // Si no es la última pestaña
        // Verificar si hay algún enlace dentro de la pestaña actual
        const activityLink = currentTabContent.querySelector('a[target="_blank2"]');
        if (activityLink) {
            nextButton.style.visibility = 'hidden'; // Ocultar el botón "Siguiente" si hay un enlace dentro de la pestaña actual
            
            // Deshabilitar los botones de las pestañas que están más adelante
            for (let i = currentTab + 1; i < totalTabs; i++) {
                tabButtons[i].style.pointerEvents = 'none'; // Deshabilitar hacer clic en las pestañas siguientes
                tabButtons[i].classList.add('disabled'); // Agregar un estilo para indicar que están deshabilitadas
            }

            // Agregar un controlador de eventos al enlace de actividad
            activityLink.addEventListener('click', function() {
                nextButton.style.visibility = 'visible'; // Mostrar nuevamente el botón "Siguiente" cuando se hace clic en un enlace de actividad
                
                // Habilitar los botones de las pestañas que están más adelante
                for (let i = currentTab + 1; i < totalTabs; i++) {
                    tabButtons[i].style.pointerEvents = 'auto'; // Habilitar hacer clic en las pestañas siguientes
                    tabButtons[i].classList.remove('disabled'); // Quitar el estilo de deshabilitado
                }
            });
        }
    }
}


// Función para mostrar la siguiente pestaña
function showNextTab() {
    const nextButton = document.querySelector('.next');
    if (nextButton.style.visibility !== 'hidden') {
        showTab(currentTab + 1);
    }
}

// Función para mostrar la pestaña anterior
function showPreviousTab() {
    const prevButton = document.querySelector('.pre');
    if (prevButton.style.visibility !== 'hidden') {
        showTab(currentTab - 1);
    }
}

// Event listeners para los botones de las pestañas
document.querySelectorAll('.tab-button-curso').forEach((button, index) => {
    button.addEventListener('click', () => showTab(index));
});

// Mostrar la primera pestaña al cargar la página
showTab(0);
