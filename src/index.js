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
buscarHeroe( heroeId1 ).then( heroe => {

    console.log( `Enviando a ${ heroe.nombre } a la misión.` );

});


console.log( 'Fin del programa.' );


