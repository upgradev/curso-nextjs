import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Rotas() {
  const router = useRouter();

  const navegacaoSimples = (url) => {
    router.push(url);
  };

  const navegacaoComParams = () => {
    router.push({
      pathname: "/rotas/params",
      query: {
        id: 123,
        nome: "ana teste"
      }
    });
  };

  return (
    <div>
      <h1>Rotas Index</h1>
      <ul>
        <Link href={"/rotas/params?id=123&nome=Ana"}>
          <li> Params </li>
        </Link>
        <Link href={"/rotas/123/buscar"}>
          <li> Buscar </li>
        </Link>
        <Link href={"/rotas/123/ana"}>
          <li> Params id e nome </li>
        </Link>
      </ul>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <button onClick={() => router.push("/rotas/123/buscar")}>Buscar</button>
        <button onClick={() => navegacaoSimples("/rotas/123/ana")}>Params id e nome</button>
        <button onClick={() => navegacaoComParams()}>Params</button>

      </div>
    </div>
  );
}
