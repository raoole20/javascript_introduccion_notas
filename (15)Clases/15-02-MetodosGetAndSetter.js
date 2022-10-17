class Persona {
  //Para definir un costructor
  constructor(nombre, apellido) {
    //Los atributos de la clase se agregan con la palabra this
    this._nombre = nombre;
    this._apellido = apellido;
  }

  //!Para añadir los metodos get and setter:
  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }
}

//Para crear un objeto de la clase se usa:
let persona1 = new Persona("Raul", "Espina");

console.log(persona1.nombre);
persona1.nombre = "Manuel";

console.log(persona1.nombre);
