// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista donde guardaremos los nombres
const amigos = [];

// 1) Agregar nombres con validación y mostrar la lista
function agregarAmigo() {
  const input = document.getElementById('amigo');
  const nombre = (input.value || '').trim();

  if (!nombre) {
    alert('Por favor, ingresa un nombre válido.');
    return;
  }

  amigos.push(nombre);
  input.value = '';
  renderLista();
}

// 2) Pintar la lista en pantalla
function renderLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';

  amigos.forEach((n) => {
    const li = document.createElement('li');
    li.textContent = n;
    lista.appendChild(li);
  });

  // Limpia el resultado anterior si se agrega alguien nuevo
  document.getElementById('resultado').textContent = '';
}

// 3) Sortear un amigo aleatoriamente y mostrar el resultado
function sortearAmigo() {
  if (amigos.length === 0) {
    alert('Agrega al menos un nombre antes de sortear.');
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const elegido = amigos[indice];

  document.getElementById('resultado').textContent =
    `🎉 Tu amigo secreto es: ${elegido}`;
}
