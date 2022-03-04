import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";

export default function Params() {
  const router = useRouter();

  const id = router.query.id;
  const nome = router.query.nome;

  console.log(router);
  return (
    <div>
      <h1>
        Rotas params: {id} {nome}
      </h1>
      <Link href={"/rotas"} passHref>
        <button>Voltar</button>
      </Link>
    </div>
  );
}
