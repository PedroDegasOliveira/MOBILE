function semparcela(){
valVista = parseFloat(document.getElementById("vista").value);
document.getElementById("result").innerHTML = valVista;
document.getElementById("valor").innerHTML = "O valor já com o acrescimo e: "+ valVista;
document.getElementById("valorParcela").innerHTML = "O valor da sua unica parcela e: "+ valVista;
}

function dezporcento(){
valdez = parseFloat(document.getElementById("vista").value);
document.getElementById("result").innerHTML = valdez+((valdez/100)*10);
document.getElementById("valor").innerHTML = "O valor já com o acrescimo e: "+ valdez+((valdez/100)*10);
document.getElementById("ValorParcela").innerHTML = "O valor já com o acrescimo e: "+ valdez+((valdez/100)*10);
}

function vinteporcento(){
valvinte = parseFloat(document.getElementById("vista").value);
document.getElementById("result").innerHTML = valvinte+((valvinte/100)*20);
document.getElementById("valor").innerHTML = "O valor já com o acrescimo e: "+ valvinte+((valvinte/100)*20);
document.getElementById("ValorParcela").innerHTML = "O valor já com o acrescimo e: "+ valvinte+((valvinte/100)*20);
}