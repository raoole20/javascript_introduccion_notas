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
 