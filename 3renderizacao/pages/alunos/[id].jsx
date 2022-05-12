import React from "react";

export async function getStaticPaths() {
  const resp = await fetch(`http://localhost:3000/api/alunos/tutores`);
  const ids = await resp.json();

  const paths = ids.map((id) => {
    return { params: { id: `${id}` } };
  });

  return {
    fallback: true, //se for true vai acessar getStaticProps
    paths: paths,
    // [
    //   {
    //     params: { id: "1" },
    //   },
    //   {
    //     params: { id: "2" },
    //   },
    //   {
    //     params: { id: "3" },
    //   },
    // ],
  };
}

export async function getStaticProps(context) {
  console.log(context.params);
    const resp = await fetch(
    `http://localhost:3000/api/alunos/${context.params.id}`
  );
  const aluno = await resp.json();

  return {
    props: {
      aluno: aluno,
    },
  };
}

export default function AlunoPorId(props) {
  const { aluno } = props;
  return (
    <div>
      <h1>Detalhes do Aluno</h1>
      {aluno ? (
        <ul>
          <li> {aluno.id} </li>
          <li> {aluno.nome} </li>
          <li> {aluno.email} </li>
        </ul>
      ) : (
        false
      )}
    </div>
  );
}
