
    function adicionarAoCarrinho(id, nome, descricao, preco, imagem) {
      let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

      const index = carrinho.findIndex((item) => item.id === id);
      if (index !== -1) {
        carrinho[index].quantidade += 1;
      } else {
        carrinho.push({ id, nome, descricao, preco, imagem, quantidade: 1 });
      }

      localStorage.setItem("carrinho", JSON.stringify(carrinho));
      alert("Produto adicionado ao carrinho!");
    }