window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var button = document.getElementById("back-to-top-curso");
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 180, // Scroll al inicio de la página
    behavior: 'smooth' // Desplazamiento suave
  });
}