function greeting(name) {
    alert('Olá ' + name);
}

function processUserInput(callback) {
    var name = prompt('Por favor insira seu nome.');
    callback(name); 
}

processUserInput(greeting);

// *** A função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para
// completar algum tipo de rotina. ***

// Normalmente, callbacks são utilizados para continuar a execução do código após o término de uma operação assíncrona.
// Um bom exemplo são as funções callbacks executadas dentro de um bloco .then() encadeado ao final de uma promessa após essa 
//promessa ser cumprida ou rejeitada. Essa estrutura é muito usada nas APIs modernas, como a fetch().

// 1- Criou uma função que recebe como parâmetro name e emite como alerta o próprio parâmetro. 
// 5- Criou uma função que recebe como parâmetro outra função;
// 6- Pediu ao usuário que digitasse um nome e armazenou isso dentro da var name.
// 7- Criou uma função usando o parâmetro e deu como parâmetro o name, digitado pelo usuário.
// 10- Chamou uma função e passou outra função como parâmetro. O parâmetro da processUserInput recebe o name digitado pelo
// usuário e transfere como parâmetro para a função greeting, que emite na tela o nome digitado pelo usuário. 