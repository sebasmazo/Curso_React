const personajes = ['Goku', 'Vegeta', 'Freezer'];
export const retornaArreglo = () =>{
    return ['ABC',123]; 
};
const [letras, numeros] = retornaArreglo(); //Guarda ABC en letras y 123 en numeros
const useState = ( valor ) =>{
    return [valor, () =>{console.log('Hola mundo')}];
}
const arr = useState( 'Goku' ); //Devuelve un array con Goku en pos 0  y una función en pos 1

//Para llamar la función dentro del arreglo se hace de la siguiente manera
arr[1]();

const [nombre, setNombre] = useState('Goku');
setNombre();