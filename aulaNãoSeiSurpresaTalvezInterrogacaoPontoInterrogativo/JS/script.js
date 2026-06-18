var tabela1 = document.getElementsByClassName("titulo");
var tabela2 = document.getElementsByClassName("pagina");

var mangas = document.getElementById("funny");
mangas.addEventListener("mouseover", () => {
    var i;
    for(i=0; i<tabela1.length; i++){
        tabela1[i].style.backgroundColor = "blue";
        tabela2[i].style.backgroundColor = "white";
    }
});

var paginas = document.getElementById("notFunny");
paginas.addEventListener("mouseover", () => {
    var x
    for(x=0; x<tabela2.length; x++){
        tabela2[x].style.backgroundColor = "green";
        tabela1[x].style.backgroundColor = "white";
    }
})