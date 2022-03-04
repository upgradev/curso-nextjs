import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Buscar() {
  const router = useRouter();
  const codigo = router.query.codigo;

  return (
    <div>
      <h1>Rotas / {codigo} / buscar!!!!!</h1>
      <Link href={"/rotas"}>
        <a>
          <button>Voltar</button>
        </a>
      </Link>
    </div>
  );
}
