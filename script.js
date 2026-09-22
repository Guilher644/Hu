const produtos = [
  {
    nome: "Amélia",
    descricao: "Produto de qualidade",
    preco: "$25"
  },
  {
    nome: "Vanessa Hugo",
    descricao: "Produto de qualidade",
    preco: "$35"
  },
  {
    nome: "Baltazar",
    descricao: "Produto de qualidade",
    preco: "$20"
  },
  {
    nome: "Shaquira",
    descricao: "Produto de qualidade",
    preco: "$30"
  }
];

const catalogo = document.getElementById("catalogo");

produtos.forEach((produto) => {
  const item = document.createElement("div");

  item.innerHTML = `
    <h2>${produto.nome}</h2>
    <p>${produto.descricao}</p>
    <strong>${produto.preco}</strong>
  `;

  catalogo.appendChild(item);
});
