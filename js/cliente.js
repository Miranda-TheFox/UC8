    /* Função para visualizar um projeto */
function visualizar(nome){

    alert("Você selecionou o protótipo: " + nome);

}

    /* Função para pesquisar projetos */
function pesquisar(){

    let texto = document.getElementById("pesquisa").value.toLowerCase();

    let cards = document.getElementsByClassName("card");

    for(let i = 0; i < cards.length; i++){

        let titulo = cards[i].getElementsByTagName("h3")[0].textContent.toLowerCase();

        if(titulo.includes(texto)){

            cards[i].style.display = "block";

        }

        else{

            cards[i].style.display = "none";

        }

    }

}