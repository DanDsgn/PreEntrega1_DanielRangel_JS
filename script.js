let edad = Number ( prompt ("Ingresa tu edad"))
let nombre = prompt ( "ingresa tu nombre")

if (edad > 30) {
    console.log(nombre + " ya eres viejo");
} else if (edad <= 30 && edad > 20) {
    console.log(nombre + " te estas haciendo viejo");
} else if (edad <= 20){
    console.log(nombre + " estas muy joven");
}
