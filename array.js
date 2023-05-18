let cores = ['grena', 'branca', 'verde']
console.log(cores);

// Incluir e Remover itens
console.log('----- Incluir / Remover -----')
cores.push('azul')      // Coloca um elemento sempre na última posição
console.log(cores);
let cor = cores.pop()   // Remove o elemento que está na última posição
console.log(cores, cor);

// Percorrer um array
console.log('----- Percorrer Array -----')
cores.forEach((cor, index) => { // Podemos usar uma arrow function aqui para percorrer todos os elementos da nossa array
    console.log(cor, index)
})

// Fazer transformações em elementos
console.log('----- Transformações em Elementos -----')
let cores_claras = cores.map((cor) => {
    return cor + ' claro';
});
console.log(cores_claras)

// Filtrar Elementos
console.log('----- Filtrar Elementos -----')
let cores_filtro = cores.filter(cor => cor.length == 5) // o filter traz todas que ele encontra
console.log(cores_filtro)

// Pesquisar por Valores
console.log('----- Pesquisar Valores -----')
let pesq_valores = cores.find(cor => cor.length == 5); // o find traz a primeira que ele encontra
console.log(pesq_valores)

// Pesquisar por Index
console.log('----- Pesquisar por Index -----')
let pesq_index = cores.findIndex(cor => cor.length == 6); // o findIndex mostra o índice da primeira que ele encontra
console.log(pesq_index)