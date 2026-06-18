

function armazenarAdicionar(){
    let pai = document.getElementById("listona");
    var itens = document.getElementsByTagName("input");
    for(let i = 0; i<itens.length; i++){
        let novoElemento = document.createElement("li");
            novoElemento.textContent = itens[i].value;
            pai.appendChild(novoElemento);
    }
    
    
}