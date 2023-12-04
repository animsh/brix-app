import React, { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import PaginationBarComponent from "../formcomponents/PaginationBar";
import ButtonComponent from "../formcomponents/ButtonComponent";
import ButtonType from "../../enums/ButtonType";
import StepOne from "../multistepform/StepOne";
import StepTwo from "../multistepform/StepTwo";
import StepThree from "../multistepform/StepThree";
import StepFour from "../multistepform/StepFour";
import { connect } from "react-redux";
import { FormsState } from "../../actions/actionTypes";

interface HomeProps {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceType: string;
  budget: string;
}

interface ValidationErrors {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  serviceType?: string;
  budget?: string;
}

function Home(props: HomeProps) {
  const [currentPageState, setCurrentPageState] = useState(1);
  const [isValidName, setIsValidName] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPhone, setIsValidPhone] = useState(true);
  const [isValidCompany, setIsValidCompany] = useState(true);
  const [isValidService, setIsValidService] = useState(true);
  const [isValidBudget, setIsValidBudget] = useState(true);
  const totalPagesCount = 4;

  // Helper functions for validation
  const isValidEmailAddress = (email: string): boolean => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phone: string): boolean => {
    const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    return phoneRegex.test(phone);
  };

  // Validation functions for each step
  const validateStepOne = (): ValidationErrors => {
    let newErrors: ValidationErrors = {};
    if (!props.name.trim()) {
      newErrors.name = "Name is required.";
      setIsValidName(false);
    } else {
      setIsValidName(true);
    }

    if (!isValidEmailAddress(props.email)) {
      newErrors.email = "Please enter a valid email.";
      setIsValidEmail(false);
    } else {
      setIsValidEmail(true);
    }
    if (!isValidPhoneNumber(props.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
      setIsValidPhone(false);
    } else {
      setIsValidPhone(true);
    }
    if (
      !props.company ||
      !props.company.trim() ||
      props.company.trim() === "None"
    ) {
      console.log(false, props.company);
      newErrors.company = "Company is required.";
      setIsValidCompany(false);
    } else {
      setIsValidCompany(true);
    }
    return newErrors;
  };

  const validateStepTwo = (): ValidationErrors => {
    let newErrors: ValidationErrors = {};
    if (!props.serviceType.trim()) {
      newErrors.serviceType = "Please select a service type.";
      setIsValidService(false);
    } else {
      setIsValidService(true);
    }
    return newErrors;
  };

  const validateStepThree = (): ValidationErrors => {
    let newErrors: ValidationErrors = {};
    // Assuming budget is a numeric field, you may want to check if it's a number
    if (!props.budget.trim()) {
      newErrors.budget = "Budget is required.";
      setIsValidBudget(false);
    } else {
      setIsValidBudget(true);
    }
    return newErrors;
  };

  // Handler for the Next button click
  const handleNextClick = () => {
    let newErrors: ValidationErrors = {};

    // Call the appropriate validation function based on the current page
    if (currentPageState === 1) newErrors = validateStepOne();
    else if (currentPageState === 2) newErrors = validateStepTwo();
    else if (currentPageState === 3) newErrors = validateStepThree();

    // If there are validation errors, join them into a string and show in an alert
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // If validation passes, navigate to the next step
    setCurrentPageState(currentPageState + 1);
  };

  const handlePreviousClick = () => {
    setCurrentPageState(currentPageState - 1);
  };

  return (
    <div className="home-container">
      <Header />

      <div className="main-body-container">
        <h1 className="main-body-headline">Get a project Quote</h1>
        <p className="main-body-subheading">
          Please fill the form below to receive a quote for your project. Feel
          free to add as much detail as needed.
        </p>
        <div className="form-container">
          <div className="form-pagination-container">
            <PaginationBarComponent
              currentPage={currentPageState}
              totalPages={4}
            />
          </div>
          <div className="form-body-container">
            {currentPageState === 1 && (
              <StepOne
                isValidName={isValidName}
                isValidPhone={isValidPhone}
                isValidEmail={isValidEmail}
                isValidCompany={isValidCompany}
              />
            )}
            {currentPageState === 2 && (
              <StepTwo isValidServices={isValidService} />
            )}
            {currentPageState === 3 && (
              <StepThree isValidBudget={isValidBudget} />
            )}
            {currentPageState === 4 && <StepFour />}
          </div>
        </div>
        <div className="form-pagination-controller">
          {currentPageState !== 1 && (
            <ButtonComponent
              label="Previous step"
              type={ButtonType.SECONDARY}
              className="margin-fix-right"
              onClick={handlePreviousClick}
            />
          )}

          {currentPageState !== totalPagesCount && (
            <ButtonComponent
              label="Next step"
              type={ButtonType.PRIMARY}
              className="margin-fix-left"
              onClick={handleNextClick}
            />
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

const mapStateToProps = (state: FormsState) => {
  return {
    name: state.name,
    email: state.email,
    phone: state.phone,
    company: state.company,
    serviceType: state.serviceType,
    budget: state.budget,
  };
};

export default connect(mapStateToProps)(Home);
