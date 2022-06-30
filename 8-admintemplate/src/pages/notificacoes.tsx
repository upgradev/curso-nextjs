import type { NextPage } from "next";
import Layout from "../components/template/Layout";

const Notificacoes: NextPage = () => {
  return (
    <Layout
      titulo="Notificações"
      subtitulo="Aqui você gerenciar as suas notifcações"
    >
      <h1>Notificações</h1>
    </Layout>
  );
};

export default Notificacoes;
