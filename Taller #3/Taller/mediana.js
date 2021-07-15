function calcularPromedio(lista) {
  //let sumaLista = 0;
  //for (let i = 0; i < lista.length; i++) {
  //sumaLista += lista[i];
  //}

  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}

const lista1 = [100, 200, 300, 1000000];

const mitadDeLista1 = parseInt(lista1.length / 2);

function esPar(numero) {
  if (numero % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

let mediana;

if (esPar(lista1.length)) {
  const elemento1 = lista1[mitadDeLista1];
  const elemento2 = lista1[mitadDeLista1 - 1];

  const promedio = calcularPromedio([elemento1, elemento2]);

  mediana = promedio;
} else {
  mediana = lista1[mitadDeLista1];
}
