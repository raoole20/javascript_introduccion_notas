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
}

let persona1 = new Persona('Raul', 'Espina');

//persona1.saludar();
Persona.saludar();
Persona.saludar2( persona1 );

let persona2 = new Empleado('Lucia', 'Pesce', 'Psicologia');

Empleado.saludar();
Empleado.saludar2( persona2 );