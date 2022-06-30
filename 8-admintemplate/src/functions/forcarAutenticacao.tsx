import React from "react";
import Image from "next/image";
import loading from "../../public/images/loading.gif";
import router from "next/router";
import Head from "next/head";
import useAuth from "../data/hook/useAuth";

interface ForcarAutenticacaoProps {}

export default function forcarAutenticacao(jsx) {
  const { usuario, carregando } = useAuth();

  function renderizarConteudo() {
    return (
      <>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `if(!document.cookie?.includes("admin-template-casa-auth")){
            window.location.href= "/autenticacao"
          }`,
            }}
          />
        </Head>
        {jsx}
      </>
    );
  }

  function renderizarCerregando() {
    return (
      <div className={`flex justify-center items-center h-screen`}>
        <Image src={loading} />
      </div>
    );
  }

  if (!carregando && usuario?.email) {
    return renderizarConteudo();
  } else if (carregando) {
    return renderizarCerregando();
  } else {
    router.push("/autenticacao");
    return null;
  }
}
