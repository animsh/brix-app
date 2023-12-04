import React from "react";
import Button from "../../types/Button";

function ButtonComponent(props: Button) {
  return (
    <>
      <button
        type="button"
        onClick={() => props.onClick()}
        className={`btn-${props.type} ${props.className}`}
      >
        {props.label}
      </button>
    </>
  );
}

export default ButtonComponent;
