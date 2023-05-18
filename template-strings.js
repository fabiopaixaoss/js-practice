// Usando template literal

const nome = 'Fábio';
const idade = 2023 - 1997;
const cidadeNascimento = 'Marabá';
const cidadeAtual = 'Diadema'

const apresentacao = `Meu nome é ${nome}, tenho ${idade} anos e nasci na cidade de ${cidadeNascimento}. 
Atualmente eu moro em ${cidadeAtual}.`;

console.log(apresentacao);

const dados = [{
    nomeFilme: 'A Fuga das Galinhas',
    nomeAutor: 'Bill Gates',
    anoFilme: '2009',
    anoLancamento: '2010'
}]

const apresentaFilme = `O filme ${dados.nomeFilme} começou a ser gravado em ${dados.anoFilme} e foi lançado em ${dados.anoLancamento}.`
console.log(apresentaFilme)