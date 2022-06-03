import React from "react";
import QuestaoModel from "../model/questao";

import styles from "../styles/Questionario.module.css";
import Botao from "./Botao";
import Questão from "./Questão";

interface QuestionarioProps {
  questao: QuestaoModel;
  ultima: boolean;
  questaoRespondida: (questao: QuestaoModel) => void;
  irPraProximoPasso: () => void;
}

export default function Questionario(props: QuestionarioProps) {
  function respostaFornecida(indice: number) {
    if (props.questao.naoRespondida) {
      props.questaoRespondida(props.questao.responderCom(indice));
    }
  }

  return (
    <div className={styles.questionario}>
      {props.questao ? (
        <Questão
          valor={props.questao}
          tempoPraResposta={6}
          respostaFornecida={respostaFornecida}
          tempoEsgotado={props.irPraProximoPasso}
        />
      ) : (
        false
      )}

      <Botao
        onClick={props.irPraProximoPasso}
        texto={props.ultima ? "Finalizar" : "Próxima"}
      />
    </div>
  );
}
