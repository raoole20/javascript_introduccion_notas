let miPromesa = new Promise( (resolved, rejected) => {

    let expresion = true;
    if( expresion ){
        resolved('Se resolvio la promesa');
    }else{
        rejected('Ocurrio un error');
    }
    
});

//La palabra async oblica a una funcion a retornar una promesa

async function C(){
    return 'Saludos, promesa y async'
}


async function miPromesaConAwait(){
   let miPromesa =  new Promise( resolver => {
       resolver('Promesa con await');
   });
   console.log( await miPromesa );
}
miPromesaConAwait();

//Promesas, await, async y setTimeOut
