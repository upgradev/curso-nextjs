import React from "react";

export default function Filho(props) {

  return (
    <div>
      <h1>Filho</h1>
      <button onClick={props.funcao}> Falar com o pai v1</button>

      <button onClick={
        () => props.funcao("Passei no enem", "Uhuuuuuu", 10)}> 
        Falar com o pai v2
        </button>
    </div>
  );
}
