Guarda los nombres de los amigos que se van agregando. 
const amigos = [];

Si el usuario presiona Enter dentro del input, se ejecuta agregarAmigo().
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    agregarAmigo();
  }
});


Hace que las funciones se puedan usar desde HTML con onclick="agregarAmigo()" o onclick="sortearAmigo()".
window.agregarAmigo = agregarAmigo;
window.sortearAmigo = sortearAmigo;
