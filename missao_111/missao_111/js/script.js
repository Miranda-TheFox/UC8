//seleciona o botão do gravador e o elemento de status
const botaoGravador = document.getElementById("btn-gravador");

//seleciona o elemento de status
const statusGravacao = document.getElementById("status-gravacao");

//adiciona o evento de clique ao botão do gravador
botaoGravador.addEventListener("mousedown", () => {
    statusGravacao.textContent = "Status: Capturando áudio...";
    //altera a cor e o texto do botão para indicar que está gravando
    botaoGravador.style.backgroundColor = "#e74c3c";
    botaoGravador.textContent = "🔴 Gravando... Não solte!";
});

//adiciona o evento de soltar ao botão do gravador
botaoGravador.addEventListener("mouseup", () => {
    statusGravacao.textContent = "Status: Gravação concluída e enviada!";
    //altera a cor e o texto do botão para indicar que a gravação foi concluída'
    botaoGravador.style.backgroundColor = "#3498db";
    botaoGravador.textContent = "🎤 Clique e Segure para Gravar";
});

