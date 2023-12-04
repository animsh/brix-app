import { ChangeEvent } from "react";
import InputType from "../enums/InputType";

type Input = {
  label: string;
  placeholder: string;
  icon?: string;
  input:
    | "search"
    | "text"
    | "none"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | undefined;
  type: InputType;
  inlineText?: string;
  class?: string;
  value: string | number;
  isValid?: boolean
  onChange(e: ChangeEvent<HTMLInputElement>): void;
};

export default Input;
