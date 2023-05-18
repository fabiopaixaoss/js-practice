// Evento de click
let startButton = document.getElementById('start');
startButton.onclick = function() {
    console.log('Clicou em Start')
}

// Evento de tecla pressionada (digitação)
let textInput = document.getElementById('input_text')
textInput.onkeydown = function(event) {
    console.log('Digitando...', event.keyCode);
}

// Evento de carregamento de elemento
let body = document.getElementsByTagName('body')[0];
body.onload = function() {
    console.log('Carregou o body')
}

// Evento de mouse sobre elemento
let stopButton = document.getElementById('stop');
stopButton.onmouseover = function (event) {
    console.log('O mouse está sobre...', event.target.innerText)
}

// Evento de tirar o mouse do elemento
let resetButton = document.getElementById('reset');
resetButton.onmouseout = function (event) {
    console.log('O mouse saiu de...', event.target.innerText)
}