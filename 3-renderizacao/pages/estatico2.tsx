import React from "react";

export default function Estatico2(props) {
  return (
    <div>
      <h1>Estático2 #02</h1>
      <h2>{props.numero}</h2>
    </div>
  );
}

export function getStaticProps() {
  return {
    props: {
      numero: Math.random(),
    },
  };
}
