//Crear objeto
const persona = {
    nombre: 'Sebastián',
    apellido: 'Mazo Vélez',
    edad: 18,
    direccion: {
        ciudad: 'Medellin',
        zip: 553525,
        lat: 14.32,
        long: 34.8,
    }
} 


const persona_copia = {
    ...persona
}
persona_copia.nombre = 'Alejandro';
console.log(persona_copia);
console.log(persona);