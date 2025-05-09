function calcularMedia() {
  const input = document.getElementById('notas').value;
  const resultado = document.getElementById('resultado');

  const notas = input.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));

  if (notas.length < 3) {
    resultado.textContent = "Digite pelo menos 3 notas válidas.";
    resultado.style.color = "red";
    return;
  }

  const soma = notas.reduce((acc, n) => acc + n, 0);
  const media = soma / notas.length;

  let status = '';
  if (media >= 7) {
    status = 'Aprovado ✅';
    resultado.style.color = "green";
  } else if (media >= 5) {
    status = 'Recuperação ⚠️';
    resultado.style.color = "orange";
  } else {
    status = 'Reprovado ❌';
    resultado.style.color = "red";
  }

  resultado.textContent = `Média: ${media.toFixed(2)} - ${status}`;
}
