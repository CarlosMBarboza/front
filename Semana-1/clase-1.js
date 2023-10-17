/* -------------------------------------------------------------------------- */
/*                                  FUNCION 1                                 */
/* -------------------------------------------------------------------------- */
function iniciarJuego() {
alert("Hola como va todo 'Bien vewnidos ' ")
let nombre = prompt("Ingresa tu nombre ")
//let saludoconfirmacion = confirm("Hola como va todo 'Bien vewnidos ' ");
alert('gracias por jugar ' + nombre + ' con nosotros  Suerte')
//console.log(saludoconfirmacion); // Salida: Hola como va todo 'Bien vewnidos'
return nombre;
}


// creamos una variable a nivel global para guardar el nombre del jugador que nos devuelve la función
iniciarJuego();
//const nombreJugador = iniciarJuego();




/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Modificar la funcion de iniciarJuego(), validar si ingresa un dato válido como nombre.
// 2- Si no ingresa un texto, o tiene menos de 3 caracteres debemos volverle a pedir que lo ingrese.
// 3- Finalmente el nombre devuelto debe estar todo en mayúsculas.

function iniciarJuego() {
let ok = true;
    alert( "Bienvenido al el popular juego de piedra, papel o tijera de Frontend 2");



let nombre;
let soloLetras
    do {
    nombre = prompt("Ingrese su nombre:");
    nombre = nombre.trim().toUpperCase();
    soloLetras = /^[a-zA-Z]+$/;

    if (nombre.length < 3 || !soloLetras.test(nombre)) {
        alert("Nombre incorrecto");
    }
} while (nombre.length < 3 || nombre.length == 0 || !soloLetras.test(nombre));
    alert(`Gracias por jugar nombre ${nombre}. ¡Mucha suerte!`);


console.log("------------------------------");
console.log("El jugador es: ");
console.log(nombre);
console.log("------------------------------");

  return nombre;
}
