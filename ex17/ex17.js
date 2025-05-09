function verificarPrimo() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');
    const resultadoTexto = document.getElementById('resultadoTexto');

    if (isNaN(numero) || numero <= 1) {
        resultadoTexto.textContent = "Por favor, insira um número maior que 1.";
        resultado.style.display = 'block';
        return;
    }


    let isPrimo = true;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            isPrimo = false;
            break;
        }
    }

    if (isPrimo) {
        resultadoTexto.textContent = `${numero} é um número primo!`;
    } else {
        resultadoTexto.textContent = `${numero} não é um número primo.`;
    }

    resultado.style.display = 'block';
}
