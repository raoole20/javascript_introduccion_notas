//Hoisting mueve la funcion al principio del archivo y lo podemos usar desde cualquier parte del archivo
miFuncion(3,7);

function miFuncion(a,  b){
    console.log("Suma = " + (a + b));
}

miFuncion(23,4);

miFuncion(39,3);

//!Palbra reservada return

function miFuncion2(a,b){
    return a+b;
}

let resultado = miFuncion2(2,3);
console.log(resultado);

/*javascript siempre usa la palabra return de manera implicita */

//!funciones de expresion o funciones anonimas
//son funciones que se pueden almacenar en variables
let x = function(a,b){return a+b };

let resultado2 = x(1,2);
console.log(resultado2);