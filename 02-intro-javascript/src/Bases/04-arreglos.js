const arreglo = [1,2,3,4]; //Forma recomendada
let arreglo2 = [...arreglo, 5]//Insertar arreglos a otro arreglo 
const arreglo3 = arreglo2.map(function(x){
    return x*x;
}); //Realiza la función deseada con arreglo 2 y guarda el resultado en arreglo 3

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);