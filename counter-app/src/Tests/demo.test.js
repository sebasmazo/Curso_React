//Primera prueba
describe('Pruebas en el archivo demo.test.js', () => {  //Organiza mas las pruebas con un nombre agrupador
    test('Deben de ser iguales los strings', () => {
        //1. Inicializacion
        const Mensaje1 = 'Hola mundo';

        //2. Estimulo
        const Mensaje2 = `Hola mundo`;

        //3. Observar comportamiento
        expect(Mensaje1).toBe(Mensaje2);
    })
})


