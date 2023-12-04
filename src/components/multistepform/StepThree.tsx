import React, { useState } from "react";
import ChoiceItemComponent from "../formcomponents/ChoiceItemComponent";
import ChoiceItemType from "../../enums/ChoiceItemType";
import { connect } from "react-redux";
import { updateBudget } from "../../actions/actions";
import { Dispatch } from "redux";
import { FormsState } from "../../actions/actionTypes";

interface StepThreeProps {
  budget: string;
  updateBudget: typeof updateBudget;
  isValidBudget: boolean
}

function StepThree(props: StepThreeProps) {
  // State to keep track of the active choice
  const [activeChoice, setActiveChoice] = useState<string | null>(props.budget);

  // Function to handle clicking a choice item
  const handleChoiceClick = (choiceLabel: string) => {
    setActiveChoice(choiceLabel);
    props.updateBudget(choiceLabel);
  };

  return (
    <>
      <div className="step-heading-container">
        <h1 className="step-heading">What's your project budget?</h1>
        <p className="step-subheading">
          Please select the project budget range you have in mind.
        </p>
        <div className="step-body-container grid-container">
          <ChoiceItemComponent
            label="$5.000 - $10.000"
            type={ChoiceItemType.TRADITIONAL}
            active={activeChoice === "$5.000 - $10.000"}
            onClick={() => handleChoiceClick("$5.000 - $10.000")}
          />

          <ChoiceItemComponent
            label="$10.000 - $20.000"
            type={ChoiceItemType.TRADITIONAL}
            active={activeChoice === "$10.000 - $20.000"}
            onClick={() => handleChoiceClick("$10.000 - $20.000")}
          />

          <ChoiceItemComponent
            label="$20.000 - $50.000"
            type={ChoiceItemType.TRADITIONAL}
            active={activeChoice === "$20.000 - $50.000"}
            onClick={() => handleChoiceClick("$20.000 - $50.000")}
          />

          <ChoiceItemComponent
            label="$50.000 +"
            type={ChoiceItemType.TRADITIONAL}
            active={activeChoice === "$50.000 +"}
            onClick={() => handleChoiceClick("$50.000 +")}
          />
        </div>
        {!props.isValidBudget && <span className="input-alert">Please select budget to continue!</span>}
      </div>
    </>
  );
}

const mapStateToProps = (state: FormsState) => {
  return {
    budget: state.budget,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    updateBudget: (serviceType: string) => dispatch(updateBudget(serviceType)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StepThree);
