const persona = {
    nombre: 'Sebastian',
    edad: 18,
    clave: 'MazoVelez28'
}
const useContext = ({ nombre, edad }) => { //El parametro extrae el atributo que le interesa del objeto
    return {
        nombre: nombre,
        años: edad,
        lat_lng: {
            lat: 14.12,
            lng: -12.3232
        }
    }
}
const {lat_lng:{lat,lng}} = useContext( persona ); //Extraer variables de un objeto dentro de un objeto
console.log({lat,lng});