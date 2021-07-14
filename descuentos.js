function valorFinal(precioOriginal, descuento) {
  var valorFinal = (precioOriginal * (100 - descuento)) / 100;
  return valorFinal;
}

////////HTML//////////

function onClickDescuento() {
  const InputPrice = document.getElementById("InputPrice").value;
  const InpitDiscount = document.getElementById("InpitDiscount").value;

  const precioFinal = valorFinal(InputPrice, InpitDiscount);

  const Resultado = document.getElementById("Resultado");

  Resultado.innerText = "El precio con descuento es: $" + precioFinal;
}
