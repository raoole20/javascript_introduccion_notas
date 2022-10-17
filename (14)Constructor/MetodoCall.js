/* EL metodo CALL, nos permite usar un metodo definido en un objeto, en otro objeto distinto
    Usando las propiedades encontradas dentro de dicho objeto distinto a donde se encuentra el metodo*/

let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function( titulo, tl){
        return this.nombre + ' ' + this.apellido + ' '+ titulo + ', ' + tl;
    },
}
let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara',
}

//uso de call para usar el metodo de nombre completo
console.log( persona1.nombreCompleto());

//Usar el metodo con la persona2
console.log(persona1.nombreCompleto.call( persona2, "ing", 0200 ));

//!Detalles: paso de argumentos.
//El metodo call es capaz de recibir argumentos
