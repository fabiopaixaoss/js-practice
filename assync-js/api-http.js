function melhorComida(comida) {
    return new Promise((resolve, reject) => {
        if (comida == 'pizza') {
            resolve(comida + ' é a melhor comida!')
        }else{
            reject(comida + ' não é a melhor comida!')
        }
    })
}

melhorComida('arroz').then((resposta) => {
    console.log(resposta)
}).catch((erro) => {
    console.log(erro)
})