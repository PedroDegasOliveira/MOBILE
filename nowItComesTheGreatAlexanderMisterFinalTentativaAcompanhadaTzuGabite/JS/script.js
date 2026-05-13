const escolher = document.getElementById("botao");
escolher.addEventListener("click", checarOperacao);

function validarInput(selectedValue) {
    return new Promise((resolve, reject) => {
        try {
            if (!selectedValue) {
                throw new Error("Nenhuma operação selecionada");
            }

            const infoPokemons = {
                Rayquaza: "Pozer",
                Giratina: "Um pouco menos pozer",
                Reshiram: "Parabéns, eu reconheço a sua força",
                Kyogre: "Melhor Baleia",
                Chiyu: "Melhor peixe existente"
            };

            const mostraPokemon = infoPokemons[selectedValue];
            if (!mostraPokemon) {
                throw new Error("Operação desconhecida");
            }
            resolve(mostraPokemon);

        } catch (error) {
            reject(error);
        }
    });

}

function checarOperacao() {
    const lista = document.getElementById("legendario");
    const escolhidoLista = lista.value;
    const mostrarEscolhido = document.getElementById("texto");

    try {
        validarInput(escolhidoLista)
            .then(mostrar => {
                mostrarEscolhido.innerHTML = `${mostrar} <br>
                <img src="${agoraImagens(escolhidoLista)} " alt="${escolhidoLista}">`;
            })
            .catch(error => {
                alert(error.message);
                mostrarEscolhido.textContent = error.message;
            });
    } catch (error) {
        alert(error.message);
        mostrarEscolhido.textContent = "Ocorreu um erro";
    }
}

function agoraImagens(pokemon) {
    const imagens = {
        Rayquaza: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/384.png",
        Giratina: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/487.png",
        Reshiram: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/643.png",
        Kyogre: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/382.png",
        Chiyu: "https://imgs.search.brave.com/hkl4Lb0Oz9mtSq3Oc6O5xHSEIETKY9CjKNEl4wXTiuo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kYi5w/b2tlbW9uZ29odWIu/bmV0L2ltYWdlcy9v/ZmZpY2lhbC9kZXRh/aWwvMTAwNC53ZWJw"
    }
    return imagens[pokemon];
}