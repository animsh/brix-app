import React from "react";
import ChoiceItem from "../../types/ChoiceItem";
import ChoiceItemType from "../../enums/ChoiceItemType";
import ChoiceItemSelectedIcon from "../../assets/choice_item_selected.svg";
import ChoiceItemDeSelectedIcon from "../../assets/choice_item_not_selected.svg";

function ChoiceItemComponent(props: ChoiceItem) {
  const handleClick = () => {
    props.onClick();
  };

  const iconSrc =
    props.type === ChoiceItemType.TRADITIONAL && props.active
      ? ChoiceItemSelectedIcon
      : ChoiceItemDeSelectedIcon;

  return (
    <div className={`choice-item-${props.active}`} onClick={handleClick}>
      {props.type === ChoiceItemType.CUSTOM ? (
        <img
          className={`choice-item-icon ${props.type}-icon `}
          src={props.icon}
        />
      ) : (
        <img className={`choice-item-icon ${props.type}-icon `} src={iconSrc} />
      )}

      <p className="choice-item-label">{props.label}</p>
    </div>
  );
}

export default ChoiceItemComponent;
