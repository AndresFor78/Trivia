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
    
}

