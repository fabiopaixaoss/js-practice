// Criando uma array / objeto
// Se a const for uma array eu posso modificar, incluir, remover elementos - só não posso reatribuí-la
// Tarefa importante: excluir todos as receitas com glúten do array - pesquisar: splice

const receitas = [
    {
        id: 0,
        titulo: 'pizza de queijo',
        dificuldade: 'fácil',
        ingredientes: ['massa', 'molho', 'queijo'],
        gluten: false
    },
]

function adicionarReceita(id, titulo, dificuldade, ingredientes, gluten) {
    receitas.push({
        id,
        titulo,
        dificuldade,
        ingredientes,
        gluten
    })
}
function mostraReceitas() {
    receitas.forEach(itens => {
        console.log(itens.titulo)
        console.log(itens.ingredientes)

        if (itens.gluten == true) {
            console.log('A receita contém glúten!')
            console.log('-------------')
        }else {
            console.log('A receita NÃO contém glúten!')
            console.log('-------------')
        }
    })
}
function removerReceita() {
    receitas.pop()
}
// Esse método exclui usando o index, não o id das receitas. Se o ID for diferente do meu Index, quebra meu código.
function excluirReceita(id) {
    if (typeof receitas[id] === 'undefined'){
        console.log('Essa receita não existe!')
    } else {
        delete receitas[id]
        console.log('Item deletado com sucesso!')
    }
}

adicionarReceita(1, 'pizza de frango', 'fácil', ['massa', 'molho', 'frango'], true)
adicionarReceita(2, 'pizza de alho', 'médio', ['massa', 'molho', 'alho'], true)
adicionarReceita(3, 'pizza de portuguesa', 'difícil', ['massa', 'molho', 'ovo', 'milho', 'palmito', 'presunto'], false)
excluirReceita(3)
mostraReceitas()