    /* Variável para armazenar o nome do projeto */
function adicionarProjeto() {


    let input = document.getElementById("nomeProjeto");
    
    let nome = input.value;

    if (nome == "") {

        alert("Digite o nome do protótipo.");

        return;

    }

    /* Variável para armazenar a lista de projetos */
    let lista = document.getElementById("lista");

    let item = document.createElement("li");

    item.innerHTML = `
        ${nome}

        <button onclick="editarProjeto(this)">
            Editar
        </button>

        <button onclick="removerProjeto(this)">
            Excluir
        </button>
    `;

    lista.appendChild(item);

    input.value = "";

}

/* Função para remover um projeto */
function removerProjeto(botao) {

    botao.parentElement.remove();

}

function editarProjeto(botao) {

    let novoNome = prompt("Digite o novo nome:");

    if (novoNome != "") {

        botao.parentElement.firstChild.textContent = novoNome + " ";

    }

}