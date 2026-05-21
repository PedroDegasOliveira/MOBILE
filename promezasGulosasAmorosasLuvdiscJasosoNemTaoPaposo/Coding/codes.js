const d = document.getElementById('enviar');
d.addEventListener('click', checarOp);

function checarOp(event) {
    event.preventDefault(); //aprendi sobre isso agora
    try {
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const idade = document.getElementById("idade").value;   // eu n tinha entendido pq n precisava pegar essas infos,
        const senha = document.getElementById("senha").value;   //já que estava seguindo como base um código diferente acabei refazendo maioria do js

        if (!nome || nome.length < 3) throw "Nome deve ter pelo menos 3 caracteres.";
        if (!email.includes("@")) throw "E-mail inválido.";
        if (isNaN(idade) || idade < 18) throw "Idade deve ser número e ou maior ou igual a 18.";
        if (senha.length < 6) throw "Senha deve ter pelo menos 6 caracteres.";

        alert("Cadastro realizado com sucesso!");
    } catch (error) {
        alert("Erro: " + error);
    }
}
