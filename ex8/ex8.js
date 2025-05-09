function verificarPalindromo() {
    const texto = document.getElementById("texto").value.trim().toLowerCase();
    const resultado = document.getElementById("resultado");


    const textoLimpo = texto.replace(/[^a-z0-9]/g, '');


    const textoInvertido = textoLimpo.split('').reverse().join('');

    if (textoLimpo === textoInvertido) {
        resultado.innerHTML = `"${texto}" é um palíndromo!`;
    } else {
        resultado.innerHTML = `"${texto}" não é um palíndromo.`;
    }
}
