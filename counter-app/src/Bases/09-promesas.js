import { getHeroById, getHeroByOwner } from './Bases/08-import-export'


const promesa = new Promise((resolve, reject)=>{
    setTimeout( ( )  => {
        //resolve();
        const heroe = getHeroById(1);
        if (heroe === undefined) {
            reject('No se encontró el heroe');
        }
        else {
            resolve(heroe);
        }
        
    }, 2000)
})  //Crear una promesa
promesa.then( ( heroe ) =>{   //Cuando se ejecuta el resolve en la promesa, se ejecuta el then
    console.log('heroe', heroe);
})
promesa.catch( err => console.warn(err));


//Para mandarle argumentos a una promesa:
const getHeroByIdAsync = ( id ) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve();
            const heroe = getHeroById(id);
            if (heroe === undefined) {
                reject('No se encontró el heroe');
            }
            else {
                console.log(heroe);
                resolve(heroe);
            }
            
            //reject('No se pudo encontrar un heroe'); se ejecuta cuando no se resuelve la promesa
        }, 2000)
    })  //Crear una promesa
}

getHeroByIdAsync(9).then(console.log)
.catch( console.warn); //El catch imprime el argumento que recibe

