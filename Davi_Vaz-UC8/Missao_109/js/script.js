// Selecionando o painel de logs
const painellog = document.getElementById('log-painel');

// Função para registrar logs no painel
function registrarlog(message) {
    const novalinha = document.createElement('div');
    novalinha.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
    console.log(message);
    painellog.appendChild(novalinha);
}

// Selecionando elementos do DOM
const btnClique = document.getElementById('btn-clique');
const areaMouse = document.getElementById('area-mouse');

// evento de mouse: click
btnClique.addEventListener('click', function() {
    registrarlog('Evento de mouse: Evento "click" dispardo');

});

// evento de mouse: mouseenter
areaMouse.addEventListener('mouseenter', function() {
    areaMouse.textContent = "Mouse entrou na área!";
    areaMouse.style.backgroundColor = "#0d740d";
    registrarlog("Evento de mouse: Evento 'mouseenter' disparado");
});

// evento de mouse: mouseleave
areaMouse.addEventListener('mouseleave', function() {
    areaMouse.textContent = "Mouse saiu da área!";
    areaMouse.style.backgroundColor = "#740d0d";
    registrarlog("Evento de mouse: Evento 'mouseleave' disparado");
});

// evento de teclado: keydown
const campoteclado = document.getElementById('campo-teclado');
campoteclado.addEventListener('keydown', function(event) {
    registrarlog(`Evento de teclado: Evento 'keydown' disparado - Tecla pressionada: ${event.key}`);
});

// evento de teclado: keyup
campoteclado.addEventListener('keyup', function(event) {
    registrarlog(`Evento de teclado: Evento 'keyup' disparado - Tecla liberada: ${event.key}`);
});