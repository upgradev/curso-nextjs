import React from "react";
import Item from "../../components/Item";
import Lista from "../../components/Lista";

export default function componenteComFilho() {
  return (
    <div>
      <Lista>
          <Item conteudo="Item 1" />
          <Item conteudo="Item 2" />
          <Item conteudo="Item 3" />
          <Item conteudo="Item 4" />
          <Item conteudo="Item 5" />
          <Item conteudo="Item 6" />
      </Lista>
    </div>
  );
}
