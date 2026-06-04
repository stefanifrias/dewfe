function validarSenha() {
    const senha = document.getElementById("senha");
    const msg = document.getElementById("msgSenha");

    if (senha.value.length < 8) {
        senha.className = "invalida";
        msg.textContent = "Senha deve ter pelo menos 8 caracteres";
        msg.className = "invalida";
    } else {
        senha.className = "valida";
        msg.textContent = "Senha válida";
        msg.className = "valida";
    }
}

function toggleSenha() {
    const senha = document.getElementById("senha");
    senha.type = senha.type === "password" ? "text" : "password";
}

function toggleEstudante() {
    const campos = document.getElementById("camposEstudante");
    const checkbox = document.getElementById("estud");
    campos.style.display = checkbox.checked ? "block" : "none";
}