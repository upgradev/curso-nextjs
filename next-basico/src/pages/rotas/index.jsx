import Link from "next/link";
import router, { useRouter } from "next/router";
import React from "react";

export default function index() {
  
  function navegacaoSimples(url) {
    router.push(url);
  }

  function navegacaoComParams() {
    router.push({
      pathname: "/rotas/params",
      query: {
        id: 123,
        nome: "Ana",
      },
    });
  }

  return (
    <div>
      <h1>Rotas Index</h1>
      <ul>
        <Link href={"/rotas/params?id=12&nome=Ana"}>
          <li>Params</li>
        </Link>
        <Link href={"/rotas/123/buscar"}>
          <li>Buscar</li>
        </Link>
        <Link href={"/rotas/123/daniel"}>
          <li>daniel</li>
        </Link>
      </ul>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <button onClick={navegacaoComParams}>Params</button>
        <button onClick={() => router.push("/rotas/123/buscar")}>Buscar</button>
        <button onClick={() => navegacaoSimples("/rotas/123/daniel")}>
          daniel
        </button>
      </div>
    </div>
  );
}
