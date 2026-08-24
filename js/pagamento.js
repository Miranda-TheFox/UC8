/* Função para finalizar o pagamento */
function finalizarPagamento(){

    /* Variáveis para armazenar os dados do formulário */
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let cartao = document.getElementById("cartao").value;

    /* Se os campos não estiverem preenchidos, exibe uma mensagem de erro */
    if(nome == "" || cpf == "" || cartao == ""){

        alert("Preencha todos os campos.");

    }else{

        /* Exibe uma mensagem de sucesso */
        alert("Pagamento realizado com sucesso!");

    }

}