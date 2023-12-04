import React from "react";
import ButtonComponent from "../formcomponents/ButtonComponent";
import ButtonType from "../../enums/ButtonType";
import SubmitIcon from "../../assets/submit.svg";
import { connect } from "react-redux";
import { FormsState } from "../../actions/actionTypes";
import axios, { AxiosResponse } from "axios";

interface StepFourProps {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceType: string;
  budget: string;
}

interface PostData {
  full_name: string;
  email: string;
  phone: string;
  company: string;
  intrested_services: string;
  budget: string;
  requested_at: string;
}

const bearerToken: string =
  "";
const apiURL: string = "";

function StepFour(props: StepFourProps) {
  const handleSubmitClick = () => {
    const services = props.serviceType
      .split(", ")
      .filter(Boolean) // This removes any empty strings more reliably
      .map((service) => `'${service.toLocaleLowerCase().replace(/\s+/g, "_")}'`) // Replace all spaces with underscores
      .join(",");

    const pythonSetString = `{${services}}`;

    // Get current date and time in the desired format
    const formatter = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    // Replace commas and slashes to match the desired format
    const formattedDateTime = formatter
      .format(new Date())
      .replace(/\/|, /g, "-")
      .replace(" ", "T");

    let data: PostData = {
      full_name: props.name,
      email: props.email,
      phone: props.phone,
      company: props.company,
      intrested_services: pythonSetString, // Assuming the case sensitivity is intended
      budget: props.budget,
      requested_at: formattedDateTime,
    };

    console.log(JSON.stringify(data).replaceAll("$", ""));

    postDataToAPI(data, bearerToken, apiURL)
      .then((result) => {
        console.log("Your request is submitted!");
        alert("Your request is submitted!");
      })
      .catch((error) => {
        // Handle the error here
        alert(`${error}`);
      });
  };

  async function postDataToAPI(
    data: PostData,
    token: string,
    url: string
  ): Promise<AxiosResponse<any>> {
    try {
      const response = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Success:", response.data);
      return response;
    } catch (error: any) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      throw error; // Rethrow the error for the caller to handle
    }
  }

  return (
    <>
      <div className="step-heading-container step-center-align">
        <img
          src={SubmitIcon}
          alt="submit icon"
          style={{ height: "8rem", marginBottom: "1rem" }}
        />
        <h1 className="step-heading">Submit your quote request</h1>
        <p
          className="step-subheading"
          style={{
            width: "22rem",
            textAlign: "center",
            marginBottom: "1.6rem",
          }}
        >
          Please review all the information you previously typed in the past
          steps, and if all is okay, submit your message to receive a project
          quote in 24 - 48 hours.
        </p>
        <ButtonComponent
          label="Submit"
          type={ButtonType.PRIMARY}
          onClick={handleSubmitClick}
        />
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
    serviceType: state.serviceType,
    budget: state.budget,
  };
};

export default connect(mapStateToProps)(StepFour);
