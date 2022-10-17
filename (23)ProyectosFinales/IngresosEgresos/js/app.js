const ingresos = [
  new Ingreso("paltalon", 1000),
  new Ingreso("Venta Coche", 11500),
  new Ingreso("hol", 90000),
];

const Egresos = [new Egreso("Renta depa", 900), new Egreso("Ropa", 4000)];

let cargarApp = () => {
  cargarCabecero();
  cargarIngesos();
  cargarEgreso();
};

let totalIngresos = () => {
  let totalIngresos = 0;
  for (let ingreso of ingresos) {
    totalIngresos += ingreso.valor;
  }
  return totalIngresos;
};

let totalEgresos = () => {
  let totalEgresos = 0;
  for (const iterator of Egresos) {
    totalEgresos += iterator.valor;
  }
  return totalEgresos;
};

let cargarCabecero = () => {
  let presupuesto = totalIngresos() - totalEgresos();
  let porcentajeEgreso = totalEgresos() / totalIngresos();
  document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
  document.getElementById("porcentaje").innerHTML =
    formatoPorcentaje(porcentajeEgreso);
  document.getElementById("ingresos").innerHTML = formatoMoneda(
    totalIngresos()
  );
  document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos());
};

const formatoMoneda = (valor) => {
  return valor.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimunFranctionDigits: 2,
  });
};

const formatoPorcentaje = (valor) => {
  return valor.toLocaleString("en-US", {
    style: "percent",
    minimunFranctionDigits: 2,
  });
};

const cargarIngesos = () => {
  let ingresosHTML = " ";

  for (let ingreso of ingresos) {
    ingresosHTML += crearIngresoHTML(ingreso);
  }
  document.getElementById("lista_ingresos").innerHTML = ingresosHTML;
};

const crearIngresoHTML = (ingresos) => {
  let ingresoHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${ingresos.descripcion}</div>
    <div class="derecha limpiarEstilos">
      <div class="elemento_valor">${formatoMoneda(ingresos.valor)}</div>
      <div class="elemento_eliminar">
        <button class="elemento_eliminar--btn">
            <ion-icon name="close-circle-outline"
            onclick = 'eliminarIngreso(${ingresos.id})'></ion-icon>
        </button>
      </div>
    </div>
  </div>
    `;

  return ingresoHTML;
};

const eliminarIngreso = (id) => {
  let indiceEliminar = ingresos.findIndex( ingreso => ingreso.id == id);
  ingresos.splice(indiceEliminar, 1);
  cargarCabecero();
  cargarIngesos();
};

const cargarEgreso = () => {
  let EgresoHTML = "";

  for (let egreso of Egresos) {
    EgresoHTML += crearEgreso(egreso);
  }

  document.getElementById("lista-egresos").innerHTML = EgresoHTML;
};

const crearEgreso = (egreso) => {
  let texto = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${egreso.descripcion}</div>
    <div class="derecha limpiarEstilos"> 
      <div class="elemento_valor">${formatoMoneda(egreso.valor)}</div>
      <div class="elemento_porcentaje">${formatoPorcentaje(
        totalEgresos() / totalIngresos()
      )}</div>
      <div class="elemento_eliminar">
         <button class="elemento_eliminar--btn">
          <ion-icon name="close-circle-outline"
          onclick = 'eliminarEgreso(${egreso.id})'></ion-icon>
         </button>
      </div>
    </div>
   
</div>
    `;
  return texto;
};

const eliminarEgreso = (id) => {
  let indiceEliminar = Egresos.findIndex( Egreso => Egreso.id == id);
  Egresos.splice(indiceEliminar, 1);
  cargarCabecero();
  cargarEgreso();
};

let agregarDato = () => {
    let forma = document.forms['forma'];
    let tipo = forma['tipo'];
    let descripcion = forma['descripcion'];
    let valor = forma['valor'];

    if(descripcion.value !== '' && valor.value !== '' ){
      if(tipo.value === 'ingreso'){
          ingresos.push( new Ingreso(descripcion.value, Number(valor.value)));

          cargarIngesos();
          cargarCabecero();
      }

      if(tipo.value === 'egreso'){
        Egresos.push( new Egreso(descripcion.value, Number(valor.value)));
        
        cargarIngesos();
        cargarCabecero();
      }
    }

}