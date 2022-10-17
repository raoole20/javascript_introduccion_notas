//Paso 1: poner el codigo en  modo estricto
'use strict';

//Paso 2: Usar los bloques try-catch
try{
    //x = 10;
    //miFuncion();

    let x = 10;
}
catch( error ){
    console.log( error );
}
finally{
    //Este Codigo siempre se ejecutará
    console.log( 'Se termino de revisar los errores' );
}

//Continuacion despues del Error
console.log('Continuamos...');