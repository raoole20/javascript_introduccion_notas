class Empleado{

    constructor( nombre, sueldo ){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this.nombre}, sueldo: ${this.sueldo}`;
    }
}

class Gerente extends Empleado{

    constructor( nombre, sueeldo, depa ){
        super(nombre, sueeldo);
        this.departamento = depa;
    }

    obtenerDetalles(){
        return super.obtenerDetalles() + " " + this.departamento;
    }
}

function imprimir ( tipo ){
    console.log( tipo.obtenerDetalles() );
    
    if( tipo instanceof Empleado ){
        console.log('Es de tipo empleado');
    }
    if( tipo instanceof Gerente ){
        console.log('Es de tipo Gerente ');
    }
}

let empleado1 = new Empleado('juan', 3000);
let generente1 = new Gerente('Carlos', 5000, 'sistemas');

imprimir( empleado1 );