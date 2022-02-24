import React from "react";

export default function SomaUm(props) {
//   props.numero++; //propriedade somente leitura, não pode atribuir

  return (
    <div>
      <h1>{props.numero + 1}</h1>
    </div>
  );
}
