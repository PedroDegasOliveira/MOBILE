let img1 = document.getElementById("matutino");
let img2 = document.getElementById("noturno");
let img3 = document.getElementById("diurno");

let alterarTamanhoMais = document.getElementById("mais");
alterarTamanhoMais.addEventListener("click", function()  {
    img1.style.width= (img1.offsetHeight +30)+"px";
    img1.style.height= (img1.offsetHeight+30)+"px";

    img2.style.width= (img1.offsetHeight +30)+"px";
    img2.style.height= (img1.offsetHeight +30)+"px";

    img3.style.width= (img1.offsetHeight +30)+"px";
    img3.style.height= (img1.offsetHeight +30)+"px";
});

let alterarTamanhoMenos = document.getElementById("menos");
alterarTamanhoMenos.addEventListener("click", function()  {
    img1.style.width= (img1.offsetHeight - 30) + "px";
    img1.style.height= (img1.offsetHeight - 30) + "px";

    img2.style.width = (img2.offsetWidth - 30) + "px";
    img2.style.height = (img2.offsetHeight - 30) + "px";

    img3.style.width= (img3.offsetHeight - 30) + "px";
    img3.style.height= (img3.offsetHeight - 30) + "px";
});