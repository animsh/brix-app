import React, { ChangeEvent, SyntheticEvent } from "react";
import { FormActionTypes } from "../../actions/actionTypes";
import { eventNames } from "process";

function DropDownComponet(props: {
  label: string;
  value: string;
  isValid: boolean;
  onSelect(e: any): void;
  options: {
    company_name: string;
    company_address: string;
    company_techstack: string;
    company_website: string;
  }[];
}) {
  return (
    <>
      <div className={`input-container`}>
        <label className="input-label" htmlFor="input-dropdown">
          {props.label}
        </label>
        <select
          className={`input input-${props.isValid} input-select`}
          id="input-dropdown"
          title="Companies"
          defaultValue={props.value}
          onChange={(e) => props.onSelect(e)}
        >
          {props.options.map((option) => (
            <option key={option.company_website} value={option.company_name}>
              {option.company_name}
            </option>
          ))}
        </select>
        {!props.isValid && (
          <span className="input-alert">Enter Valid {props.label}</span>
        )}
      </div>
    </>
  );
}

export default DropDownComponet;
