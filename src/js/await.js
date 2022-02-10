import { buscarHeroe, buscarHeroeAsync } from './promesas';

const heroesIds = [ 'cap', 'iron', 'spider' ];

export const obtenerHeroesArr = async () => {

    return Promise.all( heroesIds.map( buscarHeroe ) );

    /* const heroesArr = [];

    for( const id of heroesIds ) {
        heroesArr.push( buscarHeroeAsync( id ) );
    }

    return await Promise.all( heroesArr ); */

};


export const obtenerHeroeAwait = async ( id ) => {

    try {

        const heroe = await buscarHeroeAsync( id );
    
        return heroe;
        
    } catch ( err ) {
        console.log( 'CATCH' );
        return {
            nombre: 'Sin nombre',
            poder: 'Sin poder',
            err
        };
    }

};

