class Empleado{

    constructor( nombre, sueldo ){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this.nombre}, sueldo: ${this.sueldo}`;
    }
}

class Gerete extends Empleado{

    constructor( nombre, sueeldo, depa ){
        super(nombre, sueeldo);
        this.departamento = depa;
    }

    obtenerDetalles(){
        return super.obtenerDetalles() + " " + this.departamento;
    }
}