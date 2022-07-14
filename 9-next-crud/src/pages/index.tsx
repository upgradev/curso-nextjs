import type { NextPage } from "next";
import { useEffect, useState } from "react";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import useClientes from "../hooks/useClientes";

const Home: NextPage = () => {
  const {
    selecionarCliente,
    salvarCliente,
    excluirCliente,
    cliente,
    clientes,
    novoCliente,
    tabelaVisivel,
    exibirTabela
  } = useClientes();
  return (
    <div
      className={`flex justify-center items-center h-screen bg-gradient-to-r from-blue-500
     to-purple-500 text-white`}
    >
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className={` flex justify-end`}>
              <Botao cor="green" className="mb-4" onClick={novoCliente}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            ></Tabela>
          </>
        ) : (
          <Formulario
            cliente={cliente}
            cancelado={() => exibirTabela}
            clienteMudou={salvarCliente}
          />
        )}
      </Layout>
    </div>
  );
};

export default Home;
