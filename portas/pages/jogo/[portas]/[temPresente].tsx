import React, { useEffect, useState } from "react";
import Porta from "../../../components/Porta";
import { atualizarPortas, criarPortas } from "../../../functions/portas";
import styles from "../../../styles/jogo.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Jogo() {
  const [portas, setPortas] = useState([]);
  const [valido, setValido] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const portas = +router.query.portas;
    const temPresente = +router.query.temPresente;

    const qtdePortasValida = portas >= 3 && portas <= 100;
    const temPresenteValido = temPresente >= 1 && temPresente <= portas;

    setValido(qtdePortasValida && temPresenteValido);
  }, [portas]);

  useEffect(() => {
    const portas = +router.query.portas;
    const temPresente = +router.query.temPresente;

    setPortas(criarPortas(portas, temPresente));
  }, [router?.query]);

  function renderizarPortas() {
    return portas.map((porta) => {
      return (
        <Porta
          value={porta}
          key={porta.numero}
          onChange={(novaPorta) => {
            setPortas(atualizarPortas(portas, novaPorta));
          }}
        />
      );
    });
  }

  return (
    <div id={styles.jogo}>
      <div className={styles.portas}>
        {valido ? renderizarPortas() : <h2>Valores Inválidos</h2>}
      </div>
      <div className={styles.botoes}>
        <Link href={"/"}>
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  );
}
