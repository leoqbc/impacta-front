const formulario = document.getElementById('formulario');
const nome = document.getElementById('nome_usuario');
const sobrenome = document.getElementById('sobrenome_usuario');

// 1. selecionamos o <section id="resposta">
const respostaTag = document.getElementById('resposta');

// primeiro <h1>
// <h1><strong>Teste 123</strong></h1>
const primeiroH1 = document.querySelector('h1');

// console.log(primeiroH1.innerHTML);

// camelCase
primeiroH1.style.fontFamily = 'Verdana';
primeiroH1.style.color = '#A2EA2E';

// console.log(formulario);

let texto = "Olá " + nome.value + " seja bem vindo";
// Olá Pedro seja bem vindo - template string 

// 2. formas de colocar ação
formulario.onsubmit = function (event) {
    event.preventDefault();

    respostaTag.innerHTML = "Olá <strong>" + 
                            nome.value + " " + 
                            sobrenome.value + 
                            "</strong> seja bem vindo(a) a Impacta";
}

sobrenome.onblur = formulario.onsubmit;


// alert('Olá mundo');