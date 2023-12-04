import React from "react";
import ButtonComponent from "../formcomponents/ButtonComponent";
import ButtonType from "../../enums/ButtonType";
import Logo from "../../assets/logo.svg";
function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="Brix Templates Logo" className="header-logo" />
      <ButtonComponent
        label="Clone now"
        type={ButtonType.PRIMARY}
        onClick={() => {
          console.log("click");
        }}
      />
    </header>
  );
}

export default Header;
