import React, { useEffect, useState } from "react";
import NumeroDisplay from "../../components/NumeroDisplay";
import { mega } from "../../functions/mega";

export default function megasena() {
  const [qtde, setQtde] = useState(6);
  const [numeros, setNumeros] = useState([]);

  useEffect(() => {
    setNumeros(mega());
  }, []);

  function renderNumeros() {
    return numeros.map((n) => <NumeroDisplay key={n} numero={n} />);
  }

  return (
    <div
      style={{
        display: "flex",

        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Mega Sena</h1>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {renderNumeros()}
      </div>
      <div>
        <input
          type="number"
          min={6}
          max={20}
          value={qtde}
          onChange={(e) => setQtde(+e.target.value)}
        />
        <button onClick={() => setNumeros(mega())}>Gerar Aposta</button>
      </div>
    </div>
  );
}
