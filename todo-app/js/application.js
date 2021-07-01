const tarefaInput = document.getElementById('tarefa-input');
const tarefaForm = document.getElementById('tarefa-form');
const concluirTarefa = document.getElementById('concluir-btn');
const tarefas = document.getElementById('tarefas');

let contador = 0;

fetch('https://jsonplaceholder.typicode.com/todos')
    // neste momento convertemos json em objeto/array javascript
    .then(response => response.json())
    .then(json => {
        json.forEach(todo => {
            if (todo.completed === false) {
                addTarefa(todo.completed, todo.title);
            } 
        });

        // map
        // json.map(todo => {
        //     if (todo.completed === false) {
        //         addTarefa(todo.completed, todo.title);
        //     }
        // })

        // forma classica
        // for(let i = 0; i < json.length; i++) {
        //     json[i].completed
        // }
    });

// addEventListener deixa colocarmos multiplos eventos
// no mesmo elemento, rodando todos ao mesmo tempo quando disparados
tarefaForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // verifica se o campo tem mais do que 3 chars
    if (tarefaInput.value.length <= 3) {
        tarefaInput.classList.add('is-invalid');
        //tarefaInput.focus();

        const feedback = tarefaInput.parentNode.querySelector('.invalid-feedback')
        
        const totalDigitado = tarefaInput.value.length;

        // feedback.innerText = 'Você digitou ' + totalDigitado + ' chars, digite 4 caracteres ou mais para a tarefa';
        feedback.innerText = `Você digitou ${totalDigitado} chars, digite 4 caracteres ou mais para a tarefa`;

        return false;
    }

    tarefaInput.classList.remove('is-invalid');

    addTarefa(false, tarefaInput.value);

    // Atua como um limpador dos dados
    tarefaForm.reset();
});

// Criamos um função que adiciona tarefa recebendo 2 parametros
// se passar true ela vem ativa, se não vem desativa
function addTarefa(status, tarefaDigitada) {
    contador++;

    const checkedString = status ? 'checked' : '';

    const tarefaTexto = `
        <li class="list-group-item">
            <div class="form-check d-flex justify-content-between align-items-center">
                <input type="checkbox" id="tarefa-${contador}" class="form-check-input" ${checkedString}>
                <label for="tarefa-${contador}" class="form-check-label flex-grow-1 ms-3">
                    ${tarefaDigitada}
                </label>
                <button class="btn btn-danger" onclick="deletar(this);">Deletar</button>
            </div>
        </li>
    `;

    // console.log(tarefaInput.value);
    tarefas.innerHTML += tarefaTexto;
}

// .addEventListener ** não precisamos
// estamos usando Arrow function, mesma coisa que function () { }
// **salvo alguns detalhes que são diferentes 
concluirTarefa.onclick = () => {
    // querySelector esta pegando todos os input marcados como checked
    const checks = document.querySelectorAll('#tarefas input:checked');

    // elemento.remove()
    // console.log(checks);
    // Esta andando sobre os elementos dentro da variavel
    // checks
    checks.forEach(elemento => {
        elemento.parentNode
                .parentNode
                .remove();
    });
}

function deletar(elemento) {
    elemento
        .parentNode
        .parentNode
        .remove();
}

// Como arraw function
// const deletar = (elemento) => {
//     elemento
//         .parentNode
//         .parentNode
//         .remove();
// }