import React from "react";
import InputComponent from "../formcomponents/InputComponent";
import InputType from "../../enums/InputType";
import Logo from "../../assets/logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <img src={Logo} alt="Brix Templates Logo" className="footer-logo" />
        <p className="footer-subheading">
          Copyright © 2021 BRIX Templates | All Rights Reserved
        </p>
      </div>
      <InputComponent
        label="Email"
        placeholder="Enter your email"
        input="email"
        value=""
        type={InputType.INLINE_BUTTON}
        inlineText="Subscribe"
        isValid={true}
        onChange={() => {}}
      />
    </footer>
  );
}

export default Footer;
