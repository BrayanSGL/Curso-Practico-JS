function calcularMediana(lista) {
  lista = lista.sort(function (a, b) {
    return a - b;
  });
  const mitad = parseInt(lista.length / 2);
  if (lista.length % 2 == 0) {
    const media = (lista[mitad] + lista[mitad - 1]) / 2;
    return media;
  } else {
    return lista[mitad];
  }
}

//---------------HTML----------------------
let listaEntrada = [];

function agregarDatos() {
  const entradaDatos = document.getElementById("entradaDatos").value;
  listaEntrada.push(parseInt(entradaDatos));
  const datos = document.getElementById("Datos");
  datos.innerText = "Los Datos actuales son: " + listaEntrada;
  const resultado = document.getElementById("Resultado");
  resultado.innerText = "La mediana es: " + calcularMediana(listaEntrada);
  console.log(listaEntrada);
  document.getElementById("formulario").reset();
}
