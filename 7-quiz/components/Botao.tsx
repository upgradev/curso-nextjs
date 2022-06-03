import Link from "next/link";
import React from "react";

import styles from "../styles/Botao.module.css";

interface BotaoProps {
  href?: string;
  texto: string;
  onClick?: (e: any) => void;
}

export default function Botao(props: BotaoProps) {
  function renderizarBotao() {
    return (
      <div>
        <button className={styles.botao} onClick={props.onClick}>
          {props.texto}
        </button>
      </div>
    );
  }

  return props.href ? (
    <div>
      <Link href={props.href}>{renderizarBotao()}</Link>
    </div>
  ) : (
    renderizarBotao()
  );
}
