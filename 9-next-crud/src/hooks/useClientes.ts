import { useEffect, useState } from "react";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import useTableOuForm from "./useTableOuForm";

export default function useClientes() {
  const repo: ClienteRepositorio = new ColecaoCliente();
  const { tabelaVisivel, formularioVisivel, exibirTabela, exibirFormulario } =
    useTableOuForm();
  //   const [visivel, setVisivel] = useState<"tabela" | "formulario">("tabela");
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio);
  const [clientes, setClientes] = useState<Cliente[]>([]);

  // const clientes = [
  //   new Cliente("Ana", 34, "1"),
  //   new Cliente("Bia", 45, "2"),
  //   new Cliente("Carlos", 23, "3"),
  //   new Cliente("Pedro", 54, "4"),
  // ];

  useEffect(() => {
    obterTodos();
  }, []);

  function obterTodos() {
    repo.obterTodos().then((clientes) => {
      setClientes(clientes);
      exibirTabela();
    });
  }

  function selecionarCliente(cliente: Cliente) {
    setCliente(cliente);
    exibirFormulario();
  }
  async function excluirCliente(cliente: Cliente) {
    await repo.excluir(cliente);
    obterTodos();
  }

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente);
    obterTodos();
  }

  function novoCliente() {
    setCliente(Cliente.vazio);
    exibirFormulario();
  }

  return {
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    excluirCliente,
    selecionarCliente,
    obterTodos,
    tabelaVisivel,
    formularioVisivel,
    exibirTabela
  };
}
