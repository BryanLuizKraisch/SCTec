function calcularPorcentagem() {
  let valor = document.getElementById("valor").value;
  let porcentagem = document.getElementById("porcentagem").value;
  let valorComDesconto = valor - valor * (porcentagem / 100);

  if (porcentagem > 100 || porcentagem < 0) {
    document.getElementById("resultado").innerHTML = "porcentagem inválida";
  } else {
    document.getElementById("resultado").innerHTML =
      "valor com desconto: " + valorComDesconto;
  }
}
