// A função espera dois callbacks e chama um deles em uma aventual conclusão ou falha:

function successCallback(result) {
    console.log("It succeeded with " + result);
}

function failureCallback(error) {
    console.log("It failed with " + error);
}
doSomething(successCallback, failureCallback);

// Ao invés disso, as funções modernas retornam uma promise e então você pode adicionar seus callbacks...

const promise = doSomething();
promise.then(successCallback, failureCallback);

// ou simplesmente:
doSomething().then(successCallback, failureCallback)

// Isso é uma chamada de função assíncrona.

// Garantias:
// -> Callbacks nunca serão chamados antes da conclusão da execução atual do loop de eventos do JS.
// -> Callbacks adicionadas com .then() mesmo depois do sucesso ou falha da operação assíncrona, serão chamadas, como acima.
// -> Múltiplos callbacks podem ser adicionados chamando-se .then() várias vezes, para serem executados independentemente da 
// ordem de inserção. Mas o benefício mais imediato das promises são o encadeamento.

// Encadeamento:
