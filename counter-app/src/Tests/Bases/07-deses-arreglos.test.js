import { retornaArreglo } from '../../Bases/07-deses-arreglos';
import '@testing-library/jest-dom';
describe('Pruebas en 07-arr', () => {
    test('Debe retornar un string y un num ', () => {
        const array = retornaArreglo();
        expect(array).toEqual( ['ABC', 123]);
    })
    
})
