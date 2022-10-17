class Empleado extends Persona1{

    constructor( nombre, apellido, edad, sueldo ){
        super(nombre, apellido, edad);
        this._sueldo = sueldo;
        this._idEmpleado = ++contadorPersonas;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo( sueldo ){
        this._sueldo = sueldo;
    }
    get idEmpleado(){
        return this._idEmpleado;
    }

    toString(){
        return super.toString() + ', sueldo: ' + this._sueldo;
    }
}
