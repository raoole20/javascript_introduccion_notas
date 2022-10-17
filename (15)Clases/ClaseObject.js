//Todas las clases en JavaScript heredan de una misma clase llamada Object, de manera implicita 
//!Extends Object
class Persona {

    constructor (nombre, apellido){
        
        this._nombre= nombre;
        this._apellido=apellido;
    }

    get nombre(){
        return this._nombre;
    }
    get apellido(){
        return this._apellido;
    }

    set nombre(nombre2){
        this._nombre = nombre2;
    }
    set apellido(apellido2){
        this._apellido= apellido2;
    }
    nombreCompleto(){
        return this._nombre + ' '+ this._apellido;
    }

    //Sobre escribir el metodo TOString
    toString(){
        return this.nombreCompleto() 
    }
}

class Empleado extends Persona{

    constructor( nombre, apellido, departamento ){

        super (nombre, apellido);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }
    set departamento( departamento ){
        this._departamento = departamento;
    }
    //SobreEscritura
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}
let persona = new Persona('RAul', 'Espina');
let persona1 = new Empleado( 'juan', 'Versaje', 'Logistica');

//SObreescritura
console.log( persona1.nombreCompleto());

//Polimorfismo, dos clases que puedan usar un mismo metodo
console.log( persona1.toString());
console.log( persona.toString());

//La clase object tiene metodos, y atrubutos que podeos usar.
Object.prototype.toString();