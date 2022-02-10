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
