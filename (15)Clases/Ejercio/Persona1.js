class Persona1{

    static contadorPersonas = 0;

    constructor( nombre, apellido, edad ){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersonas;
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
        return this._idPersona +': '+this.nombre() + " " + this._apellido + ", Edada: " + this._edad;
    }
}


