function verificarAprovacao() {
  let nota = document.getElementById("nota").value;
  let resultado = document.getElementById("resultado");

  if (nota >= 6) {
    resultado.textContent = "Aluno aprovado!";
  } else {
    resultado.textContent = "Aluno reprovado.";
  }
}
