let amigos = [];

function agregarAmigo() {
  let input = document.getElementById("amigo");
  let nombre = input.value;

  if (nombre === "") {
    alert("Escribe un nombre válido.");
    return;
  }

  amigos.push(nombre);
  input.value = "";

  document.getElementById("listaAmigos").innerHTML = amigos.map(a => `<li>${a}</li>`).join("");
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Agrega al menos un nombre.");
    return;
  }

  let indice = Math.floor(Math.random() * amigos.length);
  document.getElementById("resultado").innerHTML = `<li>Tu amigo secreto es: ${amigos[indice]}</li>`;
}
