import React, { useState, useEffect } from "react";

export default function Questao() {
  const [questao, setQuestao] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/questao/123")
      .then((resp) => resp.json())
      .then(setQuestao);
  }, []);

  const renderiuzarRespostas = () => {
    if (questao) {
      return questao.respostas.map((resp, i) => {
        return <li key={i}> {resp} </li>;
      });
    }
    return false;
  };

  return (
    <div>
      <h1>Questao</h1>
      <div>
        <span>
          
          {questao?.id} - {questao?.enunciado}
        </span>
        <ul>{renderiuzarRespostas()}</ul>
      </div>
    </div>
  );
}
