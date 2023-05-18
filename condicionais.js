// Podemos usar:
// Operadores condicionais: if e else;
// Operadores relacionais: ==, !=, >, <
// Operadores lógicos: &&, ||, ! (not/não)


// Definir minhas variáveis 

let jarra = 0;

let cafeteira = { //aqui é um objeto
    // aqui estão as propriedades
    po: false,
    agua: false,
    ligada: true,
    cafe_pronto: true,
}

let xicara = 100;

// Fazer café

if (jarra < 100){ // preciso fazer café
    console.log ('Fazendo um café quentinho... :)')

    if (!cafeteira.po) {
        cafeteira.po = true;
    }
    if (!cafeteira.agua) {
        cafeteira.agua = true;
    }
    if (!cafeteira.ligada || cafeteira.po || cafeteira.agua) {
        console.log('Ligando a cafeteira...')
        cafeteira.ligada = true;
    }

    cafeteira.cafe_pronto = true;
    jarra = 100;
    
} else if (xicara == 0){  // tomar café
    // encher minha xícara
    if (cafeteira.cafe_pronto) {
        xicara = 100;
        jarra -= 100;
    }
    console.log('Café quentinho na xícara! Que tal um golinho de felicidade?')
} else if (jarra > 100) { // café derramando
    // alerta de jarra derramando
    cafeteira.ligada = false;
    console.log('Jarra está cheia demais, cuidado...')
} else { // manter quente
    // aquecer o café
    cafeteira.ligada = true;
    console.log('Estamos mantendo seu café quentinho!')
}
