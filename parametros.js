// // Usando parâmetros
// let x = [z, y]

// function somarNumeros (x, y) {
//     return `Meu nome é ${x}, tenho ${y} anos de idade.`
// }
// console.log(somarNumeros('Fábio', 25))

// // Usando parâmetros como argumentos
// function soma (a, b) {
//     return a + b;
// }
// console.log(soma(5, 5))

// function multiplica (x, y){
//     return x*y
// }
// console.log(multiplica(soma(5,5), soma(4, 1)))

let calculaTotal = (totalCompra) => {
    let taxaServico = totalCompra * 0.10;
   
    return totalCompra + taxaServico;  
   }

