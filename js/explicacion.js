/* tipos de datos
 - cadenas de texto (String)
 - numericos (Number) -> (Integer, Float, Real)
 - Booleanos (true, false)
 - Arreglos
 - Objetos
 - Funciones
*/

// String
var nombre = "Juan";
// Number
var edad = 30;
// Boolean
var esMayor = true;
// Array
var colores = ["rojo", "verde", "azul"];
// Object
var persona = {
  nombre: "Juan",
  edad: 30,
  esMayor: true,
  colores: ["rojo", "verde", "azul"]
};

/* Tipos de operadores
 - Asignacion (=) 
 - Matematicos o Aritmeticos (+, -, *, /, %)  dividendo |____divisor   4/2 == 2  3%2 == 1
                                                resto     resultado
 - Auto Incremento y Auto Decremento (++ y --)
 - Operadores logicos (Negacion, and(y) &&, or(o) ||)
 - Operadores de comparacion (>, <, ==, !=, >=, <=)
*/
var numero1 = 15;
var numero2 = 25;

var resta = numero2 - numero1;
document.write("<p>La resta es: " + resta + "</p>");
var mult = numero1 * numero2;
document.write("<p>La mult es: " + mult + "</p>");
var div = numero2 / numero1;
document.write("<p>La div es: " + div + "</p>");
var resto = numero2 % numero1;
document.write("<p>La resto de div es: " + resto + "</p>");


// Autoincremento y decremento
var like = 10;
like = like + 1; // like++;
like = like - 1; // like--;


// Operadores logicos
var esMayor = false;
var tienePermiso = false;
var esMayorYtienePermiso = esMayor && tienePermiso;
document.write("<p>Resultado del and: " + esMayorYtienePermiso + "</p>");
var esMayorOtienePermiso = esMayor || tienePermiso;
document.write("<p>Resultado del o: " + esMayorOtienePermiso + "</p>");
document.write("<p>La negacion de es Mayor: " + !esMayor + "</p>");


// Comparacion
var resultado = numero1 > numero2;
resultado = numero1 < numero2;
resultado = numero1 == numero2;
resultado = numero1 != numero2;

document.write("<p>Resultado de la comparacion: " + resultado + "</p>");


// Condicionales
if (numero1 < numero2) {
  console.log(numero1 + " es menor que " + numero2);
} else {
  console.log(numero1 + " es mayor que " + numero2);
}
