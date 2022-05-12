import React from "react";

export default function If(props) {
  if (props.teste) {
    return props.children;
  } else {
    return null;
  }
}
