// Declaração de variáveis - var é uma variável global e let uma variável local
//pode ser feito assim também, atribuindo o valor da variável somente depois
let vasilha_1;
vasilha_1 = "chocolate";
let vasilha_2 = "500ml de leite";
let vasilha_3 = "3 ovos";
let vasilha_4 = "5 colheres de farinha";

console.log("---- Variáveis ----");

console.log(vasilha_1);
console.log(vasilha_2);
console.log(vasilha_3);
console.log(vasilha_4);

// Concatenação de variáveis //
let vasilha_mistura = vasilha_1 + " - " + vasilha_2 + " - " + vasilha_3 + " - " + vasilha_4;

console.log("---- Vasilha - Mistura ----");
console.log(vasilha_mistura)