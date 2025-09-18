import { Medallero } from "./medallas/medallero.js";
import { cargarJson, obtenerTipoTriviaSeleccionada } from "./trivia.js";

export class Modal {

    constructor(id) {
        this.modal = document.getElementById(id);
        this.img = this.modal.querySelector('img');
        this.mensajeRendimiento = this.modal.querySelector('.modal-contenido h2');
        this.mensajeDetalle = this.modal.querySelector('.modal-contenido p');
        this.inicializar();
    }

    inicializar(){
        
        const btnCerrarModal = this.modal.querySelector('.btn-cerrarModal');
        // Se debe usar una arrow function para acceder a this (instancia de la clase)
        btnCerrarModal.addEventListener('click', ()=> {
            this.cerrarModal()
        });

        const btnCompartir = document.getElementById('btnCompartir');
        btnCompartir.addEventListener('click', (e)=>{
            e.preventDefault();
            this.compartirResultados();
        });

        const btnVolverJugar = document.getElementById('btnVolverJugar');
        btnVolverJugar.addEventListener('click', (e)=>{
            e.preventDefault();            
            const tipoTriviaSeleccionada = obtenerTipoTriviaSeleccionada();          
            const barajarTrivia = true;
            cargarJson(tipoTriviaSeleccionada, barajarTrivia);
            this.cerrarModal();
        });

        this.modal.addEventListener('click', (e) =>{
            if (e.target === this.modal) {
                this.cerrarModal();
            }
        });

    }

    mostrarModal() {

        this.modal.classList.remove('hidden');
        void this.modal.offsetWidth;
        this.modal.classList.add('mostrarModal');
    }

    cerrarModal(){
                
        this.modal.classList.remove('mostrarModal');
        
        this.modal.addEventListener('transitionend', (e)=>{
            if (!this.modal.classList.contains('mostrarModal')) {
                this.modal.classList.add('hidden');
            }
            
        }, {once:true});
        
    }

    actualizarContenidoModal(medallero, tipoTriviaSeleccionada){

        const medalla = medallero.obtenerMedalla();
               
        // medalla: {img, mensajeRendimiento, mensajeDetalle}
        this.img.src = medalla.img;
        this.mensajeRendimiento.textContent = medalla.mensajeRendimiento;
        this.mensajeDetalle.innerHTML = medalla.mensajeDetalle;
       
        // Dataset para guardar resultados de la trivia
        this.mensajeDetalle.dataset.correctas = medallero.correctas;
        this.mensajeDetalle.dataset.incorrectas = medallero.incorrectas;
        this.mensajeDetalle.dataset.totPreguntas = medallero.totPreguntas;
        this.mensajeDetalle.dataset.tipoMedalla = medalla.tipo;
        this.mensajeDetalle.dataset.tipoTrivia = tipoTriviaSeleccionada.tipo;
        this.mensajeDetalle.dataset.nombreTrivia = tipoTriviaSeleccionada.nombre;
          
    }

    compartirResultados(){

        //Rescata página de origen
        const urlOrigen = sessionStorage.getItem('origen');
        
        let tipoMedalla = this.mensajeDetalle.dataset.tipoMedalla;
        let nombreTrivia = this.mensajeDetalle.dataset.nombreTrivia;

        const iconos = {oro: '🥇', plata: '🥈', bronce: '🥉'};

        let tipoIcono = iconos[tipoMedalla];      

        let mensaje = '';
        if (tipoMedalla === 'consuelo') {
            mensaje = `¡Hola! 🖐 Jugué la Trivia ${nombreTrivia} y no gané ninguna medalla! 😥 Obtuve ${this.mensajeDetalle.dataset.correctas} correctas
                       de ${this.mensajeDetalle.dataset.totPreguntas} preguntas 🎯.
                      ¿Quieres probar tú? 😛 !Juega en el link de abajo y averígualo! 💪`;
        }else{
            mensaje = `¡Hola! Jugué la Trivia ${nombreTrivia}, gané una medalla de ${tipoMedalla} ${tipoIcono} y obtuve ${this.mensajeDetalle.dataset.correctas} correctas
                       de ${this.mensajeDetalle.dataset.totPreguntas} preguntas 🎯.
                      ¿Puedes superarme? 😛 !Juega en el link de abajo y averígualo! 💪`;
        }    
        
        console.log(mensaje);
        
       
        if (navigator.share) {
            navigator.share({
                title: "Mis resultados de la Trivia",
                text: mensaje,
                url: urlOrigen
            });
        }
    }
}