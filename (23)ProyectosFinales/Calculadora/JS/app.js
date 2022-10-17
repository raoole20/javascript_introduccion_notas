function sumar() {
  let valor1 = document.getElementById("cuadro1");
  let valor2 = document.getElementById("cuadro2");

  let resultado = parseInt(valor1.value) + parseInt(valor2.value);

  if (isNaN(resultado)) {
    document.getElementById("show").innerHTML = "No ha ingresado los valores";
  } else  document.getElementById("show").innerHTML = `Resultado: ${resultado}`;
   

  valor1.value = null;
  valor2.value = null;
}

