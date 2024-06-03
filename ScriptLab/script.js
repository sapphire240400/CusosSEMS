
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// ;;  Llamar funciones por boton y aplicar tryCath() ;;
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

$("#TextoBold").on("click", () => tryCatch(textBold));
$("#TextoSub").on("click", () => tryCatch(textSub));
$("#brText").on("click", () => tryCatch(agregarbr));
$("#btnGreen").on("click", () => tryCatch(asignarGreenText));
$("#btnRed").on("click", () => tryCatch(asignarImportantText));
$("#secText").on("click", () => tryCatch(asignarSecText));
$("#titleText").on("click", () => tryCatch(titleText));
$("#banner").on("click", () => tryCatch(agregarBanner));
$("#ind_sect").on("click", () => tryCatch(asignarEncuadre));
$("#iconos").on("click", () => tryCatch(socialMedia));
$("#seccionImportant").on("click", () => tryCatch(asignarImportantSeccion));
$("#seccionImportantHijo").on("click", () => tryCatch(asignarImportantSeccionHijo));
$("#titulo").on("click", () => tryCatch(asignarTitulo));
$("#seccionAct").on("click", () => tryCatch(asignarSeccionAct));
$("#seccionActHijo").on("click", () => tryCatch(asignarSeccionActHijo));
$("#seccionActHijoTitle").on("click", () => tryCatch(asignarSeccionActHijoTitulo));
$("#TextoNormal").on("click", () => tryCatch(textoNormal));
$("#TextoCentrado").on("click", () => tryCatch(textoCenter));
$("#tabs").on("click", () => tryCatch(crearCajaDeTabs));
$("#tabsBtn").on("click", () => tryCatch(crearBtnDeTabs));
$("#tabWrapper").on("click", () => tryCatch(crearCajaDeContents));
$("#btnPre").on("click", () => tryCatch(crearBtnPre));
$("#btnNext").on("click", () => tryCatch(crearBtnNext));
$("#tabContent").on("click", () => tryCatch(crearContent));
$("#temario").on("click", () => tryCatch(crearCajaTemario));
$("#cajaTablatemario").on("click", () => tryCatch(crearCajaTablaTemario));
$("#tablaTemario").on("click", () => tryCatch(crearTablaTemario));
$("#tr").on("click", () => tryCatch(crearTR));
$("#th").on("click", () => tryCatch(crearTH));
$("#td").on("click", () => tryCatch(crearTD));
$("#tr2").on("click", () => tryCatch(crearTR));
$("#th2").on("click", () => tryCatch(crearTH));
$("#td2").on("click", () => tryCatch(crearTD));

$("#semblanzaNombre").on("click", () => tryCatch(asingarNombreSemblanza));
$("#semblanzaContenido").on("click", () => tryCatch(asingarContenidoSemblanza));
$("#textHov").on("click", () => tryCatch(asignarTextHover));
$("#textConcept").on("click", () => tryCatch(asignarConcepto));
$("#textDef").on("click", () => tryCatch(asignarDef));
$("#calTable").on("click", () => tryCatch(tabla2));
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// ;;  Función para manejar errores de forma general ;;
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
async function tryCatch(callback) {
  try {
    await callback();
  } catch (error) {
    console.error(error);
  }
}

// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// ;;  Función para asignar texto a elemento "GREEN_TEXT"  ;;;;
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
function asignarSecText() {
  Word.run(async (context) => {
    const selection = context.document.getSelection(); // Obtener la selección actual del documento
    selection.load("text, parentBody, parentContentControlOrNullObject");
    await context.sync();

    const textoSeleccionado = selection.text; // Obtener el texto seleccionado y el párrafo que lo contiene

    const greenTextHtml = `<div class="secc_text">${textoSeleccionado}</div>`; // Construir el texto formateado

    selection.delete(); 

   if (!selection.parentContentControlOrNullObject.isNullObject) {
      selection.parentContentControlOrNullObject.insertText(greenTextHtml, "Replace"); // Insertar el texto formateado en lugar del texto seleccionado
    } else {
      const range = selection.getRange("Start");
      range.insertText(greenTextHtml, "Replace");
      range.font.color = "#108F46";
    }
    //selection.delete(); // Eliminar el texto seleccionado
    await context.sync();
  });
}

// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// ;;  Función para asignar texto a elemento "GREEN_TEXT"  ;;;;
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
function asignarGreenText() {
  Word.run(async (context) => {
    const selection = context.document.getSelection(); // Obtener la selección actual del documento
    selection.load("text, parentBody, parentContentControlOrNullObject");
    await context.sync();

    const textoSeleccionado = selection.text; // Obtener el texto seleccionado y el párrafo que lo contiene

    const greenTextHtml = `<div class="green_text"><p>${textoSeleccionado}</p></div>`; // Construir el texto formateado

    selection.delete(); 

   if (!selection.parentContentControlOrNullObject.isNullObject) {
      selection.parentContentControlOrNullObject.insertText(greenTextHtml, "Replace"); // Insertar el texto formateado en lugar del texto seleccionado
    } else {
      const range = selection.getRange("Start");
      range.insertText(greenTextHtml, "Replace");
      range.font.color = "#10C246";
    }
    //selection.delete(); // Eliminar el texto seleccionado
    await context.sync();
  });
}

// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// ;;  Función para asignar texto a elemento "RED_TEXT"  ;;;;
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
function asignarImportantText() {
  Word.run(async (context) => {
    const selection = context.document.getSelection();
    selection.load("text, parentBody, parentContentControlOrNullObject");
    await context.sync();
    const textoSeleccionado = selection.text;
    const redTextHtml = `<div class="secc_important_text"><div class="important_text"><p>${textoSeleccionado}</p><img src="img/red_text.png" style="max-width: 60px;"> </div> </div>`;
    selection.delete(); 

   if (!selection.parentContentControlOrNullObject.isNullObject) {
      selection.parentContentControlOrNullObject.insertText(redTextHtml, "Replace");
    } else {
      const range = selection.getRange("Start");
      range.insertText(redTextHtml, "Replace");
      range.font.color = "#FC4C6B";
    }
    //selection.delete();
    await context.sync();
  });
}

// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// ;;  Función para asignar texto a elemento "RED_TEXT"    ;;;;
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
function titleText() {
  Word.run(async (context) => {
    const selection = context.document.getSelection();
    selection.load("text, parentBody, parentContentControlOrNullObject");
    await context.sync();
    const textoSeleccionado = selection.text;
    const TextHtml = `<div class="titulo_text">
    <img src="img/soporte.png" style="max-width: 60px;"> 
    <h1>${textoSeleccionado}</h1>
  </div>`;

    selection.delete(); 

   if (!selection.parentContentControlOrNullObject.isNullObject) {
      selection.parentContentControlOrNullObject.insertText(TextHtml, "Replace");
    } else {
      const range = selection.getRange("Start");
      range.insertText(TextHtml, "Replace");
      range.font.color = "#FC4C6B";
    }
    //selection.delete();
    await context.sync();
  });
}

// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// ;;  Función para generar el banner    ;;;;
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
function agregarBanner() {
  Word.run(async (context) => {
    const selection = context.document.getSelection();
    selection.load("text, parentBody, parentContentControlOrNullObject");
    await context.sync();
    const textoSeleccionado = selection.text;
    const TextHtml = `<div class="titulo-c"> 
<img src="img/banner.png">
</div> 
<br>`;

    selection.delete(); 

   if (!selection.parentContentControlOrNullObject.isNullObject) {
      selection.parentContentControlOrNullObject.insertText(TextHtml, "Replace");
    } else {
      const range = selection.getRange("Start");
      range.insertText(TextHtml, "Replace");
      range.font.color = "#658026";
    }
    //selection.delete();
    await context.sync();
  });
}

// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// ;;  Función para signar indicador de seccion "ind_sect"    ;;;;
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
function asignarEncuadre() {
  Word.run(async (context) => {
    const selection = context.document.getSelection();
    selection.load("text, parentBody, parentContentControlOrNullObject");
    await context.sync();
    const textoSeleccionado = selection.text;
    const TextHtml = `<div class="ind_sect">${textoSeleccionado}</div> <br>`;

    selection.delete(); 

   if (!selection.parentContentControlOrNullObject.isNullObject) {
      selection.parentContentControlOrNullObject.insertText(TextHtml, "Replace");
    } else {
      const range = selection.getRange("Start");
      range.insertText(TextHtml, "Replace");
      range.font.color = "#00A3B7";
    }
    //selection.delete();
    await context.sync();
  });
}
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// ;;  Función para signar indicador de seccion "ind_sect"    ;;;;
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
function socialMedia() {
  Word.run(async (context) => {
    const selection = context.document.getSelection();
    selection.load("text, parentBody, parentContentControlOrNullObject");
    await context.sync();
    const textoSeleccionado = selection.text;
    const TextHtml = `<div class="social_media">
  
  <div class="icon_fb">
    <a href=""> 
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">  
      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/> 
    </svg>
    </a>
  </div>

  <div class="icon_tw">
    <a href="">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
    </svg>
    </a>
  </div>

  <div class="icon_yt">
    <a href="">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
    </svg>
    </a>  
  </div>

  <div class="icon_web">
    <a href="">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
      <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
    </svg>
    </a>
  </div>
  
</div>`;

    selection.delete(); 

   if (!selection.parentContentControlOrNullObject.isNullObject) {
      selection.parentContentControlOrNullObject.insertText(TextHtml, "Replace");
    } else {
      const range = selection.getRange("Start");
      range.insertText(TextHtml, "Replace");
      range.font.color = "#7eba97";
    }
    //selection.delete();
    await context.sync();
  });
}

// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// ;;  Función para asignar texto a elemento "RED_TEXT"  ;;;;
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
function asignarImportantSeccion() {
  Word.run(async (context) => {
    const selection = context.document.getSelection();
    selection.load("text, parentBody, parentContentControlOrNullObject");
    await context.sync();
    const textoSeleccionado = selection.text;
    const redTextHtml = `<div class="seccion_import" >${textoSeleccionado}</div>`;
    selection.delete(); 

   if (!selection.parentContentControlOrNullObject.isNullObject) {
      selection.parentContentControlOrNullObject.insertText(redTextHtml, "Replace");
    } else {
      const range = selection.getRange("Start");
      range.insertText(redTextHtml, "Replace");
      range.font.color = "#777777";
    }
    //selection.delete();
    await context.sync();
  });
}

// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// ;;  Función para crear hijos en seccion important"  ;;;;
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
function textBold() {
  Word.run(async (context) => {
    const selection = context.document.getSelection();
    selection.load("text, parentBody, parentContentControlOrNullObject");
    await context.sync();
    const textoSeleccionado = selection.text;
    const TextHtml = `<strong style="color: #611a2c;">${textoSeleccionado}</strong> `;

    selection.delete(); 

   if (!selection.parentContentControlOrNullObject.isNullObject) {
      selection.parentContentControlOrNullObject.insertText(TextHtml, "Replace");
    } else {
      const range = selection.getRange("Start");
      range.insertText(TextHtml, "Replace");
      range.font.color = "#000000";
    }
    //selection.delete();
    await context.sync();
  });
}

// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// ;;  TEXTO SUBRAYADO  ;;;;
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
function textSub() {
  Word.run(async (context) => {
    const selection = context.document.getSelection();
    selection.load("text, parentBody, parentContentControlOrNullObject");
    await context.sync();
    const textoSeleccionado = selection.text;
    const TextSub = `<u>${textoSeleccionado} </u> `;

    selection.delete(); 

   if (!selection.parentContentControlOrNullObject.isNullObject) {
      selection.parentContentControlOrNullObject.insertText(TextSub, "Replace");
    } else {
      const range = selection.getRange("Start");
      range.insertText(TextSub, "Replace");
      range.font.color = "#611a2c";
    }
    //selection.delete();
    await context.sync();
  });
}

// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// ;;  Función para crear hijos en seccion important"  ;;;;
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
function asignarImportantSeccionHijo() {
  Word.run(async (context) => {
    const selection = context.document.getSelection();
    selection.load("text, parentBody, parentContentControlOrNullObject");
    await context.sync();
    const textoSeleccionado = selection.text;
    const TextHtml = `<div class="cuestionario_imp">
    <div class="titulo" >${textoSeleccionado}</div>   
    <a href=""> <img src="img/lectura.png" style="max-width: 105px; padding-top: 15px;">  </a>    
  </div>`;

    selection.delete(); 

   if (!selection.parentContentControlOrNullObject.isNullObject) {
      selection.parentContentControlOrNullObject.insertText(TextHtml, "Replace");
    } else {
      const range = selection.getRange("Start");
      range.insertText(TextHtml, "Replace");
      range.font.color = "#000000";
    }
    //selection.delete();
    await context.sync();
  });
}

// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// ;;  Función para Contenido dehijos en act"  ;;;;
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
function agregarbr() {
  Word.run(async (context) => {
    const selection = context.document.getSelection();
    selection.load("text, parentBody, parentContentControlOrNullObject");
    await context.sync();
    const textoSeleccionado = selection.text;
    const brhtml = `<br>`;

    selection.delete(); 

   if (!selection.parentContentControlOrNullObject.isNullObject) {
      selection.parentContentControlOrNullObject.insertText(brhtml, "Replace");
    } else {
      const range = selection.getRange("Start");
      range.insertText(brhtml, "Replace");
      range.font.color = "#E707A7";
    }
    //selection.delete();
    await context.sync();
  });
}

// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// ;;  Función para asignar titulo"  ;;;;
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
function asignarTitulo() {
  Word.run(async (context) => {
    const selection = context.document.getSelection();
    selection.load("text, parentBody, parentContentControlOrNullObject");
    await context.sync();
    const textoSeleccionado = selection.text;
    const redTextHtml = `<div class="titulo"  >${textoSeleccionado}</div>`;
    selection.delete(); 

   if (!selection.parentContentControlOrNullObject.isNullObject) {
      selection.parentContentControlOrNullObject.insertText(redTextHtml, "Replace");
    } else {
      const range = selection.getRange("Start");
      range.insertText(redTextHtml, "Replace");
      range.font.color = "#FC4C6B";
    }
    //selection.delete();
    await context.sync();
  });
}

// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// ;;  Función para crear seccion Actividades"  ;;;;
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
function asignarSeccionAct() {
  Word.run(async (context) => {
    const selection = context.document.getSelection();
    selection.load("text, parentBody, parentContentControlOrNullObject");
    await context.sync();
    const textoSeleccionado = selection.text;
    const TextHtml = `<div class="seccion_act" >${textoSeleccionado}</div><br>`;

    selection.delete(); 

   if (!selection.parentContentControlOrNullObject.isNullObject) {
      selection.parentContentControlOrNullObject.insertText(TextHtml, "Replace");
    } else {
      const range = selection.getRange("Start");
      range.insertText(TextHtml, "Replace");
      range.font.color = "#B457E7";
    }
    //selection.delete();
    await context.sync();
  });
}
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// ;;  Función para titulo en hijos en seccion Actividad"  ;;;;
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
function asignarSeccionActHijo() {
  Word.run(async (context) => {
    const selection = context.document.getSelection();
    selection.load("text, parentBody, parentContentControlOrNullObject");
    await context.sync();
    const textoSeleccionado = selection.text;
    const TextHtml = `<div class="sec_1">
    ${textoSeleccionado}</div>`;

    selection.delete(); 

   if (!selection.parentContentControlOrNullObject.isNullObject) {
      selection.parentContentControlOrNullObject.insertText(TextHtml, "Replace");
    } else {
      const range = selection.getRange("Start");
      range.insertText(TextHtml, "Replace");
      range.font.color = "#B4572B";
    }
    //selection.delete();
    await context.sync();
  });
}
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// ;;  Función para titulo en hijos en seccion Actividad"  ;;;;
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
function asignarSeccionActHijoTitulo() {
  Word.run(async (context) => {
    const selection = context.document.getSelection();
    selection.load("text, parentBody, parentContentControlOrNullObject");
    await context.sync();
    const textoSeleccionado = selection.text;
    const TextHtml = `<div class="titulo-act" >${textoSeleccionado}</div> 
    <center>
    <a href=""> <img src="img/sesion.png" style="max-width: 120px; padding-top: 10px;"> </a>  
    </center> <br>`;

    selection.delete(); 

   if (!selection.parentContentControlOrNullObject.isNullObject) {
      selection.parentContentControlOrNullObject.insertText(TextHtml, "Replace");
    } else {
      const range = selection.getRange("Start");
      range.insertText(TextHtml, "Replace");
      range.font.color = "#B457E7";
    }
    //selection.delete();
    await context.sync();
  });
}
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// ;;  Función para Contenido dehijos en act"  ;;;;
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
function textoNormal() {
  Word.run(async (context) => {
    const selection = context.document.getSelection();
    selection.load("text, parentBody, parentContentControlOrNullObject");
    await context.sync();
    const textoSeleccionado = selection.text;
    const TextHtml = `<p>${textoSeleccionado}</p>`;

    selection.delete(); 

   if (!selection.parentContentControlOrNullObject.isNullObject) {
      selection.parentContentControlOrNullObject.insertText(TextHtml, "Replace");
    } else {
      const range = selection.getRange("Start");
      range.insertText(TextHtml, "Replace");
      range.font.color = "#E707A7";
    }
    //selection.delete();
    await context.sync();
  });
}
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// ;;  Función para Contenido dehijos en act"  ;;;;
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
function textoCenter() {
  Word.run(async (context) => {
    const selection = context.document.getSelection();
    selection.load("text, parentBody, parentContentControlOrNullObject");
    await context.sync();
    const textoSeleccionado = selection.text;
    const TextHtml = `<center>${textoSeleccionado}</center>`;

    selection.delete(); 

   if (!selection.parentContentControlOrNullObject.isNullObject) {
      selection.parentContentControlOrNullObject.insertText(TextHtml, "Replace");
    } else {
      const range = selection.getRange("Start");
      range.insertText(TextHtml, "Replace");
      range.font.color = "#E70707";
    }
    //selection.delete();
    await context.sync();
  });
}
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// ;;  Función para crear caja que contiene los botones de Tab Navigation"  ;;;;
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
function crearCajaDeTabs() {
  Word.run(async (context) => {
    const selection = context.document.getSelection();
    selection.load("text, parentBody, parentContentControlOrNullObject");
    await context.sync();
    const textoSeleccionado = selection.text;
    const TextHtml = `<div class="tabs" id="myTabs">${textoSeleccionado}</div>`;

    selection.delete(); 

   if (!selection.parentContentControlOrNullObject.isNullObject) {
      selection.parentContentControlOrNullObject.insertText(TextHtml, "Replace");
    } else {
      const range = selection.getRange("Start");
      range.insertText(TextHtml, "Replace");
      range.font.color = "#0607A7";
    }
    //selection.delete();
    await context.sync();
  });
}
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// ;;  Función para crear botones del tab Navigation"  ;;;;
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
function crearBtnDeTabs() {
  Word.run(async (context) => {
    const selection = context.document.getSelection();
    selection.load("text, parentBody, parentContentControlOrNullObject");
    await context.sync();
    const textoSeleccionado = selection.text;
    const TextHtml = ` <div class="tab-button" onclick="showTab(event)" >${textoSeleccionado}</div>`;

    selection.delete(); 

   if (!selection.parentContentControlOrNullObject.isNullObject) {
      selection.parentContentControlOrNullObject.insertText(TextHtml, "Replace");
    } else {
      const range = selection.getRange("Start");
      range.insertText(TextHtml, "Replace");
      range.font.color = "#1C0BA7";
    }
    //selection.delete();
    await context.sync();
  });
}
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// ;;  Función para crear caaja que contiene cada contenido del tab Navigation"  ;;;;
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
function crearCajaDeContents() {
  Word.run(async (context) => {
    const selection = context.document.getSelection();
    selection.load("text, parentBody, parentContentControlOrNullObject");
    await context.sync();
    const textoSeleccionado = selection.text;
    const TextHtml = `<div class="tab-wrapper_act">${textoSeleccionado}</div><br>`;

    selection.delete(); 

   if (!selection.parentContentControlOrNullObject.isNullObject) {
      selection.parentContentControlOrNullObject.insertText(TextHtml, "Replace");
    } else {
      const range = selection.getRange("Start");
      range.insertText(TextHtml, "Replace");
      range.font.color = "#1C88A7";
    }
    //selection.delete();
    await context.sync();
  });
}
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// ;;  Función para crear Boton PRE"  ;;;;
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
function crearBtnPre() {
  Word.run(async (context) => {
    const selection = context.document.getSelection();
    selection.load("text, parentBody, parentContentControlOrNullObject");
    await context.sync();
    const textoSeleccionado = selection.text;
    const TextHtml = `<button class="pre" onclick="showPreviousTab()"> &lt;</button>`;

    selection.delete(); 

   if (!selection.parentContentControlOrNullObject.isNullObject) {
      selection.parentContentControlOrNullObject.insertText(TextHtml, "Replace");
    } else {
      const range = selection.getRange("Start");
      range.insertText(TextHtml, "Replace");
      range.font.color = "#800BA7";
    }
    //selection.delete();
    await context.sync();
  });
}
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// ;;  Función para crear Boton NEXT"  ;;;;
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
function crearBtnNext() {
  Word.run(async (context) => {
    const selection = context.document.getSelection();
    selection.load("text, parentBody, parentContentControlOrNullObject");
    await context.sync();
    const textoSeleccionado = selection.text;
    const TextHtml = `<button class="next" onclick="showNextTab()"> &gt; </button>`;

    selection.delete(); 

   if (!selection.parentContentControlOrNullObject.isNullObject) {
      selection.parentContentControlOrNullObject.insertText(TextHtml, "Replace");
    } else {
      const range = selection.getRange("Start");
      range.insertText(TextHtml, "Replace");
      range.font.color = "#FFB800";
    }
    //selection.delete();
    await context.sync();
  });
}
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// ;;  Función para crear caaja que contiene cada contenido del tab Navigation"  ;;;;
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
function crearContent() {
  Word.run(async (context) => {
    const selection = context.document.getSelection();
    selection.load("text, parentBody, parentContentControlOrNullObject");
    await context.sync();
    const textoSeleccionado = selection.text;
    const TextHtml = `<div class="tab-content" style="display: none;">${textoSeleccionado} <center>
        <a href="your_activity_link" target="_blank">
            <img src="img/act.png"  alt="Activity" style="max-width: 220px;">
        </a>
    </center>
    
    </div>`;

    selection.delete(); 

   if (!selection.parentContentControlOrNullObject.isNullObject) {
      selection.parentContentControlOrNullObject.insertText(TextHtml, "Replace");
    } else {
      const range = selection.getRange("Start");
      range.insertText(TextHtml, "Replace");
      range.font.color = "#C3ACF2";
    }
    //selection.delete();
    await context.sync();
  });
}
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// ;;  Función para crear caaja que contiene la cja de las tablas del temario"  ;;;;
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
function crearCajaTemario() {
  Word.run(async (context) => {
    const selection = context.document.getSelection();
    selection.load("text, parentBody, parentContentControlOrNullObject");
    await context.sync();
    const textoSeleccionado = selection.text;
    const TextHtml = `<div class="temario">${textoSeleccionado}</div><br />`;

    selection.delete(); 

   if (!selection.parentContentControlOrNullObject.isNullObject) {
      selection.parentContentControlOrNullObject.insertText(TextHtml, "Replace");
    } else {
      const range = selection.getRange("Start");
      range.insertText(TextHtml, "Replace");
      range.font.color = "#A2ACB2";
    }
    //selection.delete();
    await context.sync();
  });
}
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// ;;  Función para crear el contenedor de las tablas del temario"  ;;;;
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
function crearCajaTablaTemario() {
  Word.run(async (context) => {
    const selection = context.document.getSelection();
    selection.load("text, parentBody, parentContentControlOrNullObject");
    await context.sync();
    const textoSeleccionado = selection.text;
    const TextHtml = `<div class="container_temario">${textoSeleccionado}</div>`;

    selection.delete(); 

   if (!selection.parentContentControlOrNullObject.isNullObject) {
      selection.parentContentControlOrNullObject.insertText(TextHtml, "Replace");
    } else {
      const range = selection.getRange("Start");
      range.insertText(TextHtml, "Replace");
      range.font.color = "#FF00CB";
    }
    //selection.delete();
    await context.sync();
  });
}
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// ;;  Función para crear el div que contiene la tabla"  ;;;;
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
function crearTablaTemario() {
  Word.run(async (context) => {
    const selection = context.document.getSelection();
    selection.load("text, parentBody, parentContentControlOrNullObject");
    await context.sync();
    const textoSeleccionado = selection.text;
    const TextHtml = ` <div class="table hidden">
            <table>${textoSeleccionado}</table>
          </div>`;

    selection.delete(); 

   if (!selection.parentContentControlOrNullObject.isNullObject) {
      selection.parentContentControlOrNullObject.insertText(TextHtml, "Replace");
    } else {
      const range = selection.getRange("Start");
      range.insertText(TextHtml, "Replace");
      range.font.color = "#800000";
    }
    //selection.delete();
    await context.sync();
  });
}
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// ;;  Función para crear el tr"  ;;;;
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
function crearTR() {
  Word.run(async (context) => {
    const selection = context.document.getSelection();
    selection.load("text, parentBody, parentContentControlOrNullObject");
    await context.sync();
    const textoSeleccionado = selection.text;
    const TextHtml = `<tr>${textoSeleccionado}</tr>`;

    selection.delete(); 

   if (!selection.parentContentControlOrNullObject.isNullObject) {
      selection.parentContentControlOrNullObject.insertText(TextHtml, "Replace");
    } else {
      const range = selection.getRange("Start");
      range.insertText(TextHtml, "Replace");
      range.font.color = "#123431";
    }
    //selection.delete();
    await context.sync();
  });
}
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// ;;  Función para crear el th"  ;;;;
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
function crearTH() {
  Word.run(async (context) => {
    const selection = context.document.getSelection();
    selection.load("text, parentBody, parentContentControlOrNullObject");
    await context.sync();
    const textoSeleccionado = selection.text;
    const TextHtml = `<th>${textoSeleccionado}</th>`;

    selection.delete(); 

   if (!selection.parentContentControlOrNullObject.isNullObject) {
      selection.parentContentControlOrNullObject.insertText(TextHtml, "Replace");
    } else {
      const range = selection.getRange("Start");
      range.insertText(TextHtml, "Replace");
      range.font.color = "#ABCDEF";
    }
    //selection.delete();
    await context.sync();
  });
}
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// ;;  Función para crear el th"  ;;;;
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
function crearTD() {
  Word.run(async (context) => {
    const selection = context.document.getSelection();
    selection.load("text, parentBody, parentContentControlOrNullObject");
    await context.sync();
    const textoSeleccionado = selection.text;
    const TextHtml = `<td>${textoSeleccionado}</td>`;

    selection.delete(); 

   if (!selection.parentContentControlOrNullObject.isNullObject) {
      selection.parentContentControlOrNullObject.insertText(TextHtml, "Replace");
    } else {
      const range = selection.getRange("Start");
      range.insertText(TextHtml, "Replace");
      range.font.color = "#654321";
    }
    //selection.delete();
    await context.sync();
  });
}
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// ;;  Funcion para asignar el nombre del asesor de la semblanza"  ;;;;
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
function asingarNombreSemblanza() {
  Word.run(async (context) => {
    const selection = context.document.getSelection();
    selection.load("text, parentBody, parentContentControlOrNullObject");
    await context.sync();
    const textoSeleccionado = selection.text;
    const TextHtml = `<div class="semblanzas">
  
  <div class="nombre_asesor">${textoSeleccionado}</div> <br>`;

    selection.delete(); 

   if (!selection.parentContentControlOrNullObject.isNullObject) {
      selection.parentContentControlOrNullObject.insertText(TextHtml, "Replace");
    } else {
      const range = selection.getRange("Start");
      range.insertText(TextHtml, "Replace");
      range.font.color = "#CC6600";
    }
    //selection.delete();
    await context.sync();
  });
}
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// ;;  Funcion para asignar el nombre del asesor de la semblanza"  ;;;;
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
function asingarContenidoSemblanza() {
  Word.run(async (context) => {
    const selection = context.document.getSelection();
    selection.load("text, parentBody, parentContentControlOrNullObject");
    await context.sync();
    const textoSeleccionado = selection.text;
    const TextHtml = `<div class="row" style="align-items: center; justify-content: left; margin-right: 0px; margin-left: 0px;">  <div class="col-xs-6 col-md-4" >
          <center>  <img  src="img/ex.png">   </center>
      </div>
      <div class="col-xs-12 col-md-8" style="text-align: justify;">
      <p>${textoSeleccionado}</p>
      </div>
    </div>
</div><br>`;

    selection.delete(); 

   if (!selection.parentContentControlOrNullObject.isNullObject) {
      selection.parentContentControlOrNullObject.insertText(TextHtml, "Replace");
    } else {
      const range = selection.getRange("Start");
      range.insertText(TextHtml, "Replace");
      range.font.color = "#0066FF";
    }
    //selection.delete();
    await context.sync();
  });
}
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// ;;  Funcion para crear el div que va a tener un texto con su concepto y definicion"  ;;;;
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
function asignarTextHover() {
  Word.run(async (context) => {
    const selection = context.document.getSelection();
    selection.load("text, parentBody, parentContentControlOrNullObject");
    await context.sync();
    const textoSeleccionado = selection.text;
    const TextHtml = `<div class="hover-container">${textoSeleccionado}</div><br/>`;

    selection.delete(); 

   if (!selection.parentContentControlOrNullObject.isNullObject) {
      selection.parentContentControlOrNullObject.insertText(TextHtml, "Replace");
    } else {
      const range = selection.getRange("Start");
      range.insertText(TextHtml, "Replace");
      range.font.color = "#33CCFF";
    }
    //selection.delete();
    await context.sync();
  });
}
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// ;;  Funcion para crear la palabra Concepto en Glosario"  ;;;;
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
function asignarConcepto() {
  Word.run(async (context) => {
    const selection = context.document.getSelection();
    selection.load("text, parentBody, parentContentControlOrNullObject");
    await context.sync();
    const textoSeleccionado = selection.text;
    const TextHtml = `<button class="glosario"> 
    <svg xmlns="https://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>    </svg>${textoSeleccionado}</button>`;

    selection.delete(); 

   if (!selection.parentContentControlOrNullObject.isNullObject) {
      selection.parentContentControlOrNullObject.insertText(TextHtml, "Replace");
    } else {
      const range = selection.getRange("Start");
      range.insertText(TextHtml, "Replace");
      range.font.color = "#FF6699";
    }
    //selection.delete();
    await context.sync();
  });
}
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// ;;  Funcion para asignar la defincion"  ;;;;
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
function asignarDef() {
  Word.run(async (context) => {
    const selection = context.document.getSelection();
    selection.load("text, parentBody, parentContentControlOrNullObject");
    await context.sync();
    const textoSeleccionado = selection.text;
    const TextHtml = `<div class="hover-text">${textoSeleccionado}</div>`;

    selection.delete(); 

   if (!selection.parentContentControlOrNullObject.isNullObject) {
      selection.parentContentControlOrNullObject.insertText(TextHtml, "Replace");
    } else {
      const range = selection.getRange("Start");
      range.insertText(TextHtml, "Replace");
      range.font.color = "#66FF66";
    }
    //selection.delete();
    await context.sync();
  });
}
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// ;;  Funcion para asignar la defincion"  ;;;;
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
function tabla2() {
  Word.run(async (context) => {
    const selection = context.document.getSelection();
    selection.load("text, parentBody, parentContentControlOrNullObject");
    await context.sync();
    const textoSeleccionado = selection.text;
    const TextHtml = `<div class="tablas">
   <div class="container_tablas">
          <div class="table">
            <table>${textoSeleccionado}</table>
          </div></div></div><br>`;

    selection.delete(); 

   if (!selection.parentContentControlOrNullObject.isNullObject) {
      selection.parentContentControlOrNullObject.insertText(TextHtml, "Replace");
    } else {
      const range = selection.getRange("Start");
      range.insertText(TextHtml, "Replace");
      range.font.color = "#7030A0";
    }
    //selection.delete();
    await context.sync();
  });
}
