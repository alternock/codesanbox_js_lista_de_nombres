var input = require('prompt-sync')();
var colors = require('colors');
//
const BANNER = "=".repeat(40);
let log = console.log;
//mensajes
let msjIngresarNombre = "🔸 dime tu nombre: ".toUpperCase();
let msjMostrarNombre = "🔸 el nombre ingresado es:".toUpperCase();
let msjMostrarListaDeNombres = "🔸 lista de nombres:".toUpperCase();
let msjNombreExiste = "🔸 el nombre ingresado esta en la lista:".toUpperCase();
let msjTotalDeNombres = "--- total de nombres:".toUpperCase();
//
let listaDeNombres = ["foo", "bar", "baz", "thud", "octo"];
let pos = 0;
let limit = listaDeNombres.length - 1;
let existe = false;

//ingresar el nombre
log(BANNER)
var nombre = input(msjIngresarNombre.bold);
log("\b")

//mostrar la lista
log(msjMostrarListaDeNombres.bold)
for (; pos <= limit; pos++) {
    if (nombre == listaDeNombres[pos]) {
        existe = true;
        log(pos + 1, "-","(",listaDeNombres[pos].toUpperCase().bgGreen.bold.green,")","✔️")
    } else {
        log(pos + 1, "-", listaDeNombres[pos])
    }
}
log(msjTotalDeNombres.bold, listaDeNombres.length);
log("\b")

//mostrar el nombre
log(msjMostrarNombre.bold, nombre.toLowerCase())
if (existe) {
    log(msjNombreExiste.bold, "existe ✔️".bold.green);
} else {
    log(msjNombreExiste.bold, "no existe ✖️".bold.red);
}
log(BANNER)