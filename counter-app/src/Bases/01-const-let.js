//Variables y Constantes
const   nombre = 'Sebastián';   //Variables que no se van a renombrar 
const apellido = 'Mazo Vélez';    

let valorDado = 5; //Variable que se va a estar renombrando

valorDado = 4;  //Cambiar valor variable let

console.log(nombre,apellido,valorDado); //Imprimir variables por consola

if(true){
    const nombre = 'Andrés' //Esta variable/valor solo existe dentro del condicional 
    let valorDado = 6; //Esta variable/valor solo existe dentro del condicional 
    console.log(valorDado);
}