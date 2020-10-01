const { getUser, getUsuarioActivo } = require("../../Bases/05-funciones");
import '@testing-library/jest-dom';
describe('Pruebas en 05-Funciones', () => {
    test('Debe retornar un objeto ', () => {
        const usuario = getUser(); 
        const usuarioEjemplo = {
            uid: 'AAA213',
            username: 'Sebasmazo'
        }
        
        expect( usuario ).toEqual( usuarioEjemplo );
    })
    
    test('getUsuarioActivo debe retornar un objeto ', (nombre = 'Fernando') => {
        const getUsuarioActivoEjemplo = {
            uid: 'ABC567',
            username: 'Fernando'
        };
        const getUsuarioActivo1 = getUsuarioActivo(nombre);
        expect( getUsuarioActivo1 ).toEqual(getUsuarioActivoEjemplo);
    })
    
    
})
