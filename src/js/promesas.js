import { heroesDB } from './heroesDB';

export const buscarHeroe = ( id ) => {

    const heroe = heroesDB[ id ];

    return new Promise( ( resolve, reject ) => {

        ( heroe ) ? resolve( heroe ) : reject( `No existe un héroe con el id ${ id }` );

    });

};

export const buscarHeroeAsync = async ( id ) => {

    const heroe = heroesDB[ id ];

    if ( heroe ) {
        return heroe;
    } else {
        throw `No existe un héroe con el id ${ id }` ;
    }

};


const promesaLenta = new Promise( ( resolve, reject ) => {
    setTimeout(() => resolve( 'Promesa lenta.' ), 2000);
});

const promesaMedia = new Promise( ( resolve, reject ) => {
    setTimeout(() => resolve( 'Promesa media.' ), 1500);
});

const promesaRapida = new Promise( ( resolve, reject ) => {
    setTimeout(() => resolve( 'Promesa rápida.' ), 1000);
});

export {
    promesaLenta,
    promesaMedia,
    promesaRapida
};
