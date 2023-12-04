import React from "react";
import Input from "../../types/Input";
import InputType from "../../enums/InputType";

function InputComponent(props: Input) {
  return (
    <div className={`input-container ${props.class}`}>
      {props.type === InputType.INLINE_ICON && (
        <label className="input-label" htmlFor="input-component">
          {props.label}
        </label>
      )}
      <div className={`input input-${props.isValid}`} aria-label={props.label}>
        <input
          id="input-component"
          placeholder={props.placeholder}
          inputMode={props.input}
          value={props.value}
          onChange={(e) => props.onChange(e)}
        ></input>
        {props.type === InputType.INLINE_ICON ? (
          <img className={props.type} src={props.icon} alt={props.type}></img>
        ) : (
          <button className={props.type}>{props.inlineText}</button>
        )}
      </div>
      {!props.isValid && (
        <span className="input-alert">Enter Valid {props.label}</span>
      )}
    </div>
  );
}

export default InputComponent;
