const getUsuarioActivo = (nombre) => ({
    
        uid: 'ABC567',
        username: nombre
    
});

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);