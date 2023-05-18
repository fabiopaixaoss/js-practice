// x = (a + b - c) / d * e
// se x for par, somar mais 1; se for ímpar, subtraia 1.
// O parseInt() tira a vírgula do número, e deixa somente os números inteiros.

let a = 10;
let b = 10;
let c = 5;
let d = 3;
let e = 4.1;

let x = (a + b - c) / d * e;
x = parseInt(x);

if (x % 2 === 0) {
    x ++;
} else {
    x --;
}

console.log('Resultado da equação (' + a + ' + ' + b + ' - ' + c + ' / ' + d + ' * ' + e +'):')
console.log(x)

// O '||' faz comparações do tipo "or" e retorna 'true' caso a condição seja válida;
// O '&&' faz comparações do tipo "and" e retorna 'true' somente se todas as condições forem válidas;
// != e !== - operadores "não igual" e "estritamente não igual" utilizados para comparações. Retornam true ou false.
// O ** é o operador de exponenciação. Ex: 2**3 = 8.