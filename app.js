let listaAmigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();
    const lista = document.getElementById("listaAmigos");

    if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    listaAmigos.push(nombreAmigo);
    const itemLista = document.createElement("li");
    itemLista.textContent = nombreAmigo;
    lista.appendChild(itemLista);
    inputAmigo.value = "";
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Agrega al menos un nombre antes de sortear.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${listaAmigos[indiceAleatorio]}</strong></li>`;
}
