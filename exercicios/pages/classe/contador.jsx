import React, { Component } from "react";
import Contador from "../../components/Contador";

export default class contador extends Component {
  render() {
    return (
      <>
        <Contador valorInicial={100} passo={37} />
       
      </>
    );
  }
}
