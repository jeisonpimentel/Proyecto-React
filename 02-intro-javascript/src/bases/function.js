const getUser = () => ({
    id: 12345,
    username: 'Jeison'
});

console.log( getUser() );

const getUsuarioActivo = ( nombre ) =>  
    ({
      id: 1234,
      username: 'Hola mundo'  
    });

 
const usuarioActivo = getUsuarioActivo('Fernando');

