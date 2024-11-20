// saludar();

function cargarParrafo() {
  // document.getElementById('parrafo').innerHTML = "Texto del parrafo cargado por le boton"
  var parrafo1 = document.getElementById('parrafo');
  parrafo1.innerHTML = "Texto del parrafo cargado por el boton";
  parrafo1.style.backgroundColor = "blue";
  parrafo1.style.color = "#fff";
  console.log(parrafo1);
}

function eliminarParrafo() {
  var parrafo2 = document.getElementById('parrafo');
  parrafo2.style.display = "none";
}

function mostrarParrafo() {
  var parrafo2 = document.getElementById('parrafo');
  parrafo2.style.display = "block";
}

function pintarFondo() {
  var colorIngresado = prompt("Ingrese un color");
  if (colorIngresado != 'esperanza') {
    document.body.style.backgroundColor = colorIngresado;
  } else{
    document.body.style.backgroundColor = "rgb(255, 174, 43)"
  }
}