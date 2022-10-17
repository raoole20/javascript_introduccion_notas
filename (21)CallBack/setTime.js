//set intevale
//hace la llamada cada intervalo de tiempo

let reloj = () => {
    //regrasa la fecha actual;
    let fecha = new Date();

     console.log( `${fecha.getHours()}: ${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

setInterval( reloj , 1000);