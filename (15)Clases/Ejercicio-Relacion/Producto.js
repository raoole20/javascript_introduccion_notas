"use strict";

class Producto{

    static contadorProductos = 0;

    constructor( nombre, precio){

        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }   
    get idProducto(){
        return this._idProducto;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre( nombre ){
        this._nombre = nombre;
    }
    get precio(){
        return this._precio;
    }
    set precio( nombre ){
        this._precio = nombre;
    }

    toString(){
        return this._idProducto + ': ' + this._nombre + ' = ' + this._precio;
    }
}

class Orden{

    static contadorOrdenes = 0;
    static get MAX_PRODUCTO() {
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductorAgregados = 0;
    }
    get idOrden(){
        return this._idOrden;
    }

    agregarProducto( producto ){

        if(this._productos.length <= Orden.MAX_PRODUCTO){
            this._productos.push( producto );

        }else{
            console.log( "Se a alcanzado el maximo de elementos");
        }
    }

    CalcularTotal(){
        let totalVenta= 0;
        for( let producto of this._productos){
            totalVenta = producto.precio;
        }
        return totalVenta;
    }

    mostrarOrden(){
        let productosOrden = "";
        for (const producto of this._productos) {
            productosOrden += "\n" + producto.toString(); 
        }

        console.log( `Orden: ${this._idOrden}\ntotal: ${this.CalcularTotal()}\nProductos: ${productosOrden}`);
    }
}

let producto1 = new Producto("Paltalon", 100);
let producto2 = new Producto("Camisa", 200);
let orden1 = new Orden();

orden1.agregarProducto( producto1 );
orden1.agregarProducto( producto2 );

orden1.mostrarOrden();
