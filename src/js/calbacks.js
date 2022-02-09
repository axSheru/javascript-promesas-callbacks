import { heroesDB } from './heroesDB';

export const buscarHeroe = ( id, callback ) => {

    const heroe = heroesDB[ id ];

    if ( heroe ) {
        callback( null, heroe );
    } else {
        callback( `No existe un héroe con el ID ${ id }` );
    }


};

