import React from "react";

//componente gerado de forma estatica
export function getStaticProps() {
  return {
    props: {
      numero: Math.random(),
    },
  };
}

export default function Estatico(props) {
  return (
    <div>
      <span>Aleatório: {props.numero}</span>
    </div>
  );
}
