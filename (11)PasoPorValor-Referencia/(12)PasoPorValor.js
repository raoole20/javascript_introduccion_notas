//!paso Por valor

//Tipos Primitivos: son primitivos por que se puede trabajar directamente con estos valores
let x = 10;


//Paso por valor: solo se pasa una copia del valor de x
function cambiaValor(a){
    a = 20;
    return;
    //El valor de a se destruye al terminar el metodo
}

cambiaValor(x);
console.log(10);

//!Paso por referencia
const persona = {
    nombre: 'juean',
    apellido: 'Perez'
}

function cambiarPersona(p1){
    p1.nombre = 'Carlos'
    p1.apellido = "Romero"
}

//Paso por referencia
cambiarPersona(persona);
console.log( persona );