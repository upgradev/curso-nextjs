// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function numeroAletorio(min = 1, max = 100000) {
  return parseInt(Math.random() * (max - min)) + min;
}

export default function handler(req, res) {
  res.status(200).json([
    {
      id: numeroAletorio(),
      nome: "Caneta",
      preco: 5.6,
    },
    {
      id: numeroAletorio(),
      nome: "Caderno",
      preco: 15.6,
    },
    {
      id: numeroAletorio(),
      nome: "Borracha",
      preco: 7.3,
    },
    {
      id: numeroAletorio(),
      nome: "Tesoura",
      preco: 21.55,
    },
  ]);
}
