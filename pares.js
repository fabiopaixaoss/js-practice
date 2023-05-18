// Função que exibe todos os números pares até um determinado número

function numerosPares(numeroEscolhido) {
    for (let i = 1; i <= numeroEscolhido; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}
numerosPares(100)