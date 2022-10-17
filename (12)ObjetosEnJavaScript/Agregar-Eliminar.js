let persona = new Object();

//agregar valores
persona.nombre = 'Rafael';
persona.apellido ='Fernandez';
persona.tel = '00000';

console.log(persona);

//Eliminar valores
delete persona.tel;

console.log(persona);