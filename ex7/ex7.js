function adicionarItem() {
    const item = document.getElementById("item").value;
    const listaCompras = document.getElementById("listaCompras");


    if (item.trim() === "") {
        alert("Por favor, digite um item válido.");
        return;
    }


    const li = document.createElement("li");
    li.textContent = item;


    const btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";
    btnRemover.onclick = function () {
        listaCompras.removeChild(li);
    };


    li.appendChild(btnRemover);

    listaCompras.appendChild(li);


    document.getElementById("item").value = "";
}
