const input = document.getElementById('amigo');
const lista = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

// Estado
const amigos = [];


function actualizarLista() {
  lista.innerHTML = '';
  amigos.forEach((nombre) => {
    const li = document.createElement('li');
    li.textContent = nombre;
    lista.appendChild(li);
  });
}

function limpiarResultado() {
  resultado.innerHTML = '';
}

function mostrarMensaje(mensaje, tipo = 'info') {
  limpiarResultado();
  const li = document.createElement('li');
  li.textContent = mensaje;

  // Verde para éxito (coincide con tu CSS), rojo para error
  if (tipo === 'error') {
    li.style.color = '#E53935';
    li.style.fontWeight = '700';
  }

  resultado.appendChild(li);
}


function agregarAmigo() {
  const nombre = input.value.trim();

  if (!nombre) {
    mostrarMensaje('Por favor, escribe un nombre antes de añadir.', 'error');
    input.focus();
    return;
  }

  // Evita duplicados (insensible a mayúsculas/minúsculas)
  const yaExiste = amigos.some((n) => n.toLowerCase() === nombre.toLowerCase());
  if (yaExiste) {
    mostrarMensaje('Ese nombre ya está en la lista.', 'error');
    input.select();
    return;
  }

  amigos.push(nombre);
  actualizarLista();
  limpiarResultado();
  input.value = '';
  input.focus();
}

function sortearAmigo() {
  limpiarResultado();

  if (amigos.length === 0) {
    mostrarMensaje('Agrega al menos un nombre antes de sortear.', 'error');
    input.focus();
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const elegido = amigos[indice];
  mostrarMensaje(`🎉 El amigo secreto es: ${elegido}`);
}

//  input
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    agregarAmigo();
  }
});


window.agregarAmigo = agregarAmigo;
window.sortearAmigo = sortearAmigo;
