// Variables globales
let amigoSecreto = []; //arreglo que guarda la lista de los amigos

// Función para añadir amigos a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const listaAmigos = document.getElementById('listaAmigos');
    const nombre = inputAmigo.value;

    if (nombre !== "") {
        amigoSecreto.push(nombre);
        const li = document.createElement('li');
        li.textContent = nombre;
        listaAmigos.appendChild(li);
        inputAmigo.value = "";
    } else {
        alert("Por favor, escribe un nombre.");
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    if (amigoSecreto.length > 1) {
        const indiceAleatorio = Math.floor(Math.random() * amigoSecreto.length);
        resultado.textContent = "El amigo secreto es: " + amigoSecreto[indiceAleatorio];
    } else {
        alert("Debe haber al menos dos amigos para sortear.");
    }
}
