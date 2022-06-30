import type { NextPage } from "next";
import Layout from "../components/template/Layout";

const Perfil: NextPage = () => {
  return (
    <Layout
      titulo="Perfil do usuário"
      subtitulo="Administre as suas informações"
    >
      <h1>Perfil do Usuário</h1>
    </Layout>
  );
};

export default Perfil;
