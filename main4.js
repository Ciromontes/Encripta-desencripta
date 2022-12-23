var encriptarBtn = document.getElementById("encriptar");
var desencriptarBtn = document.getElementById("desencriptar");
var palabraInput = document.getElementById("palabra");
var resultadoInput = document.getElementById("resultado");

encriptarBtn.addEventListener("click", function() {
  var palabra = palabraInput.value;
  var resultado = encriptar(palabra);
  resultadoInput.value = resultado;
});

desencriptarBtn.addEventListener("click", function() {
  var palabra = palabraInput.value;
  var resultado = desencriptar(palabra);
  resultadoInput.value = resultado;
});

// Función para manejar el evento de clic en cualquiera de los botones
function manejarClickBoton(event) {
  var palabra = palabraInput.value;
  var resultado;

    // Borrar el contenido de la barra de resultado
  resultadoInput.value = "";

  // Determinar si se debe encriptar o desencriptar
  if (event.target === encriptarBtn) {
    resultado = encriptar(palabra);
  } else {
    resultado = desencriptar(palabra);
  }

  resultadoInput.value = resultado;
}
 


//boton copiar

var copiarBtn = document.getElementById("copiar");
var resultadoInput = document.getElementById("resultado");

copiarBtn.addEventListener("click", function() {
  navigator.clipboard.writeText(resultadoInput.value).then(function() {
    // El contenido ha sido copiado al portapapeles
  }, function(error) {
    console.error("Error al copiar al portapapeles: ", error);
  });
});




//funcion decorariva de botones

document.getElementById("encriptar").addEventListener("click", reproducirAudio);
document.getElementById("desencriptar").addEventListener("click", reproducirAudio);
function reproducirAudio() {
  document.getElementById("miAudio").play();
}
document.getElementById("encriptar").addEventListener("click", moverArriba);
document.getElementById("desencriptar").addEventListener("click", moverArriba);

function moverArriba() {
  this.classList.add("moverArriba");
  setTimeout(() => {
    this.classList.remove("moverArriba");
  }, 200);
}

//codigo que encripta y desencripta palabras
function encriptar(palabra) {
  var resultado = "";
  for (var i = 0; i < palabra.length; i++) {
    switch (palabra[i]) {
      case "e":
        resultado += "enter";
        break;
      case "i":
        resultado += "imes";
        break;
      case "a":
        resultado += "ai";
        break;
      case "o":
        resultado += "ober";
        break;
      case "u":
        resultado += "ufat";
        break;
      default:
        resultado += palabra[i];
    }
  }
  return resultado;
}


function desencriptar(palabra) {
  return palabra.replace(/enter|imes|ai|ober|ufat/g, function(match) {
    switch (match) {
      case "enter":
        return "e";
      case "imes":
        return "i";
      case "ai":
        return "a";
      case "ober":
        return "o";
      case "ufat":
        return "u";
    }
  });
}



