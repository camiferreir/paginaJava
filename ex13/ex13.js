function gerarSenha() {
  const tamanho = parseInt(document.getElementById("tamanho").value);
  const campoSenha = document.getElementById("senhaGerada");

  if (isNaN(tamanho) || tamanho < 4 || tamanho > 32) {
    campoSenha.textContent = "Informe um tamanho entre 4 e 32.";
    return;
  }

  const letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeros = "0123456789";
  const simbolos = "!@#$%^&*()-_=+[]{};:,.<>?";
  const todos = letras + numeros + simbolos;

  let senha = "";
  for (let i = 0; i < tamanho; i++) {
    const aleatorio = Math.floor(Math.random() * todos.length);
    senha += todos[aleatorio];
  }

  campoSenha.textContent = senha;
}
