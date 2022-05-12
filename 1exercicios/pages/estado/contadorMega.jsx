import React, { useState } from "react";
import NumeroDisplay from "../../components/NumeroDisplay";

export default function contadorMega() {
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
      <NumeroDisplay numero={numero} />
      <div>
        <button onClick={() => setNumero(numero - 1)}>-</button>
        <button onClick={inc}>+</button>
      </div>
    </div>
  );
}
