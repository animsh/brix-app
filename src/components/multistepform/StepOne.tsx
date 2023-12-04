import React from "react";
import InputComponent from "../formcomponents/InputComponent";
import InputType from "../../enums/InputType";
import NameIcon from "../../assets/name.svg";
import EmailIcon from "../../assets/email.svg";
import PhoneIcon from "../../assets/phone.svg";
import CompanyIcon from "../../assets/company.svg";
import { connect } from "react-redux";
import {
  updateName,
  updateEmail,
  updatePhone,
  updateCompany,
} from "../../actions/actions";
import { Dispatch } from "redux";
import { FormsState } from "../../actions/actionTypes";
import DropDownComponet from "../formcomponents/DropDownCompoent";
import { Companies } from "../../assets/companies";

interface StepOneProps {
  name: string;
  email: string;
  phone: string;
  company: string;
  updateName: typeof updateName;
  updateEmail: typeof updateEmail;
  updatePhone: typeof updatePhone;
  updateCompany: typeof updateCompany;
  isValidName: boolean;
  isValidPhone: boolean;
  isValidEmail: boolean;
  isValidCompany: boolean;
}

function StepOne(props: StepOneProps) {
  const options = Companies;

  const formatPhoneNumber = (input: string) => {
    // Remove non-numeric characters
    const numericInput = input.replace(/\D/g, "");

    // Apply the phone number format
    const formattedNumber =
      numericInput.length >= 10
        ? `(${numericInput.slice(0, 3)}) ${numericInput.slice(
            3,
            6
          )} - ${numericInput.slice(6, 10)}`
        : numericInput;

    return formattedNumber;
  };

  return (
    <>
      <div className="step-heading-container">
        <h1 className="step-heading">Contact details</h1>
        <p className="step-subheading">
          Lorem ipsum dolor sit amet consectetur adipisc.
        </p>
        <div className="step-body-container grid-container">
          <InputComponent
            label="Name"
            placeholder="John Carter"
            icon={NameIcon}
            input="text"
            class="grid-item"
            isValid={props.isValidName}
            type={InputType.INLINE_ICON}
            onChange={(e) => props.updateName(e.target.value)}
            value={props.name}
          />

          <InputComponent
            label="Email"
            placeholder="Email Address"
            icon={EmailIcon}
            input="email"
            class="grid-item"
            isValid={props.isValidEmail}
            type={InputType.INLINE_ICON}
            onChange={(e) => props.updateEmail(e.target.value)}
            value={props.email}
          />

          <InputComponent
            label="Phone"
            placeholder="(123) 456 - 7890"
            icon={PhoneIcon}
            input="tel"
            class="grid-item"
            isValid={props.isValidPhone}
            type={InputType.INLINE_ICON}
            onChange={(e) => props.updatePhone(e.target.value)}
            value={formatPhoneNumber(props.phone)}
          />

          {/* <InputComponent
            label="Company"
            placeholder="Company name"
            icon={CompanyIcon}
            input="text"
            class="grid-item"
            isValid={props.isValidCompany}
            type={InputType.INLINE_ICON}
            onChange={(e) => props.updateCompany(e.target.value)}
            value={props.company}
          /> */}

          <DropDownComponet
            label="Company"
            options={options}
            value={props.company}
            isValid={props.isValidCompany}
            onSelect={(e) => {
              console.log(e.target.value);
              props.updateCompany(e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state: FormsState) => {
  return {
    name: state.name,
    email: state.email,
    phone: state.phone,
    company: state.company,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    updateName: (name: string) => dispatch(updateName(name)),
    updateEmail: (email: string) => dispatch(updateEmail(email)),
    updatePhone: (phone: string) => dispatch(updatePhone(phone)),
    updateCompany: (company: string) => dispatch(updateCompany(company)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StepOne);
