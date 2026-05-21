const form2 = document.getElementById("formulario");

form2.addEventListener("submit", (e) => {
    e.preventDefault();
    let contadorErros = 0;

    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const anoNasc = document.getElementById("anoNasc").value;
    const senha = document.getElementById("senha").value;
    const confSenha = document.getElementById("confSenha").value;

    // Validações
    if (!nome) {
        contadorErros++;
        document.getElementById("erroNome").textContent = "1 - Nome é obrigatório.";
    }

    if (!cpf || cpf.length !== 11 || !/^\d+$/.test(cpf)) {
        contadorErros++;
        document.getElementById("erroCpf").textContent = "2 - CPF inválido.";
    }

    const anoAtual = new Date().getFullYear(); // engraçado que existe uma função pra isso
    if (!anoNasc || anoNasc > anoAtual) {
        contadorErros++;
        document.getElementById("erroAno").textContent = "3 - Ano inválido.";
    }

    if (senha.length < 6) {
        contadorErros++;
        document.getElementById("erroSenha").textContent = "4 - Senha muito curta.";
    }

    if (confSenha !== senha) {
        contadorErros++;
        document.getElementById("erroConfSenha").textContent = "5 - Senhas não conferem.";
    }
    if (contadorErros > 0) {
        let lista = "<ul>";
        for (let i = 1; i <= contadorErros; i++) {
            lista += "<li>Erro número " + i + "</li>";  //n sabia que isso era possivel, esse html estragando a parte boa
        }
        lista += "</ul>";
        document.getElementById("erros").innerHTML = lista;
    } else {
        alert("Cadastro realizado com sucesso!");
    }
});