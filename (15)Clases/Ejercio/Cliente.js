class Cliente extends Persona1{

    static contadorCliente = 0;

    constructor( nombre, apellido, edad, Registro){
        super( nombre, apellido, edad);
        this._registro = new Date();
        this._idCliente = ++contadorCliente;
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
        return super.toString + ", Fecha de registro: " + this._registro;
    }
}

