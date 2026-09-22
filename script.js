const produtos = [
  {
    nome: "Amélia",
    descricao: "Gostoso de mais",
    preco:"$25
  },
  {
    nome: "Vanessa Hugo",
    descricao: "Cuzinho da abertado",
    preco: "$35"
  },
  {
    nome: "Baltazar",
    descricao: "Bunda gigante",
    preco: "$20"
  },
  {
    nome: "Shaquira",
    descricao: "Shaquira fudendo com o negão",
    preco: "$30"
  }
];

const catalogo = document.getElementById("catalogo");

produtos.forEach((produto) => {
  const card = document.createElement("div");

  card.innerHTML = `
    <h2>${produto.nome}</h2>
    <p>${produto.descricao}</p>
    <strong>${produto.preco}</strong>
    <br><br>
    <button onclick="comprar('${produto.nome}')">
      Comprar Agora
    </button>
  `;

  catalogo.appendChild(card);
});

function comprar(nome) {
  alert("Você escolheu: " + nome);
  Conteúdo adulto+🔞
}
