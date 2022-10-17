//Tipo de datos String
var nombre ="Carlos";
console.log(typeof nombre);

//Las variables en JavaScrip son datos dinamicos

nombre = 10.6;

console.log(typeof 10);

//Tipo numerico
var numero = 2000;
console.log(numero);

//Tipo Object

var objeto= {
    nombre: "juan", 
    apellido: "perez",
    telefono: "0000"
}

console.log(objeto)

//tipo de dato boolean (true or false)

var bandera = true;

console.log(bandera)


//Tipo de dato tipo Funcion

function miFuncion(){

}

console.log(miFuncion)
console.log(typeof miFuncion)

//Tipo de dato Symbol

var simbolo = Symbol("Mi simbolo");
console.log(simbolo);
console.log(typeof simbol);

//Las clases son funciones

class Persona{
    constructor(name, secondname){
    this.nombre = name;
    this.apellido = secondname;
    }
}
console.log(Persona)
console.log(typeof Persona);

//tipo undefined

var x;
console.log(x);

//tipo nulo = null

var y = null;
console.log(y);

