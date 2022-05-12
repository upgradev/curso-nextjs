import React from "react";

export default function repeticao1() {
  const listaProvados = [
    "João",
    "Maria",
    "Ana",
    "Bia",
    "Carlos",
    "Daniel",
    "Laura",
  ];

  function renderizarLista() {
    // const itens = [];

    // for (let index = 0; index < listaProvados.length; index++) {
    //   itens.push(<li key={index}>{listaProvados[index]}</li>);
    // }

    return listaProvados.map(
        (nome, i) => <li key={i}>{nome}</li>);
  }

  return <ul>{renderizarLista()}</ul>;
}
