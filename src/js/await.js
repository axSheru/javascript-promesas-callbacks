import { buscarHeroeAsync } from './promesas';

const heroesIds = [ 'cap', 'iron', 'spider' ];

export const obtenerHeroesArr = async () => {

    const heroesArr = [];

    for( const id of heroesIds ) {
        const heroe = await buscarHeroeAsync( id );
        heroesArr.push( heroe );
    }

    return heroesArr;

}
