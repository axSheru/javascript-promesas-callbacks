const heroes = {
    cap: {
        nombre: 'Capitán América',
        poder: 'Aguantar inyecciones mutantes.'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Ser MUY rico.'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'Ser pro veneno de arañas.'
    },
};

export const buscarHeroe = ( id, callback ) => {

    const heroe = heroes[ id ];

    if ( heroe ) {
        callback( null, heroe );
    } else {
        callback( `No existe un héroe con el ID ${ id }` );
    }


};

