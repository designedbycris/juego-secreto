// Array global para almacenar los amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
const input = document.getElementById("amigo");
const nombre = input.value.trim();

// Validar entrada
if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;

}
// Agregar al array
amigos.push(nombre);

// Mostrar lista actualizada
mostrarAmigos();

// Limpiar el campo de entrada
input.value = "";
input.focus();
}

// Función para mostrar los amigos en la lista
function mostrarAmigos() {
const lista = document.getElementById("listaAmigos");

// Limpiar lista para evitar duplicados
lista.innerHTML = "";

// Recorrer el array y crear elementos <li>
for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
}
}

// Función para sortear un amigo al azar
function sortearAmigo() {
const resultado = document.getElementById("resultado");

// Validar que haya amigos
if (amigos.length === 0) {
    alert("No hay amigos para sortear.");
    return;
}

// Generar índice aleatorio
let indiceAleatorio = Math.floor(Math.random() * amigos.length);

// Obtener el nombre sorteado
let amigoSorteado = amigos[indiceAleatorio];

// Mostrar resultado (limpia antes por si hay más sorteos)
resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}