function getCatFact() {
    let endPoint = 'https://catfact.ninja/fact';
    fetch(endPoint)
        .then(response => {
            if (!response.ok) {
                return new Error('Requisição falhou!');
            }
            return response.json();
        })
        .then(data => {
            let catfact = document.querySelector('#cat-fact')
            catfact.textContent = data.fact;
        })
        .catch(error => {
            console.error('Requisição falhou com o erro: ' + error)
        })
}

getCatFact()

// 2- É o caminho da API que eu vou chamar, ou seja, a URL dela.
// 3- O fetch() retorna uma promise;
// 4- O .then retorna uma promise;
// 5- Pega o objeto da resposta e converte em JSON. Retorna um objeto da promise;
// 6- Aqui ele já pega o dado convertido em JSON e faz alguma coisa com ele.
// 14- Se der algum erro, vai cair no .catch()

// function checkAge(name) {
//     let endPoint = 'https://api.agify.io?name=' + name;
//     fetch(endPoint)
//         .then(response => response.json())
//         .then(data => {
//             let ageSpan = document.getElementById('age-value')
//             ageSpan.textContent = data.age;
//         });
// }

// let ageForm = document.getElementById('age-form')

// ageForm.onsubmit = (event) => {
//     let name = document.getElementById('name')
//     checkAge(name.value);
//     event.PreventDefault();
// }


function checkAge(name){
    let endpoint = 'https://api.agify.io?name=' + name;
    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            let ageSpan = document.getElementById('age-value');
            ageSpan.textContent = data.age;
        });
}

let ageForm = document.getElementById('age-form');

ageForm.onsubmit = (event) => {
    let name = document.getElementById('name');
    checkAge(name.value);
    event.preventDefault();
}