// Selecionar elementos
let form = document.getElementById('formulario');
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let lsexo = document.getElementById('lsexo');

let fname_msg = document.getElementById('msg-vld-fname');
let lname_msg = document.getElementById('msg-vld-lname');
let lsexo_msg = document.getElementById('msg-vld-lsexo');

// Validar quando usuário sai do campo
fname.onblur = function (event) {
    if (event.target.value.length < 3) {
        fname_msg.textContent = 'O nome deve ter pelo menos 3 letras';
        fname_msg.style.display = 'block'
    } else {
        fname_msg.style.display = 'none'
    }
}

// validar quando usuário muda um campo
lsexo.onchange = function (event) {
    if (event.target.value == 'selecione') {
        lsexo_msg.textContent = 'Selecione uma opção válida';
        lsexo_msg.style.display = 'block'
    } else {
        lsexo_msg.style.display = 'none'
    }
}

// validar quando usuário entra em um campo
fname.onfocus = function () {
    fname_msg.style.display = 'none'
}

// validar quando usuário envia o formulário
form.onsubmit = function (event) {
    if (fname.value.length < 3 || lsexo.value == 'selecione') {
        alert('Preencha os dados corretamente antes de enviar')
        event.preventDefault();
    }
}