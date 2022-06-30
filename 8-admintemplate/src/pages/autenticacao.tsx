import React, { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { IconeAtencao } from "../components/icons";
import useAuth from "../data/hook/useAuth";

export default function Autenticacao() {
  const { login, cadastrar, loginGoogle } = useAuth();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(null);
  const [modo, setModo] = useState<"login" | "cadastro">("login");

  function exibirErro(msg: any, tempoEmSegundos = 5) {
    setErro(msg);
    setTimeout(() => {
      setErro(null);
    }, tempoEmSegundos * 1000);
  }

  const submeter = async () => {
    try {
      if (modo === "login") {
        await login(email, senha);
      } else {
        await cadastrar(email, senha);
      }
    } catch (error) {
      exibirErro(erro?.message ?? "Ocorreu um erro");
    }
  };

  return (
    <div className="flex h-screen items-center">
      <div className="hidden md:block md:w-1/2 lg:w-2/3">
        <img
          src="https://source.unsplash.com/random"
          alt="Imagem tela de autenticação"
          className="h-screen w-full object-cover"
        />
      </div>
      <div className="m-10 w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-3xl font-bold mb-5 ">
          {modo === "login"
            ? "Entre com a sua conta"
            : "Cadastre-se na plataforma"}
        </h1>
        {erro ? (
          <div
            className={`flex items-center bg-red-400 text-white py-3 px-5 my-2 border border-red-700
            rounded-lg 
          `}
          >
            {IconeAtencao(8)}
            <span className={`ml-3`}>{erro}</span>
          </div>
        ) : (
          false
        )}

        <AuthInput
          tipo="email"
          label="Email"
          valor={email}
          valorMudou={setEmail}
          obrigatorio
        />
        <AuthInput
          tipo="password"
          label="Senha"
          valor={senha}
          valorMudou={setSenha}
          obrigatorio
        />
        <button
          onClick={submeter}
          className={`w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg
          px-4 py-3 mt-6 
        `}
        >
          {modo === "login" ? "Entrar" : "Cadastrar"}
        </button>

        <hr className="my-6 border-gray-300 w-full" />

        <button
          onClick={loginGoogle}
          className={`w-full bg-red-500 hover:bg-red-400 text-white rounded-lg
          px-4 py-3  
        `}
        >
          Entrar com o Google
        </button>

        {modo === "login" ? (
          <p className="mt-8">
            Novo por aqui?
            <a
              className={`text-blue-500 hover:text-blue-700 font-semibold cursor-pointer`}
              onClick={() => setModo("cadastro")}
            >
              Crie Uma Conta Gratuitamente
            </a>
          </p>
        ) : (
          <p className="mt-8">
            Já faz parte da nossa comunidade?
            <a
              className={`text-blue-500 hover:text-blue-700 font-semibold cursor-pointer`}
              onClick={() => setModo("login")}
            >
              Entre Com As Suas Credenciais
            </a>
          </p>
        )}

        {/* <AuthInput
        tipo="password"
        label="Confirmação Senha"
        valor={senha}
        valorMudou={setSenha}
        obrigatorio
        naoRenderizarQuando={false}
      /> */}
      </div>
    </div>
  );
}
