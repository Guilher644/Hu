const produtos = [
  {
    nome: "Perfume",
    descricao: "Perfume para uso diário",
    preco: "500 MT"
  },
  {
    nome: "Creme corporal",
    descricao: "Creme para cuidados da pele",
    preco: "350 MT"
  },
  {
    nome: "Batom",
    descricao: "Batom para maquiagem",
    preco: "200 MT"
  },
  {
    nome: "Shampoo",
    descricao: "Shampoo para cuidados do cabelo",
    preco: "300 MT"
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
}
