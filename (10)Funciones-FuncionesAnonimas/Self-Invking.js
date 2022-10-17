//!Funcion Self-Invoking
/*Son funciones que se llaman a si mismas, por eso la encerramos entre parentesis
  solo que estas funciones solo se pueden usar una vez ya que no estan siendo asignadas
  a ninguna variable y no poseen nombres */

(function (){
    console.log("Ejecutando la funcion");
})();

(function (a,b){
    console.log("Ejecutando la funcion con suma " + (a+b))
})(1,2);