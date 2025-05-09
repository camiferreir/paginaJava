function calcular() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operacao = document.getElementById("operacao").value;
    const resultado = document.getElementById("resultado");
  
    if (isNaN(num1) || isNaN(num2)) {
      resultado.innerHTML = "Por favor, insira números válidos.";
      return;
    }
  
    let resultadoCalculo;
  
    switch (operacao) {
      case "soma":
        resultadoCalculo = num1 + num2;
        break;
      case "subtracao":
        resultadoCalculo = num1 - num2;
        break;
      case "multiplicacao":
        resultadoCalculo = num1 * num2;
        break;
      case "divisao":
        if (num2 === 0) {
          resultado.innerHTML = "Erro: não é possível dividir por zero.";
          return;
        }
        resultadoCalculo = num1 / num2;
        break;
      default:
        resultado.innerHTML = "Erro: operação inválida.";
        return;
    }
  
    resultado.innerHTML = `Resultado: ${resultadoCalculo}`;
  }
  