// Biblioteca para capturar inputs de texto do usuário no console
const prompt = require('prompt-sync')({ sigint: true });

// Receber o Pedido 
function recebePedido() {
    let pedido = {
        sabor: null,
        confeitos: null,
    };
    pedido.sabor = prompt('Qual o sabor do bolo? ');
    console.log(pedido.sabor)

    pedido.confeitos = prompt('Quais confeitos deseja? ');
    console.log(pedido.confeitos)

    return pedido;
}

// Preparar o pedido
function preparaPedido(pedido) {
    // Separar ingredientes
    let ingredientes_base = separaIngredientes(pedido);
    // Misturar bolo
    let tabuleiro = misturaBolo(pedido, ingredientes_base)
    // Colocar no forno
    let bolo = colocaForno(tabuleiro)
    // Confeitar
    bolo = confeitar(pedido, bolo);

    return bolo;
}

function separaIngredientes(pedido) {
    let ingredientes_base = 'leite, ovos, farinha de trigo, fermento';
    return ingredientes_base;
}
function misturaBolo(pedido, ingredientes_base) {
    return pedido.sabor + ', ' + ingredientes_base;
}
function colocaForno(tabuleiro) {
    return 'Bolo de ' + tabuleiro;
}
function confeitar(pedido, bolo) {
    return bolo + ' confeitado com ' + pedido.confeitos;
}

// Calcular o preço
function calculaPreco() {
    // Valor dos Ingredientes
    let preco_final = calculaIngredientes();
    // Valor da Confeiteira
    preco_final = calculaConfeiteira(preco_final);
    // Valor das Despesas de Produção
    preco_final = calculaDespesas(preco_final);
    // Valor dos Gastos Fixos
    preco_final = calculaGastos(preco_final);
    // Valor do Lucro
    preco_final = calculaLucro(preco_final);
    // Retornar Preço Final
    return preco_final;
}

function calculaIngredientes() {
    return 10.00;
}
function calculaConfeiteira(preco_calc) {
    return preco_calc += preco_calc * 0.30;
}
function calculaDespesas(preco_calc) {
    return preco_calc += 5.00
}
function calculaGastos(preco_calc) {
    return preco_calc += 15.00
}
function calculaLucro(preco_calc) {
    return preco_calc += preco_calc * 0.25;
}

// Entregar Pedido
function entregaPedido(bolo, preco) {
    // Exibir/Entregar bolo para o cliente
    console.log('Seu pedido está pronto!')
    console.log('Aproveite o seu ' + bolo);
    // Exibir Preço para o Cliente
    prompt('Seu pedido ficou em R$ ' + preco + '.' + 'Quando terminar de comer clique ENTER para pagar...')
}

// Receber Dinheiro
function receberDinheiro(preco) {
    // Receber Dinheiro do Cliente
    let valor_pago = prompt('Digite o valor para pagar: ')
    for(; valor_pago != preco ;){
        valor_pago = prompt('Valor incorreto! Digite o valor correto para pagar...')
    }
    // Fechar pedido e agradecer ao cliente
    prompt('Muito obrigado e volte sempre!!!')
}

let pedido = recebePedido()
let bolo = preparaPedido(pedido)
let preco = calculaPreco()
entregaPedido(bolo, preco)
receberDinheiro(preco);

