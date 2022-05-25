import React from "react";

export default function Dinamico1(props) {
  console.log("[Cliente] renderizando o componente...");
  return (
    <div>
      <h1>Dinâmico #01</h1>
      <h2> {props.numero} </h2>
    </div>
  );
}

export function getServerSideProps() {
  return {
    props: {
      numero: Math.random(),
    },
  };
}
