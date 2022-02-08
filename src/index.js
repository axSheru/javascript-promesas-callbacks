import './styles.css';
import { buscarHeroe } from './js/calbacks';

const heroeId = 'cap';

buscarHeroe( heroeId, ( err, heroe ) => {

    if ( err ) {
        console.error( err );
    } else {
        console.log( heroe );
    }
});


