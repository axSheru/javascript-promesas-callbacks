import './styles.css';
import { buscarHeroe } from './js/calbacks';

const heroeId = 'cap';

buscarHeroe( heroeId, ( heroe ) => {
    console.log( heroe );
});


