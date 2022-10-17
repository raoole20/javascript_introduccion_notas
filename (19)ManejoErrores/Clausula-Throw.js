//Clausula throws, sirve para crear nuestros propios errores
'use strict';

try{
    let x = 10;

    //paso 1:
    throw 'Mi error';
}
catch( error ){
    console.log( error );
}
finally{
    console.log( 'Se termino de revisar los errores' );
}


console.log('Continuamos...');







try{
    
    let resultado = '';

    if( isNaN(resultado)){ 
        throw 'No es un numer';
    }else if( resultado == "" )throw 'Es una cadena vacia';
}
catch( error ){

    console.log( error );
    console.log( error.name);
    console.log( error.message );
}