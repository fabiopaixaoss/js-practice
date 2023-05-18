// Alert
let startButton = document.getElementById('start');
startButton.onclick = () => {
    alert('Você clicou em começar!')
};

// Prompt
let stopButton = document.getElementById('stop')
stopButton.onclick = () => {
    let nameUser = prompt('Digite o seu nome para confirmar: ');
    console.log(nameUser)
}

// Confirm
let resetButton = document.getElementById('reset');
resetButton.onclick = () => {
    let resetButton = confirm('Tem certeza que deseja reiniciar? ')
    console.log(resetButton)
}