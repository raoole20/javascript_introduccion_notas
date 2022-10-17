class Persona1{

    static contadorPersonas = 0;

    constructor( nombre, apellido, edad ){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona1.contadorPersonas;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre( nombre ){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido( nombre ){
        this._apellido = nombre;
    }

    get edad(){
        return this._edad;
    }
    set edad( nombre ){
        this._edad = nombre;
    }

    get idPersona(){
        return this_idPersona;
    }

    toString(){
        return this._idPersona +': '+this.nombre + " " + this._apellido + ", Edada: " + this._edad;
    }
}


class Empleado extends Persona1{

    constructor( nombre, apellido, edad, sueldo ){
        super(nombre, apellido, edad);
        this._sueldo = sueldo;
        this._idEmpleado = ++Persona1.contadorPersonas;
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
class Cliente extends Persona1{

    static contadorCliente = 0;

    constructor( nombre, apellido, edad, Registro){
        super( nombre, apellido, edad);
        this._registro = Registro;
        this._idCliente = ++Cliente.contadorCliente;
    }
    get idCliente(){
        return this._idCliente;
    }
    get registro(){
        return this._registro;
    }
    set registro( Registro ){
        this._registro = Registro;
    }

    toString(){
        return super.toString + ", Fecha de registro: " + this._registro + 'Cliente: ' + this._idCliente;
    }
}

//Prueba clase PErsona
let persona1 = new Persona1( 'Raul', 'Espina', '19');
console.log( persona1.toString());

let empleado1 = new Empleado( 'Lucia', 'Pesce', '18', 5921);
console.log( empleado1.toString());

let cliente =  new Cliente('miguel','Cervantes', 28, new Date());
console.log( cliente.toString());