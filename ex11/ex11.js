function calcularNotas() {
  let valor = parseInt(document.getElementById('valor').value);
  const resultado = document.getElementById('resultado');

  if (isNaN(valor) || valor < 0) {
    resultado.innerHTML = "Por favor, insira um valor válido.";
    return;
  }

  let notas100 = Math.floor(valor / 100);
  valor %= 100;

  let notas50 = Math.floor(valor / 50);
  valor %= 50;

  let notas10 = Math.floor(valor / 10);
  valor %= 10;

  let notas1 = valor;

  resultado.innerHTML = `
    <p>Notas de R$100: ${notas100}</p>
    <p>Notas de R$50: ${notas50}</p>
    <p>Notas de R$10: ${notas10}</p>
    <p>Notas de R$1: ${notas1}</p>
  `;
}
