import ChoiceItemType from "../enums/ChoiceItemType";

type ChoiceItem = {
  label: string;
  icon?: string;
  type: ChoiceItemType;
  active: boolean;
  onClick(): void;
};

export default ChoiceItem;
