//NO se aplica el consepto de hoisting
class Persona{
    //Para definir un costructor 
    constructor(nombre, apellido){
        //Los atributos de la clase se agregan con la palabra this
        this._nombre = nombre;
        this._apellido = apellido;
    }

    
}

//Para crear un objeto de la clase se usa:
let persona1 = new Persona('Raul', 'Espina');
console.log( persona1 );

let persona2 = new Persona('Nicole', 'Rivera');
console.log( persona2 );