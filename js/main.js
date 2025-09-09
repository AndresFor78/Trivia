//Preload de imágenes
preload();

window.onload = ()=>{
    
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
                console.log('mostrar grilla');  
                document.querySelector('.container').classList.remove('hidden');
            }
            
        // }, 3000);
        
    }

    })

}

