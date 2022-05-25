import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";

export default function Nome() {
  const router = useRouter();
  // const codigo = +router.query.id; numeros
  const codigo = router.query.id;
  const nome = router.query.nome;
  return (
    <div>
      <h1>Rotas / {codigo} / {nome} Buscar</h1>
      <Link href={"/rotas"} passHref>
          <button> Voltar </button>
        </Link>
    </div>
  );
}
