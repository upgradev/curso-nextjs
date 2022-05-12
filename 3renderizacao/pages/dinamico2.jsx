import React from "react";

export default function Dinamico2(props) {
  function renderizarProdutos() {
    return props.produtos.map((produto) => {
      return (
        <li key={produto.id}>
          {produto.id} - {produto.nome} tem preço de R$ {produto.preco}
        </li>
      );
    });
  }

  return (
    <div>
      <h1>Dinâmico #02</h1>
      <ul>
        {renderizarProdutos()}
      </ul>
    </div>
  );
}

//executado apenas do lado do servidor
export async function getServerSideProps() {
  console.log("Roda do lado do servidor");
  const resp = await fetch("http://localhost:3000/api/produtos");
  const produtos = await resp.json();

  return {
    props: {
      produtos: produtos,
    },
  };
}
