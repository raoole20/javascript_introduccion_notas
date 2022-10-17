/*una funcion es un object, tiene metodos y se peude tratar como si fuera un objeto en java */

function miFuncion(a, b, c){
    console.log("Holaaaaaaaaaaaa");
    console.log(arguments.length);
}

miFuncion(2,4,2);

let funcionText = miFuncion.toString();

console.log(funcionText);

