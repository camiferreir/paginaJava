function sortearNumero() {
  const minimo = parseInt(document.getElementById('minimo').value);
  const maximo = parseInt(document.getElementById('maximo').value);
  const resultado = document.getElementById('resultado');


  if (isNaN(minimo) || isNaN(maximo) || minimo >= maximo) {
    resultado.textContent = "Por favor, insira valores válidos!";
    return;
  }

  const numeroSorteado = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
  resultado.textContent = `Número sorteado: ${numeroSorteado}`;
}
