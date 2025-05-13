const main = document.querySelector('main');
let produtos = [];

// Carregar os produtos do JSON
fetch("rabbit.json")
    .then(response => response.json())
    .then(data => {
        produtos = data;
    })
    .then(() => {
        exibirCards();
    })
    .catch(error => console.error("Erro ao carregar JSON:", error));

// Função para exibir os cards dos produtos
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