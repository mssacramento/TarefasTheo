/*
1º Vamos selecionar o input, o Botão e a lista;
2º Capturar o evento click;
3º Criar função para criar a tarefa;
4º Criar as linhas de tarefas adicionadas;
5º Capturar o evento keypress;
6º Limpar o imput pós adicionar a tarefa;
7º Criar uma função para apagar tarefas pai
8º Salvar as tarefas
*/

const inputTarefa = document.querySelector('.input-tarefa'); //Selecionar o input
const btnTarefa = document.querySelector('.btn-tarefa'); //Selecionar o Botão
const tarefas = document.querySelector('.tarefas'); //Selecionar a Lista

/*CAPTURAR O EVENTO DE CLICK*/
btnTarefa.addEventListener('click', function() {
  if (!inputTarefa.value) return; //Se o imput for diferente de enviar (estiver em branco, fazer nada)
  criaTarefa(inputTarefa.value); //Pega a função criaTarefa e como parametro passa o imput
});

/*FUNÇÃO PARA CRIAR A TAREFA */
function criaTarefa(textoInput) {
  const li = criaLi();
  li.innerText = textoInput;
  tarefas.appendChild(li);
  limpaInput();
  criaBotaoApagar(li);
  salvarTarefas();
}

/*FUNÇÃO PARA CRIAR A LINHA */
function criaLi() {
  const li = document.createElement('li');
  return li;
}

/*Capturar evento da tecla ENTER*/
inputTarefa.addEventListener('keypress', function(e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

/*FUNÇÃO PARA LIMPAR O INPUT */
function limpaInput() {
  inputTarefa.value = '';
  inputTarefa.focus();
}

/*FUNÇÃO PARA CRIAE O BOTÃO APAGAR*/
function criaBotaoApagar(li) {
  li.innerText += ' ';
  const botaoApagar = document.createElement('button');
  botaoApagar.innerText = 'Apagar';
  // botaoApagar.classList.add('apagar');
  botaoApagar.setAttribute('class', 'apagar');
  botaoApagar.setAttribute('title', 'Apagar esta tarefa');
  li.appendChild(botaoApagar);
}

/*Setar o botão que está sendo clicado*/
document.addEventListener('click', function(e) {
  const el = e.target;

  if (el.classList.contains('apagar')) {
    el.parentElement.remove();
    salvarTarefas();
  }
});

/*FUNÇÃO PARA SALVAR AS TAREFAS */
function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll('li');
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem('tarefas', tarefasJSON);
}

/*FUNÇÃO PARA OBTER AS TAREFAS SALVAS NO JSON (LOCALsTORAGE)*/
function adicionaTarefasSalvas() {
  const tarefas = localStorage.getItem('tarefas');
  const listaDeTarefas = JSON.parse(tarefas);

  for(let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }
}
adicionaTarefasSalvas();
