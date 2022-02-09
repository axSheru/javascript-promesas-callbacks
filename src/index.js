import { buscarHeroe as buscarHeroeCallback } from './js/calbacks';
import { buscarHeroe } from './js/promesas';

import './styles.css';

const heroeId1 = 'cap';
const heroeId2 = 'spider';


// Callbacks version.
/* buscarHeroe( heroeId1, ( err, heroe1 ) => {

    if ( err ) { console.error( err ); }

    buscarHeroe( heroeId2, ( err, heroe2 ) => {

        if ( err ) { console.error( err ); }

        console.log( `Enviando a ${ heroe1.nombre } y ${ heroe2.nombre } a la misión.` );

    });

}); */


// Promises version.

// Versión larga.
/* buscarHeroe( heroeId1 ).then( heroe1 => {

    // console.log( `Enviando a ${ heroe1.nombre } a la misión.` );

    buscarHeroe( heroeId2 ).then( heroe2 => {

        console.log( `Enviando a ${ heroe1.nombre } y ${ heroe2.nombre } a la misión.` );

    });

}); */

// Versión corta.
Promise.all([ buscarHeroe( heroeId1 ), buscarHeroe( heroeId2 ) ])
    .then( ([ heroe1, heroe2 ]) => {

        console.log( `Enviando a ${ heroe1.nombre } y ${ heroe2.nombre } a la misión.` );

    }).catch( err => {
        alert( err );
    }).finally( () => {
        console.log( 'Fin del Promise.all' );
    });


console.log( 'Fin del programa.' );


