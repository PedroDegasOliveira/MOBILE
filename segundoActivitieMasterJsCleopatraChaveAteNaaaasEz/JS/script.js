const mutchatcho = document.getElementById("redutton");
mutchatcho.addEventListener("click", validacoes);

function validacoes() {
    const lista = document.getElementById("categoria");
    const escolhidoLista = lista.value;
    const mostrarEscolhido = document.getElementById("texto"); //Reutilização de código be like

    switch (escolhidoLista) { //eu usaria até uma camiseta com uma estampa de switch, simpatizo dms
        case "videogames":
            mostrarEscolhido.textContent = "Você escolheu a categoria de videogames!"; //agora que aprendi oq é textContent ta no modo default
            break;
        case "colecionaveis":
            mostrarEscolhido.textContent = "Você escolheu a categoria de colecionáveis!";
            break;
        case "pizza":
            mostrarEscolhido.textContent = "Você escolheu a categoria de pizza!";
            break;
        default:
            mostrarEscolhido.textContent = "Por favor, escolha uma categoria válida.";
    }

    //Será que o próprio mestre vai ver esses comentarios? 
}
