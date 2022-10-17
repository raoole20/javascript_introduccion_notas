let miPromesa = new Promise( (resolved, rejected) => {

    let expresion = true;
    if( expresion ){
        resolved('Se resolvio la promesa');
    }else{
        rejected('Ocurrio un error');
    }
    
});

//miPromesa.then( valor => console.log(valor)).catch( error => console.log( error));

let promesa = new Promise( resolver => {
    console.log('Inicio promesa');
    setTimeout( () => {resolver('saludos con promesa y timeout')}, 3000);
    console.log('fin promesa');
})

promesa.then( valor => console.log( valor ));