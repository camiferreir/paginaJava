function verificarParOuImpar() {
    const numero = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");
  
    if (isNaN(numero)) {
      resultado.textContent = "Por favor, digite um número válido.";
      return;
    }
  
    resultado.textContent = numero % 2 === 0 ? "O número é Par." : "O número é Ímpar.";
  }
  