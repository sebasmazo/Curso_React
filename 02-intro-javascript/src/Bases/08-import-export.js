import { heroes } from './Data/heroes' //Import trae el archivo que desees, el nombre entre los corchetes es el nombre como se llamará al import

console.log( heroes );

const getHeroByOwner = (owner) => {
    return heroes.filter(heroe => heroe.owner === owner); //Busca en el array un heroe por su id 
}

console.log(getHeroByOwner('DC'));