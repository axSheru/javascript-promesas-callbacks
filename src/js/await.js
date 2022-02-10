import { buscarHeroeAsync } from './promesas';

const heroesIds = [ 'cap', 'iron', 'spider' ];

export const obtenerHeroesArr = async () => {

    const heroesArr = [];

    for( const id of heroesIds ) {
        heroesArr.push( buscarHeroeAsync( id ) );
    }

    return await Promise.all( heroesArr );

};
