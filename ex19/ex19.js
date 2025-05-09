let numeroSecreto;
let tentativas;

iniciarJogo();

function iniciarJogo() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  tentativas = 0;
  document.getElementById('mensagem').textContent = '';
  document.getElementById('palpite').value = '';
}

function verificarPalpite() {
  const palpite = parseInt(document.getElementById('palpite').value);
  const mensagem = document.getElementById('mensagem');
  tentativas++;

  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    mensagem.textContent = 'Digite um número entre 1 e 100.';
    return;
  }

  if (palpite === numeroSecreto) {
    mensagem.textContent = `Parabéns! Você acertou em ${tentativas} tentativa(s)!`;
  } else if (palpite < numeroSecreto) {
    mensagem.textContent = 'Tente um número MAIOR.';
  } else {
    mensagem.textContent = 'Tente um número MENOR.';
  }
}

function reiniciarJogo() {
  iniciarJogo();
}
