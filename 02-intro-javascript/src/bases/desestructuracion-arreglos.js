


// const personajes = ['Goku', 'Vegeta', 'Trunks'];

// const [ , , p3 ] = personajes;

// console.log ( p3 );

// const retornaArreglo = () => {
//     return ['ABC', 123 ];
// }

// const [ , p1 ] = retornaArreglo();
// console.log( p1 );


const useState = ( valor ) => {
    return [ valor, () => { console.log( 'Hola Mundo' )}];
} 

const [ nombre, setNombre ] = useState('Goku');

console.log( nombre );
setNombre();
