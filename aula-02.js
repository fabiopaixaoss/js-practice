
const receitas = {
    id: 0,
    nome: 'bolo',
    ingredientes: ['farinha', 'ovos', 'leite', 'chocolate']
}

function adicionarNovaReceita(id, nome, ingredientes) {
    receitas.push({
        id,
        nome,
        ingredientes,
    })
}

adicionarNovaReceita(1, 'bolo-2', ['arroz', 'feijão', 'alho'])

console.log(adicionarNovaReceita)