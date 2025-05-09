let votos = {
    Calabresa: 0,
    Mussarela: 0,
    Frango: 0,
    'Quatro Queijos': 0
};

function votar() {
    const opcoes = document.getElementsByName('opcao');
    let opcaoEscolhida = null;

    for (let i = 0; i < opcoes.length; i++) {
        if (opcoes[i].checked) {
            opcaoEscolhida = opcoes[i].value;
            break;
        }
    }

    if (!opcaoEscolhida) {
        alert("Por favor, escolha uma opção antes de votar.");
        return;
    }


    votos[opcaoEscolhida]++;


    const totalVotos = votos.Calabresa + votos.Mussarela + votos.Frango + votos['Quatro Queijos'];
    const porcentagem = (voto) => ((voto / totalVotos) * 100).toFixed(1);


    document.getElementById("resultadoCalabresa").textContent = `Calabresa: ${votos.Calabresa} votos (${porcentagem(votos.Calabresa)}%)`;
    document.getElementById("resultadoMussarela").textContent = `Mussarela: ${votos.Mussarela} votos (${porcentagem(votos.Mussarela)}%)`;
    document.getElementById("resultadoFrango").textContent = `Frango: ${votos.Frango} votos (${porcentagem(votos.Frango)}%)`;
    document.getElementById("resultado4Queijos").textContent = `Quatro Queijos: ${votos['Quatro Queijos']} votos (${porcentagem(votos['Quatro Queijos'])}%)`;

    document.getElementById("resultados").style.display = 'block';
}
