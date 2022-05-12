import React from "react";
import Filho from "./Filho";

export default function Pai() {
  function falarComigo(param, param2, param3) {
    console.log(param, param2, param3);
  }

  return (
    <div>
      <Filho funcao={falarComigo} />
    </div>
  );
}
