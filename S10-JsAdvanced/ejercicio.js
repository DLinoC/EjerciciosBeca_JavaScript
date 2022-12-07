class Alumno {
    pf = 0;
    constructor(codigo, nombre, n1, n2, n3, n4) {
        this.codigo = codigo
        this.nombre = nombre;
        this.n1 = n1;
        this.n2 = n2;
        this.n3 = n3;
        this.n4 = n4;
    }
    promedio() {
        return this.pf = ((this.n1 * 0.15) + (this.n2 * 0.2) +(this.n3 * 0.25) + (this.n4 * 0.4)).toFixed(2)
    }
    condicion(nf) {
        if(nf >= 12 ) {
            return 'Estás Aprobado'
        }else {
            return 'Estás Desaprobado'
        }
    }
    regalo(notafinal) {
        if (notafinal >= 17) {
            return 'Te ganaste una mochila Porta.'
        }else {
            return 'Sigue insertando coin. No es una caída, es un tropiezo.'
        }
    }

}

const danfer = new Alumno('02', 'Danfer', 20, 19, 18, 17)
const harry = new Alumno('03', 'Harry', 10, 10, 20, 20)
const shirley = new Alumno('04', 'Shirley', 15, 16, 17, 18)
const michael = new Alumno('01', 'Michael', 20, 20, 20, 20)
const oscar = new Alumno('05', 'Oscar', 14, 20, 0, 20)
const erikson = new Alumno('05', 'Erikson', 11, 10, 0, 20)

console.log(danfer.promedio());
console.log(danfer.pf)
console.log(danfer.condicion(danfer.pf));
console.log(danfer.regalo(danfer.pf));

// console.log(erikson.promedio());
// console.log(erikson.pf)
// console.log(erikson.condicion(erikson.pf));
// console.log(erikson.regalo(erikson.pf));