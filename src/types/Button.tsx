import ButtonType from "../enums/ButtonType";

type Button = {
  label: string;
  type: ButtonType;
  className?: string;
  onClick(): void;
};

export default Button;
