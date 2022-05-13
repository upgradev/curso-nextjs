import React from "react";

export function getStaticProps() {
  return {
    props: {
      numero: Math.random(),
    },
  };
}

export default function estatico(props) {
  return (
    <div>
      <h1>Estático</h1>
      <span> Aleatorio: {props.numero} </span>
    </div>
  );
}
