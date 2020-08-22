//Este código no compila, son distintos ejemplos de cómo usar condicionales ternarios


const activo = true;
let mensaje = '';

if (activo){
    mensaje = 'Activo';
}else{
    mensaje = 'Inactivo';
}
//Con operador condicional ternario:
const mensaje2 = (!activo) ? 'Activo' : 'Inactivo';

const mensaje3 = activo && 'Activo';

