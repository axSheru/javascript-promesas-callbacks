import { obtenerHeroesArr } from './js/await';
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

obtenerHeroesArr().then( console.table );

