// Implementação de Funções

function pedirBolo() {
    console.log('Pedindo bolo...')
    return new Promise(
        function (resolve, reject) {
            setTimeout(() => {
                console.log('Fazendo bolo...')
                resolve('Bolo de chocolate')
            }, 1000);
        }
    )
}

function festejar(bolo) {
    console.log('Fazendo festa com ' + bolo);
}

async function preparaFesta() {
    let bolo = await pedirBolo();
    festejar(bolo);
}

function trabalhar() {
    console.log('Trabalhando...')
}

function treinar() {
    console.log('Treinando...')
}

function viajar() {
    console.log('Viajando...')
}

// Chamada de funções / Execução do Programa

// Preparar a festa - Código consumidor
let bolo = preparaFesta();

// Trabalhar
trabalhar();

// Treinar
treinar();

// Viajar
viajar();