import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Buscar() {
  const router = useRouter();
  // const codigo = +router.query.id; numeros
  const codigo = router.query.id;
  return (
    <div>
      <h1>Rotas / {codigo} / Buscar</h1>
      <Link href={"/rotas"}>
        <button> Voltar </button>
      </Link>
    </div>
  );
}
