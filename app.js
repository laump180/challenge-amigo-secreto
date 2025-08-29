let amigos = [];

//Agregar amigo a la lista
function agregarAmigo() {
    const input = document.getElementById ('amigo');
    const nombre = input.value.trim();

    if (nombre === '') {
        alert ('Por favor, inserte un nombre.');
        return;
    }

    amigos.push(nombre);
    mostrarAmigos();
    input.value = '';
}


//Mostrar los nombres en la lista
function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(amigos => {
        const li = document.createElement ('li');
        li.textContent = amigos;
        lista.appendChild (li);
    });
}


//Sortear amigo

function sortearAmigo () {
    const resultado = document.getElementById ('resultado');
    resultado.innerHTML = '';
   

   const ganador = Math.floor(Math.random()* amigos.length);
   const nombreGanador = amigos [ganador];

   const li = document.createElement ('li');
   li.textContent = `Tu amigo secreto es ${nombreGanador}`;
   resultado.appendChild(li);
}