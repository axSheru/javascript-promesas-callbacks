import { heroesDB } from './heroesDB';

export const buscarHeroe = ( id ) => {

    const heroe = heroesDB[ id ];

    return new Promise( ( resolve, reject ) => {

        ( heroe ) ? resolve( heroe ) : reject( `No existe un héroe con el id ${ id }` );

    });

};