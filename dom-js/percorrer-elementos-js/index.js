// Selecionar elemento
let container = document.querySelector('.container');
console.log('Elemento selecionado: ', container)


// Pegar nodos filhos
let containerChilds = container.childNodes;
console.log('Pegar nodos filhos: ', containerChilds)

// Pegar primeiro filho da lista
let containerFirstChilds = container.firstChild;
console.log('Pegar primeiro nodo: ', containerFirstChilds)

// Pegar o nome da tag 
let nodeName = container.nodeName;
console.log('Nome do nodo: ', nodeName)

// Pegar valor (texto) do nodo
let valorNodo = container.childNodes[3].firstChild.nodeValue;
console.log('Valor do nodo: ', valorNodo)

// Pegar o tipo do elemento
let tipoElemento = container.nodeType;
console.log('Tipo do Elemento: ', tipoElemento) // 1 - Element, 2 - Attr

// Pegar o elemento pai
let elementoPai = container.parentNode;
console.log('Elemento Pai: ', elementoPai)

// Pegar o primeiro elemento filho
let firstElementChild = container.firstElementChild;
console.log('Primeiro Elemento Filho: ', firstElementChild)

// Pegar o último elemento filho
let lastElementChild = container.lastElementChild
console.log('Último Elemento Filho: ', lastElementChild)