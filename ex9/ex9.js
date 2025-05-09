function mudarCor(cor) {

    document.getElementById("vermelho").classList.remove("active");
    document.getElementById("amarelo").classList.remove("active");
    document.getElementById("verde").classList.remove("active");


    document.getElementById(cor).classList.add("active");
}
