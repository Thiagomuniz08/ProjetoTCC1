const main = document.querySelector('main');
var produtos = [];

fetch("dados.json")
    .then(response => response.json())
    .then(data => {
        produtos = data;
    }).
    then(() => {
        exibirCards();
    });

function exibirCards() {
    produtos.forEach((produto) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.alt}">
            <h2>${produto.alt}</h2>
            <p>${produto.nome}</p>
            <p>R$${produto.preco.toFixed(2)}</p>
        `;
        main.appendChild(card);
    });
}