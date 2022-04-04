import React from "react";

export default function Dinamico1(props) {
  return (
    <div>
      <h1>Dinamico #01</h1>
      <h2> {props.numero} </h2>
    </div>
  );
}

export function getServerSideProps() {
    console.log("[Server] gerando props para o componente");
  return {
    props: {
      numero: Math.random(),
    },
  };
}
