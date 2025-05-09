function validarCadastro() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const mensagem = document.getElementById('mensagem');


    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nome || !email || !senha) {
        mensagem.textContent = "Por favor, preencha todos os campos.";
        mensagem.style.color = "red";
    } else if (!emailValido.test(email)) {
        mensagem.textContent = "Digite um e-mail válido.";
        mensagem.style.color = "red";
    } else {
        mensagem.textContent = "Cadastro realizado com sucesso!";
        mensagem.style.color = "green";
    }

    mensagem.style.display = "block";
}
