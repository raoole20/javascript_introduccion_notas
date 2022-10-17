function mostrarPersona() {
  console.log("Se esta ejecitando el metodo");
  let texto = "";
  for (let persona of personas) {
    console.log(persona);
    texto += `<li>${persona.nombre} ${persona.apellido}</li> \n`;
  }

  document.getElementById("personas").innerHTML = texto;
}

const personas = [new Persona("juan", "Perez"), new Persona("Karla", "Lara")];

function agregarPersona() {
  /*Otra forma de llamar los objetos*/
  const forma = document.forms["forma"];
  const nombre = forma["nombre"];
  const apellido = forma["apellido"];

  if (nombre.value != "" && apellido.value != "") {
 
    if(nombre == nicole || nombre == Nicole){
        document.getElementById('alerta').innnerHTML = alert('aaayyyyyyyyy vergaaaaa cabrooon, miralo, mucho vaina pero sigue siempre teniendila en cuenta')
    }
    const persona = new Persona(nombre.value, apellido.value);

    console.log(persona);

    personas.push(persona);

    mostrarPersona();

  }else{
    document.getElementById('alerta').innerHTML = alert('Error');
  }

}
