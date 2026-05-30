let contador = 0;

function adicionarTarefa() {
    const inputElement = document.getElementById('nova_tarefa');
    const mensagemElement = document.getElementById('mensagem');
    const listaTarefas = document.getElementById('lista_tarefas');
    const btnExcluir = document.getElementById('btn_excluir');

    let tarefa = inputElement.value;

    if (tarefaValida(tarefa)) {
        let novaTarefa = document.createElement('li');
        novaTarefa.textContent = tarefa;
        listaTarefas.appendChild(novaTarefa);

        mensagemElement.textContent = "Adicionado com sucesso";
        mensagemElement.style.color = 'green';

        contador++;
        btnExcluir.style.display = 'block'; // mostra o botão ao adicionar tarefa
    } else {
        mensagemElement.textContent = "Tarefa inválida, digite ao menos 5 caracteres";
        mensagemElement.style.color = 'red';
    }

    inputElement.value = "";
    inputElement.focus();
}

function tarefaValida(tarefa) {
    return tarefa.trim().length >= 5;
}

function excluirTodos() {
    const listaTarefas = document.getElementById('lista_tarefas');
    const mensagemElement = document.getElementById('mensagem');
    const btnExcluir = document.getElementById('btn_excluir');

    listaTarefas.innerHTML = "";
    contador = 0;

    mensagemElement.textContent = "Todas as tarefas foram excluídas";
    mensagemElement.style.color = 'green';

    btnExcluir.style.display = 'none'; // esconde o botão após excluir tudo
}