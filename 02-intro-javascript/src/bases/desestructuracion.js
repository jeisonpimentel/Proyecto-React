const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};


// const { nombre } = persona;
// const { nombre : nombre2 } = persona;
// const { nombre, edad, clave } = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );

const useContext = ( { edad, clave } ) => {

    return {
        edadAvenger = edad,
        nombreClave = clave
    }
}

const { nombreClave, edadAvenger } = useContext( persona );

console.log( nombreClave, edadAvenger );


