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

    callback( heroe );

};

