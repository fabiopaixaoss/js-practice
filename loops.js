// let x = [{}, {}, {}, {}] // é uma array com 4 objetos -> 0,1,2,3
// Quanto mais código, mais problemas. Você precisa resolver seus problemas com a menor quantidade de código possível.

let produtos = [ // é uma array [] e dentro de produtos, terão objetos {}
    {
        codigo: 1,
        validade: new Date('2025-05-05') //criou um novo objeto do tipo data - criando tipo data em JS
    },
    {
        codigo: 2,
        validade: new Date('2025-10-10')
    },
    {
        codigo: 3,
        validade: new Date('2025-05-01')
    },
    {
        codigo: 4,
        validade: new Date('2025-10-10')
    },
    {
        codigo: 5,
        validade: new Date('2025-05-02')
    }
];

for (let i = 0; i < produtos.length; i++) { // Quando essas condições forem verdadeiras, ele vai repetir os códigos do bloco.

    if (produtos[i].codigo ==1){ // aqui vai continuar o laço pq já sabemos que o produto 0 está vencido
        console.log('O produto 1 está vencido. Não esqueça de resolver!')
        continue;
    }

    if (produtos[i].validade < new Date('2025-05-06')) {
        console.log('Código '+produtos[i].codigo+ ': Produto vencido!')
        // break;
    } else {
        console.log('Produto dentro do prazo!')
    }
}