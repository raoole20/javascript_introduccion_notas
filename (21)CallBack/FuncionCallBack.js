//Las funciones en javaScript, se ejecutan de manera secuencial, es decir, en orden de llamada
//Una funcion callback es una funcion que recibe como parametro otra funcion

function parametro( mensaje ){
    console.log( mensaje );
}

function callback( a, b, callback){
    let resultado = a + b;

    callback( resultado );
}

callback( 2, 4, parametro);

//La idea de las funciones callback es que puedan usarse de
// manera asincona, es decir, que no necesite culminar una para inicializar la ejecucon de la otra

function llamada (){
    console.log('llamada 1');
}

setTimeout(llamada, 3000);

