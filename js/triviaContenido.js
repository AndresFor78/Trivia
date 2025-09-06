export function obtenerTriviaContenido(){

    let imagenes = {
        triviaSur : 'img/triviaSur.webp',
        triviaDragon: 'img/bannerDragonBallz.png',
        triviaCine: 'img/bannerCine.png',
        triviaMusical: 'img/triviaMusical.jpg'
    };

    Object.values(imagenes).forEach( src => {
        console.log(src);
        const img = new Image();
        img.src = src;        
    })

    const triviaContenido = [
    {
        tipo: 'sur',
        json: 'triviaSurVacaciones.json',
        mensaje: `¡Demuestra que conoces el sur de Chile
                   contestando las {{}} preguntas y
                   obtén tu medalla! `,
        img: imagenes['triviaSur']
    },
    {
        tipo: 'dragon',
        json: 'triviaDragonBallz.json',
        mensaje: `Prepárate para contestar las {{}} preguntas y 
                  demostrar que realmente conoces Dragon Ball Z!`,
        img: imagenes['triviaDragon']
    },
    {
        tipo: 'cine',
        json: 'triviaCine.json',
        mensaje: `¿Eres un verdadero fanático del cine? Aquí hay {{}} preguntas esperando por ti.`,
        img: imagenes['triviaCine']
    },
    {
        tipo: 'musical',
        json: 'triviaMusical.json',
        mensaje: `¿Sabes de música? Obtén tu medalla contestando las {{}} preguntas de esta trivia que
                  podrá a prueba tus conocimientos musicales.`,
        img: imagenes['triviaMusical']
    }
];

return triviaContenido;

}


