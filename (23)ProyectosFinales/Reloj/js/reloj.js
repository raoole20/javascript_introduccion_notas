const mostrarReloj = () =>{

    //Se usa la clase Date, para crear un objeto de tio feccha
    let fecha = new Date();

    //Cada uns de estos metodos retorna un valor de la hora en especifico 
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());

    document.getElementById('hora').innerHTML = `${hr}:${min}:${seg}`
    
    const meses = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct','nov','diciembre']
    const dias = ['dom', 'lunes', 'mar', 'mier', 'jue','vir', 'sab'];

    //El metodo retorna un valor corespondiente al dia de la semana, que lo usaremos como indice
    //para asi, en combinacion al arry podamos volverlo un string
    let diaSemana = dias[fecha.getDay()];

    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];

    let fechaTexto = `${diaSemana}, ${dia}, ${mes}`

    document.getElementById('fecha').innerHTML = fechaTexto;


    //Class list crea un aray cpn todos los elementos que contienen esta lista, toggle, funciona como un apagaod
    document.getElementById('contenedor').classList.toggle('animar');

}

const formatoHora = (hora) => {
    if(hora < 10){
        hora = '0' + hora;
    }
    return hora;
}

//Esta funcion llamara a nuestro metodo cada segundo
setInterval(mostrarReloj, 1000);