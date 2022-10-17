let persona = new Object();

//agregar valores
persona.nombre = 'Rafael';
persona.apellido ='Fernandez';
persona.tel = '00000';

console.log(persona);

//Eliminar valores
delete persona.tel;

console.log(persona);

//Formas de mosrar un objeto 

//concatenando Valores
console.log( persona.nombre + ' ' + persona.apellido);  

//Con un for in
for (const propiedad in persona) {
    console.log(propiedad);
}

//Metodo Object.values( ****NombreObjeto**** )
let personaArray = Object.values( persona );
console.log(personaArray);

//metodo JSON.Stringify 

let personaString = JSON.stringify( persona );
console.log( personaString );