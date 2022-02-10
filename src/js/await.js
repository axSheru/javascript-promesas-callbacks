import { buscarHeroe, buscarHeroeAsync } from './promesas';

const heroesIds = [ 'cap', 'iron', 'spider' ];
// const heroesPromesas = heroesIds.map( id => buscarHeroe( id ) );
const heroesPromesas = heroesIds.map( buscarHeroe );// Versión simplificada de la línea de arriba.

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

export const heroesCiclo = async () => {

    console.time( 'HeroesCiclo' );

    // heroesPromesas.forEach( async ( p ) => console.log( await p ) );

    for await ( const heroe of heroesPromesas ) {
        console.log( heroe );
    }

    /* const heroes = await Promise.all( heroesPromesas );
    heroes.forEach( console.log ); */

    console.timeEnd( 'HeroesCiclo' );

};

export const heroeIfAwait =  async ( id ) => {

    if ( (await buscarHeroeAsync( id )).nombre === 'Spiderman' ) {
        console.log( '¡Es el amistoso vecino!' );
    } else {
        console.log( '¿Y quién es él?' );
    }

};

