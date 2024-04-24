// Variables globales para manejar las pestañas
let currentTab = 0;

// Función adicional al final del HTML (renombrada a showTab)
function showTab(event) {
    const button = event.target;
    const buttonIndex = Array.from(button.parentElement.children).indexOf(button);

    const tabContents = document.querySelectorAll('.tab-content-curso');
    const tabButtons = document.querySelectorAll('.tab-button-curso');

    tabContents.forEach(tab => {
        tab.style.display = 'none';
        tab.classList.remove('active-tab-content');
    });
    tabButtons.forEach(button => button.classList.remove('active'));

    const activeTabContent = tabContents[buttonIndex - 1];
    activeTabContent.style.display = 'block';
    activeTabContent.classList.add('active-tab-content');
    tabButtons[buttonIndex - 1].classList.add('active');

    // Encontrar todos los divs 'button-container-subtabs' dentro de los divs 'tab-content-curso'
    const allButtonContainers = document.querySelectorAll('.button-container-subtabs');

    // Remover la clase 'active-button-subtabs' de todos los botones excepto del primer botón
    allButtonContainers.forEach(container => {
        const buttons = container.querySelectorAll('button');
        buttons.forEach((btn, index) => {
            if (index === 0 && container.parentElement === activeTabContent) {
                btn.classList.add('active-button-subtabs');
            } else {
                btn.classList.remove('active-button-subtabs');
            }
        });
    });

    // Encontrar todos los divs 'content-subtabs' dentro de los divs 'tab-content-curso'
    const allContentSubtabs = document.querySelectorAll('.content-subtabs');

    // Remover la clase 'active-content-subtabs' de todos los divs 'content-subtabs'
    allContentSubtabs.forEach(contentSubtabs => {
        contentSubtabs.classList.remove('active-content-subtabs');
    });

    // Encontrar el primer div 'content-subtabs' dentro del div tab-content-curso activo
    const contentSubtabs = activeTabContent.querySelector('.content-subtabs');
    if (contentSubtabs) {
        contentSubtabs.classList.add('active-content-subtabs');
    } else {
        console.error("No se encontró ningún div 'content-subtabs' dentro del div 'tab-content-curso'");
    }
}

// Asignar la función showTab al nombre showTab en el ámbito global
window.showTab = showTab;

// Simular un clic en el primer elemento con la clase tab-button-curso al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    const firstTabButton = document.querySelector('.tab-button-curso');
    if (firstTabButton) {
        firstTabButton.click();
    }
});







  






























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
