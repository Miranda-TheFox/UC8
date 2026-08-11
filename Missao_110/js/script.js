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


//evento de formulário: input
const meuformulario = document.getElementById('meu-formulario');
const campoinput = document.getElementById('campo-input');

campoinput.addEventListener('input', function(event) {

    registrarlog(`[INPUT] formulario: Evento "input" disparado - Valor atual: "${campoinput.value}"`);
});


//evento de formulário: submit (acesso ao evento ed envio via id do formulário)
//meuformulario.addEventListener('submit', function(event) {
    //event.preventDefault(); // Evita o envio do formulário
  //  registrarlog(`[SUBMIT] formulario: Evento "submit" disparado - Valor do campo: "${campoinput.value}"`);
//});


//isso vai "funcionar", mas vai capturar apenas o clique no botao de envio, nao o envio do formulario em si. para poder capturar o envio do formulario
//é melhor usar o evento 'submit' no proprio formulário
// const campoenvio = document.getElementById('campo-envio');
// campoenvio.addEventListener('click', function(event) {
//     event.preventDefault(); // Evita o envio do formulário
//     registrarlog("[SUBMIT] formulario: evento 'submit' disparado!");
// });


// const campoenvio = document.getElementById('campo-envio');
// campoenvio.addEventListener('submit', function(event) {
//     event.preventDefault(); // Evita o envio do formulário
//     registrarlog("[SUBMIT] formulario: evento 'submit' disparado!");
// });