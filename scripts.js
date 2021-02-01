var inscripcionModel = {alumno:"", docente:"", ciclo:"Ciclo I", materia:"Materia 1", facultad:"Ciencia y Tecnología"};
const app = new Vue({
    el: "#app",
    data:{
        ciclos: ["Ciclo I", "Ciclo II", "Ciclo III", "Ciclo IV", "Ciclo V", "Ciclo VI", "Ciclo VII", "Ciclo VIII", "Ciclo IX", "Ciclo X"],
        materias: ["Materia 1", "Materia 2", "Materia 3", "Materia 4", "Materia 5"],
        facultades: ["Ciencia y Tecnología", "Ciencias de la Salud", "Ciencias y Humanidades", "Ingeniería y Arquitectura"],
        inscripciones: [],
        inscripcion: inscripcionModel
    },
    computed:{
        cantidadInscripciones: function(){
            var number = 0
            this.inscripciones.forEach(ins => {number++});
            return number;
        }
    },
    methods: {
        inscribir(){
            this.inscripciones.push({
                alumno: this.inscripcion.alumno,
                docente:this.inscripcion.docente,
                ciclo:this.inscripcion.ciclo,
                materia:this.inscripcion.materia,
                facultad:this.inscripcion.facultad
            });
        }
    },
});