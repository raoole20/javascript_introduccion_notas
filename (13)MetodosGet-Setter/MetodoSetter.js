//Metodo Setter
let persona = {

    nombre: "raul",
    apellido: "espina",
    tele: "Jperez",
    idioma: "es",
    get lang(){

         return  this.idioma.toUpperCase();
        
    },
    set Lenguaje( lang ){
      this.idioma = lang.toUpperCase(); 
    },

    get nombreCompleto1() {
      return this.nombre + " " + this.apellido;
  
    },
  };
  
 
  console.log(persona.nombreCompleto1);
  
  persona.Lenguaje = 'ingles';

  console.log(persona.lang);
  