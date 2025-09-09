import { crearLoader } from "./loader.js";

window.onload = ()=>{

    //Comprueba si las imágenes ya han sido cargadas
    if (!sessionStorage.getItem('imagenesCargadas')) {
        mostrarLoader();
        preload();
    }
    else{
        document.querySelector('.container').classList.remove('hidden');
        const loaderConstruido = document.getElementById('loader');
        if (loaderConstruido) { loaderConstruido.classList.add('hidden'); };
    }
    
    document.querySelectorAll('.grilla a').forEach(a =>{
               
        a.addEventListener('click', function(e){
            //Guarda dirección de Index.html
            sessionStorage.setItem("origen", window.location.href);
            e.preventDefault();
            localStorage.setItem('tipoTriviaSeleccionada', a.dataset.tipoTrivia);
            window.location.href = 'trivia.html';
        })
    })
    
};

function mostrarLoader() {

    //Inserta loader en el html
    let loader = crearLoader();
    document.querySelector('main').insertAdjacentHTML("afterbegin", loader);
    
}

function preload(){

    let cantidad = 0;
    const imagenes = Array.from(document.querySelectorAll('a img'));

    imagenes.forEach(img =>{
    const temp = new Image();
    temp.src = img.src;
    temp.onload = () => {
        // setTimeout(() => {
            cantidad++;
            if (cantidad === imagenes.length) {
                //Guarda en sessionStorage
                window.sessionStorage.setItem('imagenesCargadas', true);                
                document.querySelector('.container').classList.remove('hidden');
                document.getElementById('loader').classList.add('hidden');
            }            
        // }, 3000);        
    }

    })

}

