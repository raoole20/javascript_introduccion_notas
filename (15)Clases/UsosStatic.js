class Persona{

    static ContadorPersonas = 0;

    //Esta funcion simula una constante
    static get MAX_OBJ(){
        return 5;
    }

    constructor (nombre, apellido){
        this._nombre= nombre;
        this._apellido=apellido;
        this._idPersona = ++Persona.ContadorPersonas;
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
    toString(){
        return this._idPersona + ': ' + this.nombreCompleto();
    }
    static saludar(){
        console.log("saludos desde un metodo estaitco");
    }
    static saludar2(  persona ){
        console.log(persona.nombre);
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
    toString(){
        return this._idPersona + ': ' + this.nombreCompleto();
    }
}

let persona1 = new Persona('Raul', 'Espina');

let persona2 = new Empleado('Lucia', 'Pesce', 'Psicologia');

console.log( persona1.toString());
console.log( persona2.toString());

console.log( Persona.MAX_OBJ);