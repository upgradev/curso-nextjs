import React, { useState } from "react";
import ContadorDisplay from "../../components/ContadorDisplay";

export default function contador() {
  const [numero, setNumero] = useState(0);

  const inc = (params) => {
    setNumero(numero + 1);
  };

  const dec = (params) => {
    setNumero(numero - 1);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Contador</h1>
      <ContadorDisplay numero={numero} />
      <div>
        <button onClick={() => setNumero(numero - 1)}>-</button>
        <button onClick={inc}>+</button>
      </div>
    </div>
  );
}
