console.log('Teste JS Arquivo')

// Selecionar pelo ID
let buttonStart = document.getElementById('start');
console.log('getElementById: ', buttonStart)

// Selecionar pela Class
let buttonClass = document.getElementsByClassName('container')
console.log('getElementsByClassName: ', buttonClass)

// Selecionar pela Tag
let buttonTag = document.getElementsByTagName('button');
console.log('getElementsByTagName: ', buttonTag)

// Selecionar por query
let queryReset = document.querySelector('button')
console.log('querySelector: ', queryReset)

// Selecionar por queryAll
let queryResetAll = document.querySelectorAll('button')
console.log('querySelectorAll: ', queryResetAll)