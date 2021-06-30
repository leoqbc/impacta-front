const tarefaInput = document.getElementById('tarefa-input');
const tarefaForm = document.getElementById('tarefa-form');
const concluirTarefa = document.getElementById('concluir-btn');
const tarefas = document.getElementById('tarefas');

let contador = 0;

// addEventListener deixa colocarmos multiplos eventos
// no mesmo elemento, rodando todos ao mesmo tempo quando disparados
tarefaForm.addEventListener('submit', function (event) {
    event.preventDefault();

    contador++;

    const tarefaTexto = `
        <li class="list-group-item">
            <div class="form-check">
                <input type="checkbox" id="tarefa-${contador}" class="form-check-input">
                <label for="tarefa-${contador}" class="form-check-label d-block">
                    ${tarefaInput.value}
                </label>
            </div>
        </li>
    `;

    // console.log(tarefaInput.value);
    tarefas.innerHTML += tarefaTexto;

    // Atua como um limpador dos dados
    tarefaForm.reset();
});

// .addEventListener ** não precisamos
// estamos usando Arrow function, mesma coisa que function () { }
// **salvo alguns detalhes que são diferentes 
concluirTarefa.onclick = () => {
    const checks = document.querySelectorAll('#tarefas input:checked');

    console.log(checks);
}

// function () { }

// let nomeCompleto = 'Leonardo';

// // concatenação
// nomeCompleto += ' Tumadjian';

// nomeCompleto += ' Da Silva';

// nomeCompleto // Leonardo Tumadjian Da Silva