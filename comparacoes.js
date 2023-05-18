// == comparação implícita - compara compara somente o valor
// === comparação explícita - compara o valor e o tipo de dado da variável
// É uma boa prática usar os três iguais (===) e quando for fazer conversão, fazer de modo explícito.
// Conversões de modo explícito são feitas com Number() e String ()

let n1 = 5;
let n2 = '5';
// let d = ''
// let e = []

console.log (n1 == n2); // aqui ele converte a string em number e faz a comparação
console.log (n1 === n2); // aqui é comparado o valor e tipo da variável

if (n1 == '5') {
    console.log('Verdadeiro')
} else {
    console.log('False')
}
