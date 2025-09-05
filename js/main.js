window.onload = ()=>{

    document.querySelectorAll('.grilla a').forEach(a =>{
               
        a.addEventListener('click', function(e){
            e.preventDefault();
            localStorage.setItem('tipoTriviaSeleccionada', a.dataset.tipoTrivia);
            window.location.href = 'trivia.html';
        })
    })
    
}

