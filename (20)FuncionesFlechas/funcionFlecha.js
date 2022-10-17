function miFuncion(){
    console.log( 'Salidos desde mi funcion');
}

miFuncion();

//Las funciones flechas son funciones anonimas

let miFuncion2 = function(){
    console.log('Funcion anonima');
};
miFuncion2();

//Funcion Flecha
//No se aplica el concepto de Hoisting, es decir que se tiene que usar luego de ser definmida;
//usar const es mas practico que usar let, para no tener que modificaar la funcion otra vez

const miFuncionFlecha = () => {
    console.log('Funcion Flecha');
}

miFuncionFlecha();

//Otras formas de definir una funcion flecha
//Si es una sola linea no es necesario abrir el cuerpo de la funcon
const miFuncionFlecha2 = () => console.log('Funcion flecha sin usar los corchetes');

//Con retunr
//si fuera una sola linea de codigo, no es necesario abrir el cuerpo de la funcion
const miFuncionFlecha3 = () => {
    return 'Salusdo desde la funcion con return';
}

//Rertornar objeto
const miFuncionObjeto = () => ({combre: 'juan', apellido: 'Lara'});


//Funcion con parametros
const funcionConParametros = (mensaje) => {
    console.log( mensaje );
}
//*si solo es unparametro no es necesario usar los parentesis 
const funcionSinParentesis = mensaje => {
    console.log( mensaje );
}

//!Prueba de sobrecarga de metodos
//no es valido
funcionConParametros( 'saludos desde un parametro ');
