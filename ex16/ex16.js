function contarTexto() {
    const texto = document.getElementById("texto").value.trim();


    const palavras = texto.split(/\s+/).filter(Boolean);
    const numPalavras = palavras.length;


    const letras = texto.replace(/\s+/g, '').length;

    document.getElementById("contagemPalavras").textContent = numPalavras;
    document.getElementById("contagemLetras").textContent = letras;

    document.getElementById("resultado").style.display = 'block';
}
