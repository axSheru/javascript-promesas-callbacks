import { obtenerHeroesArr, obtenerHeroeAwait, heroesCiclo, heroeIfAwait } from './js/await';
// import { promesaLenta, promesaMedia, promesaRapida, buscarHeroe, buscarHeroeAsync } from './js/promesas';


/* promesaLenta.then( console.log );
promesaMedia.then( console.log );
promesaRapida.then( console.log ); */

/* Promise.race([ promesaLenta, promesaMedia, promesaRapida ])
    .then( console.log )
    .catch( console.warn ); */

/* buscarHeroe( 'cap' )
    .then( heroe => console.log( heroe ) )
    .catch( console.warn );

buscarHeroeAsync( 'spider' )
    .then( heroe => console.log( heroe ) )
    .catch( console.warn ); */

/* console.time( 'await' )

obtenerHeroeAwait( 'spiderd' )
    .then( heroe => {
        console.log( heroe );
        console.timeEnd( 'await' );
    })
    .catch( console.warn ); */

console.log( 'ANTES' );
heroesCiclo();
heroeIfAwait( 'spider' );
console.log( 'DESPUES' );

