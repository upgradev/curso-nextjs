import React from "react";

export default function NumeroDisplay(props) {
  return (
    <div
      style={{
        height: "50px",
        width: "50px",
        borderRadius: "25px",
        backgroundColor: "#222",
        color: "#fff",
        fontSize: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px"
      }}
    >
        {props.numero}
    </div>
  );
}
