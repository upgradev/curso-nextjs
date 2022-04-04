import React from "react";

export default function Estatico3(props) {
  return (
    <div>
      <h1>Estático #03</h1>
      <h2>{props.numero}</h2>
    </div>
  );
}

export function getStaticProps() {
  return {
    revalidate: 7, //a cada 7 segundo ele vai pegar um novo conteudo e passar novamente
    //via props, ver isso gerando o build
    props: {
      numero: Math.random(),
    },
  };
}
