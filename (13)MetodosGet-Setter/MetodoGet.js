//Metodo Get
let persona = {

  nombre: "raul",
  apellido: "espina",
  tele: "Jperez",
  get nombreCompleto1() {
    return this.nombre + " " + this.apellido;

  },
};

//No es necesario colocar los parentesis
console.log(persona.nombreCompleto1);


//Metodo como una funcion de tipo ****
let persona2 = {

  nombre: "raul",
  apellido: "espina",
  tele: "Jperez",
  nombreCompleto2: function () {
    return this.nombre + " " + this.apellido;

  },
};

//Como podemos observar  en este caso es nesesario usar los parentesis
console.log(persona2.nombreCompleto2());
