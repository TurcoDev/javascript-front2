function agregarCirculo(){
  var contenedor = document.getElementById("contenedor");

  var texto = prompt("Ingrese el texto del circulo");

  // contenedor.innerHTML = contenedor.innerHTML + "<div class='circulo'>" + texto + "</div>";
  if(texto != "cuadrado"){
    contenedor.innerHTML += `<div class='cuadro circulo'>${texto}</div>`;
  } else {
    contenedor.innerHTML += `<div class='cuadro'>${texto}</div>`;
  }
}



function agregarCirculos(){
  var cantidadString = prompt("Ingrese la cantidad de circulos a agregar");
  cantidad = parseInt(cantidadString);
  var contenedor = document.getElementById("contenedor");

  for(var i = 1; i <= cantidad; i++){
    contenedor.innerHTML += `<div class='cuadro circulo'>${i}</div>`;
  }
}