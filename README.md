Este documento describe una implementación simple y efectiva de un programa de ‘Amigo Secreto’ usando HTML y JavaScript. El usuario ingresa nombres, los agrega a una lista y, al presionar un botón o la tecla Enter, el sistema selecciona un participante de forma aleatoria. Se incluyen el código fuente, explicación de la lógica.

1, Guarda los nombres de los amigos que se van agregando. 
const amigos = [];

2. Si el usuario presiona Enter dentro del input, se ejecuta agregarAmigo().
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    agregarAmigo();
  }
});


3, Hace que las funciones se puedan usar desde HTML con onclick="agregarAmigo()" o onclick="sortearAmigo()".
window.agregarAmigo = agregarAmigo;
window.sortearAmigo = sortearAmigo;
