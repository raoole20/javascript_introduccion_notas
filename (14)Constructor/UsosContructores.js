//!Conatructores
//En javascript los construnctores son metodos

function Persona( nombre, apellido, email){
    this.apellido = apellido;
    this.nombre = nombre;
    this.email = email;

    this.nombreCompleto = function(){
        return this.nombre + ' '  + this.apellido;
    }
    
}

let padre = new Persona( 'Raul', 'Espna', 'es El mejor');

console.log( padre );
 padre.apellido = "Pesce";
 console.log( padre );
 padre.tl =  3234;
 console.log( padre );
 
 //Sintaxis larga
 let miObjeto = new Object();

 //Sintaxis Corta
 let miObjeto2 = {

 }

 //Cadena
 let miCadena1 = new String("Hola");

 let miNumero = new Number(1);
 let miNumero1 = 1;

 let miArray1 = new Array();
 let miArray2 = [];

 let miFuncion = new Function();
 let miFuncion1 = function(){};
 