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

//La plabra reservada Prototype sirve para agregar un atributo al obejo y que sea parte del objeto
Persona.prototype.Telefono = '555555';

let padre = new Persona( 'Raul', 'Espna', 'es El mejor', '1231243122');
console.log( padre );
padre.Telefono = '341';
console.log( padre.Telefono);

let madre = new Persona('Maria', 'Mendez', '','23423');
console.log( madre );
console.log( madre.Telefono)