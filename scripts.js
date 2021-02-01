const inscripcionesClave = "inscripciones";
var inscripcionModel = {alumno:"", docente:"", ciclo:"Ciclo I", materia:"Materia 1", facultad:"Ciencia y Tecnología"};
const app = new Vue({
    el: "#app",
    data:{
        ciclos: ["Ciclo I", "Ciclo II", "Ciclo III", "Ciclo IV", "Ciclo V", "Ciclo VI", "Ciclo VII", "Ciclo VIII", "Ciclo IX", "Ciclo X"],
        materias: ["Materia 1", "Materia 2", "Materia 3", "Materia 4", "Materia 5"],
        facultades: ["Ciencia y Tecnología", "Ciencias de la Salud", "Ciencias y Humanidades", "Ingeniería y Arquitectura"],
        inscripciones: getData(),
        inscripcion: inscripcionModel
    },
    computed:{
        cantidadInscripciones(){
            var cantidad = 0;
            if(this.inscripciones != null)
                this.inscripciones.forEach(ins => {cantidad++});
            return cantidad;
        }
    },
    methods: {
        inscribir(){
            if(typeof(Storage) != 'undefined'){
                this.inscripciones = guardarInscripciones({
                    alumno: this.inscripcion.alumno,
                    docente: this.inscripcion.docente,
                    ciclo: this.inscripcion.ciclo,
                    materia: this.inscripcion.materia,
                    facultad: this.inscripcion.facultad
                });
            }
            else
                console.log("LocalStorage no disponible.");
        }
    },
});

function getData(){            
    return JSON.parse(localStorage.getItem(inscripcionesClave));
}

function guardarInscripciones(inscripcion){
    let data = getData();
    let inscripciones = data != null ? data : [];
    inscripciones.push(inscripcion);
    localStorage.setItem(inscripcionesClave, JSON.stringify(inscripciones));
    return getData();
}
