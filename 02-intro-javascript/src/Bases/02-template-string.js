//Template strings
const nombre = 'Sebastián';
const apellido = 'Mazo Vélez';

const nombreCompleto = nombre + ' ' + apellido; //Concatenar sin template strings
const nombreCompleto1 = `${nombre} ${apellido} `; //Concatenar con template string, dentro de los corchetes es código JavaScript

function getSaludo(nombre) {
    return 'Hola, ' + nombre;
}
console.log(`Este es un texto: ${getSaludo(nombreCompleto1)}`);
