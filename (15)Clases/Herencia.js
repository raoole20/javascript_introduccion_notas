class Persona{

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

//Herencia, En javaScrip Hay que escribir la palabra super para poder llamar a constructor de la clase padre.
// se heredan los constructores y los metodos
let persona1 = new Empleado( 'juan', 'Versaje', 'Logistica');
console.log( persona1 )
//SObreescritura
console.log( persona1.nombreCompleto());