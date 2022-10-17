class Persona{

    constructor( nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre( nombre ){
        this._nombre = nombre;
    }
    get apellido(){
        return this._nombre;
    }

    set apellido( nombre ){
        this._apellido = nombre;
    }
}