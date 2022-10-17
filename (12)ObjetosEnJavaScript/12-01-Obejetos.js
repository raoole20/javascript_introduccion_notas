//los tipos primitivos no tienen ni propiedades ni metos

let x =10;
console.log(x.lenght);


//un objeto puede almacenar cualquier tippo de dato u objeto
let persona = {
    nombre: 'juan',
    apellido: 'Perez',
    email: 'JPerez@gmail.com',
    edad: 20,
    //Funciones de tipo expresion
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    },
}

console.log(persona);
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);

//Ejecutamos la funcion
console.log(persona.nombreCompleto());

let persona2 = new Object();
persona2.nombre = 'Carlos';
persona2.direccion = 'xxxxxxx';

//Podemos agregar/acceder/eliminar propiedades al objeto como si fuera un array

console.log( persona.nombre );
console.log( persona['apellido'] );
console.log( persona[ 0 ] );

for( nombrePropiedades in persona){
    //Primero se imprime la propiedad del objeto
    console.log( nombrePropiedades);

    //luego se usa de indice la propiedad y se extrae el valor
    console.log( persona[nombrePropiedades]);
}

