import React from "react";

export default function SomentePar(props) {
  const numeroPar = props.numero % 2 === 0;
  //   return numeroPar ? <span>{props.numero}</span> : null;
  return <div>{numeroPar ? <span>{props.numero}</span> : null}</div>;

  //   if (props.numero % 2 == 0) {
  //     return <span>{props.numero}</span>;
  //   } else {
  //     return null;
  //   }
}
