class Dato{
    constructor( descripcion, valor){
        this._descripcon = descripcion;
        this._valor = valor;
    }

    get descripcion(){
        return this._descripcon
    }

    set descripcion( descripcion ){
        this._descripcon = descripcion;
    }

    
    get valor(){
        return this._valor;
    }

    set valor( descripcion ){
        this._valor = descripcion;
    }
}