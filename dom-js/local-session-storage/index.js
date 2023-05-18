// Selecionar os elementos
let start = document.querySelector('#start')
let stopButton = document.querySelector('#stop')
let reset = document.querySelector('#reset')
let container = document.getElementsByTagName('time')[0]
let body = document.querySelector('body')

// Escrever no localStorage
start.onclick = function () {
    let d = new Date();
    localStorage.setItem('time', d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds())
    localStorage.setItem('time_start', d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds())
}

// Buscar dados no localStorage
body.onload = function () {
    container.textContent = this.localStorage.getItem('time');
}

// Remover dados do localStorage
stopButton.onclick = function () {
    localStorage.removeItem('time');
}

// Limpar o localStorage
reset.onclick = function () {
    localStorage.clear();
}