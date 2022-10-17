//!Uso de apply
//EL metodo apply, nos perpite usar u metdo definido en objeto, con los valores de un objeto diferente
//Si se desea pasar arguntos al metodo, los agumentos deben estar dentro de un array

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
let array = ["ing", 000075]
//uso DE apply
console.log( persona1.nombreCompleto());
console.log(persona1.nombreCompleto.call( persona2, "ing", 0200 ));
console.log( persona1.nombreCompleto.apply( persona2, array ));
console.log( persona1.nombreCompleto.apply( persona2, ["ing", 000075] ));
