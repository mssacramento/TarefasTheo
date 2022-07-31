//pegando a data e trocando o valor no HTML
const data = new Date();
const p = document.querySelector('#corpo');

//Função para pegar o dia de acordo com a Date
function getDiaSemanaTexto(dataDiaSemana){
    let diaSemanaTexto = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    return diaSemanaTexto[dataDiaSemana];
}

//Função para pegar o mês de acordo com a data, não vamos usar o switch e sim array
function getMesTexto(mes){
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return meses[mes];
}

//Função para colocar zero a esquerda quando não tiver
function zeroEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function criaData(data){
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getMesTexto(numeroMes);

    return `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()}`
}

p.innerHTML = criaData(data);


const getHours = () => {
    const clock = document.getElementsByClassName('relogio')[0]
    const clock2 = document.getElementsByClassName('relogio2')[0]
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const hour = hours < 10 ? `0${hours}` : hours
    const minute = minutes < 10 ? `0${minutes}` : minutes
    const second = seconds < 10 ? `0${seconds}` : seconds
    clock.innerHTML = `${hour}:${minute}:${second}`
    clock2.innerHTML = `${hour}:${minute}:${second}`
  }
  
  setInterval(() => {
    getHours()
  }, 1000)

  

/*
//Da para fazer tudo isso com três linhas de código usando o recurso da linguagem
const p = document.querySelector('#corpo');
const data = new Date();
p.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full'}, {timeStyle:'short'});

*/
