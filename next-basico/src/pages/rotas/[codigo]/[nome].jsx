import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function codigoNome() {
  const router = useRouter();
  const codigo = router.query.codigo;
  const nome = router.query.nome;

  return (
    <div>
      <h1>
        Rotas / {codigo} / {nome}
      </h1>
      <Link href={"/rotas"}>
        <button>Voltar</button>
      </Link>
    </div>
  );
}
