import React from "react";

import styles from "./integracao2.module.css";

export default function integracao2() {
  return (
    <div id={styles.integracao2}>
      <div className={styles.vermelha}>Texto #1</div>
      <div className={styles.azul}>Texto #2</div>
      <div className={styles.branca}>Texto #3</div>
    </div>
  );
}
