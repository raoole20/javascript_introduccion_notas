//Promesas, se usan funciones de tipo callback

//Declarrar un variable que tenga una referencia de tipo promesa
//El constructor de Promise recibe 2 parametros, que seran funciones de tipo callback
//Se usaran dependiendo del camino que ocurra durante la ejecucion del programa

let miPromesa = new Promise( (resolved, rejected) => {

    let expresion = true;
    if( expresion ){
        resolved('Se resolvio la promesa');
    }else{
        rejected('Ocurrio un error');
    }
    
});

miPromesa.then( valor => console.log(valor)).catch( error => console.log( error));