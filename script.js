let edad = Number ( prompt ("Ingresa tu edad"))
let nombre = prompt ( "ingresa tu nombre")

if (edad > 30) {
    alert (nombre + " ya eres viejo");
} else if (edad <= 30 && edad > 20) {
    alert (nombre + " te estas haciendo viejo");
} else if (edad <= 20){
    alert (nombre + " estas muy joven");
}
