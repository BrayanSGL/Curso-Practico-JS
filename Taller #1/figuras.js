//Codigo del cuadrado

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

//Codigo del triangulo

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

//Codigo del circulo

function circunferencia(radio) {
  return 2 * radio * Math.PI;
}

function areaCirculo(radio) {
  return radio * radio * Math.PI;
}

///////////// Empezamos HTML

function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

function calcularAreaTriangulo() {
  const lado1 = document.getElementById("InputTriangulo1").value;
  const lado2 = document.getElementById("InputTriangulo2").value;
  const base = document.getElementById("InputTriangulo3").value;

    const Area = areaTriangulo()
}
