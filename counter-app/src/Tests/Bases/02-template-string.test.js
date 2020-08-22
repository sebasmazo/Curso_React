const { getSaludo } = require("../../Bases/02-template-string");
import '@testing-library/jest-dom';


describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo debe retornar Hola, + nombre', () => {
        const nombre = 'Sebastian';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola, ' + nombre);
    })   
    test('getSaludo debe retornar Hola, Carlos si no hay argumento', () => {
        const saludo2 = getSaludo();
        expect(saludo2).toBe('Hola, Carlos');
    })
    
})
