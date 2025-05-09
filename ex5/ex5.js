function verificarIdade() {
    const anoNascimento = parseInt(document.getElementById("anoNascimento").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(anoNascimento) || anoNascimento <= 0) {
        resultado.innerHTML = "Por favor, insira um ano de nascimento válido.";
        return;
    }

    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - anoNascimento;

    let classificacao = "";


    if (idade < 18) {
        classificacao = "Menor de idade";
    } else if (idade >= 18 && idade <= 60) {
        classificacao = "Adulto";
    } else {
        classificacao = "Idoso";
    }

    resultado.innerHTML = `Você tem ${idade} anos. Classificação: ${classificacao}`;
}

