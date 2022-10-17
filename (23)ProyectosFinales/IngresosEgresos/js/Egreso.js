class Egreso extends Dato{

    static conatadorEgresos = 0;

    constructor(descripcion, valor){
        super(descripcion, valor);
        this._id = ++Egreso.conatadorEgresos;
    }

    get id(){
        return this._id;
    }
}