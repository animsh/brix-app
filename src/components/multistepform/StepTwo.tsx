import React, { useState, useEffect } from "react";
import ChoiceItemComponent from "../formcomponents/ChoiceItemComponent";
import ChoiceItemType from "../../enums/ChoiceItemType";
import DevelopmentIcon from "../../assets/development.svg";
import WebDesignIcon from "../../assets/web_design.svg";
import MarketingIcon from "../../assets/marketing.svg";
import OtherIcon from "../../assets/other.svg";
import { connect } from "react-redux";
import { updateServiceType } from "../../actions/actions";
import { Dispatch } from "redux";
import { FormsState } from "../../actions/actionTypes";

interface StepTwoProps {
  serviceType: string;
  updateServiceType: typeof updateServiceType;
  isValidServices: boolean
}

function StepTwo(props: StepTwoProps) {
  // State to keep track of the active choice
  const [activeChoices, setActiveChoices] = useState<string[]>(
    props.serviceType.split(", ")
  );

  // Function to handle clicking a choice item
  const handleChoiceClick = (choiceLabel: string) => {
    setActiveChoices((prev) => {
      // Check if the item is already active
      const isActive = prev.includes(choiceLabel);
      // If active, remove it from the array, otherwise add it
      return isActive
        ? prev.filter((label) => label !== choiceLabel)
        : [...prev, choiceLabel];
    });
  };

  useEffect(() => {
    const serviceTypeString = activeChoices.join(", ");
    props.updateServiceType(serviceTypeString);
  }, [activeChoices]);

  return (
    <>
      <div className="step-heading-container">
        <h1 className="step-heading">Our Services</h1>
        <p className="step-subheading">
          Please select which service you are interested in.
        </p>
        <div className="step-body-container grid-container">
          <ChoiceItemComponent
            label="Development"
            type={ChoiceItemType.CUSTOM}
            icon={DevelopmentIcon}
            active={activeChoices.includes("Development")}
            onClick={() => handleChoiceClick("Development")}
          />

          <ChoiceItemComponent
            label="Web Design"
            type={ChoiceItemType.CUSTOM}
            icon={WebDesignIcon}
            active={activeChoices.includes("Web Design")}
            onClick={() => handleChoiceClick("Web Design")}
          />

          <ChoiceItemComponent
            label="Marketing"
            type={ChoiceItemType.CUSTOM}
            icon={MarketingIcon}
            active={activeChoices.includes("Marketing")}
            onClick={() => handleChoiceClick("Marketing")}
          />

          <ChoiceItemComponent
            label="Other"
            type={ChoiceItemType.CUSTOM}
            icon={OtherIcon}
            active={activeChoices.includes("Other")}
            onClick={() => handleChoiceClick("Other")}
          />

        </div>
        {!props.isValidServices && <span className="input-alert">Please select at lease one service!</span>}
      </div>
    </>
  );
}

const mapStateToProps = (state: FormsState) => {
  return {
    serviceType: state.serviceType,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    updateServiceType: (serviceType: string) =>
      dispatch(updateServiceType(serviceType)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StepTwo);
