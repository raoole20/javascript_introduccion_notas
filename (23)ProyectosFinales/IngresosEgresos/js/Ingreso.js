class Ingreso extends Dato{

    static conatadorIngresos = 0;

    constructor(descripcion, valor){
        super( descripcion, valor);  
        this._id = ++Ingreso.conatadorIngresos;
    }
    get id(){
        return this._id;
    }
}