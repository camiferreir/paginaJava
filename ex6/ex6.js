function gerarTabuada() {
    const numero = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");
  
    // Verificação de entrada válida
    if (isNaN(numero) || numero <= 0) {
      resultado.innerHTML = "Por favor, insira um número válido.";
      return;
    }
  
    let tabuada = "<ul>";
  
    // Gerar a tabuada de 1 a 10
    for (let i = 1; i <= 10; i++) {
      tabuada += `<li>${numero} x ${i} = ${numero * i}</li>`;
    }
  
    tabuada += "</ul>";
  
    resultado.innerHTML = tabuada;
  }
  