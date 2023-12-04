import React from "react";
import ButtonComponent from "./formcomponents/ButtonComponent";
import Button from "../types/Button";
import ButtonType from "../enums/ButtonType";
import { click } from "@testing-library/user-event/dist/click";
import InputComponent from "./formcomponents/InputComponent";
import NameIcon from ".././assets/name.svg";
import InputType from "../enums/InputType";
import ChoiceItemComponent from "./formcomponents/ChoiceItemComponent";
import ChoiceItemType from "../enums/ChoiceItemType";
import DevelopmentIcon from ".././assets/development.svg";
import ChoiceItemIconUnSelected from ".././assets/choice_item_not_selected.svg";
import ChoiceItemIconSelected from ".././assets/choice_item_selected.svg";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import PaginationBarComponent from "./formcomponents/PaginationBar";
function StyleGuide() {
  return (
    <div className="style-guide-container">
      <Header></Header>

      <hr />

      <PaginationBarComponent currentPage={2} totalPages={4} />

      <hr />

      <ButtonComponent
        label="Primary Button"
        type={ButtonType.PRIMARY}
        onClick={() => {
          console.log(click);
        }}
      />

      <hr />

      <ButtonComponent
        label="Secondary Button"
        type={ButtonType.SECONDARY}
        onClick={() => {
          console.log(click);
        }}
      />

      <hr />

      <InputComponent
        label="Name"
        placeholder="Enter name"
        icon={NameIcon}
        input="text"
        value=""
        type={InputType.INLINE_ICON}
        onChange={() => {}}
      />

      <hr />

      <InputComponent
        label="Name"
        placeholder="Enter email"
        icon={NameIcon}
        input="text"
        value=""
        type={InputType.INLINE_BUTTON}
        inlineText="Subscribe"
        onChange={() => {}}
      />

      <hr />

      <ChoiceItemComponent
        label="Active Choice"
        type={ChoiceItemType.CUSTOM}
        icon={DevelopmentIcon}
        active={true}
        onClick={() => {}}
      />

      <hr />

      <ChoiceItemComponent
        label="Deactive Choice"
        type={ChoiceItemType.CUSTOM}
        icon={DevelopmentIcon}
        active={false}
        onClick={() => {}}
      />

      <hr />

      <ChoiceItemComponent
        label="Active Choice"
        type={ChoiceItemType.TRADITIONAL}
        icon={ChoiceItemIconSelected}
        active={true}
        onClick={() => {}}
      />

      <hr />

      <ChoiceItemComponent
        label="Deactive Choice"
        type={ChoiceItemType.TRADITIONAL}
        icon={ChoiceItemIconUnSelected}
        active={false}
        onClick={() => {}}
      />

      <hr />

      <Footer />
    </div>
  );
}

export default StyleGuide;
