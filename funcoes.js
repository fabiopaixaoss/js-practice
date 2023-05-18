
// Cálculo dos Ingredientes
function calculaIngredientes(ing1, ing2, ing3) {
    let preco_ing = ing1 + ing2 + ing3;
    console.log('Valor Ingredientes: ', preco_ing);
    return preco_ing;
}

// Cálculo da Porcentagem da Confeiteira
function calculaConfeiteira(preco_conf) {
    let porcentagem_conf = 30;
    preco_conf += preco_conf * porcentagem_conf / 100;
    console.log('Valor Confeiteira: ', preco_conf);
    return preco_conf;
}

// Cálculo das Despesas de Produção
function calculaDespesas(preco_despesas) {
    preco_despesas += 10;
    console.log('Valor Despesas: ', preco_despesas);
    return preco_despesas;
}

// Cálculo dos Custos Fixos
function calculaCustosFixos(preco_custos) {
    preco_custos += 10;
    console.log('Valor Custos: ', preco_custos);
    return preco_custos;
}

// Cálculo do lucro
function calculaLucro(calculo_lucro) {
    let lucro = 0.25
    calculo_lucro += calculo_lucro * lucro;
    console.log('Valor Lucro: ', calculo_lucro);
    return calculo_lucro;
}

// Chamada das Funções //
let preco_final = calculaIngredientes(10,5.5,14);
preco_final = calculaConfeiteira(preco_final);
preco_final = calculaDespesas(preco_final)
preco_final = calculaCustosFixos(preco_final);
preco_final = calculaLucro(preco_final);

// Retornar o preço final
console.log('Preço Final de Venda: ', preco_final);