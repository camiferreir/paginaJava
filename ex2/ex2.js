function contar() {
    const inicio = parseInt(document.getElementById("inicio").value);
    const fim = parseInt(document.getElementById("fim").value);
    let passo = parseInt(document.getElementById("passo").value);
    const resultado = document.getElementById("resultado");
  
    if (isNaN(inicio) || isNaN(fim) || isNaN(passo) || passo <= 0) {
      resultado.innerHTML = "Por favor, preencha todos os campos corretamente (passo > 0).";
      return;
    }
  
    let contagem = "";
    if (inicio < fim) {
      for (let i = inicio; i <= fim; i += passo) {
        contagem += `${i} `;
      }
    } else {
      for (let i = inicio; i >= fim; i -= passo) {
        contagem += `${i} `;
      }
    }
  
    resultado.innerHTML = contagem.trim();
  }
  