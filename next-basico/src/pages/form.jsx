import React, { useState } from "react";

export default function Form() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(0);
  const [usuarios, setUsuarios] = useState([]);

  async function salvarUsuario() {
    await fetch("/api/form", {
      method: "POST",
      body: JSON.stringify({
        nome: nome,
        idade: idade,
      }),
    });

    setNome("");
    setIdade(0);

    const resposta = await fetch("/api/form");
    const usuarios = await resposta.json();
    setUsuarios(usuarios);
  }

  function renderizarUsuarios() {
    return usuarios.map((usuario, i) => {
      return (
        <li key={i}>
          {usuario.nome} tem {usuario.idade} anos
        </li>
      );
    });
  }

  return (
    <div>
      <h1>Integrando com api</h1>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="text"
        value={idade}
        onChange={(e) => setIdade(+e.target.value)}
      />

      <button onClick={salvarUsuario}>Enviar</button>

      <ul>{renderizarUsuarios()}</ul>
    </div>
  );
}
