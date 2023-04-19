import { createContext, useState } from "react";
import ArcadeSVG from "../assets/images/icon-arcade.svg";

// Creating a context with context API
export const stateDetailsContext = createContext();

const StateProvider = (props) => {
  // Creating my different states
  const [steps, setSteps] = useState(0);
  const [headers, setHeaders] = useState([
    {
      title: "Personal info",
      text: "Please provide your name, email address and, phone number.",
    },
    {
      title: "Select your plan",
      text: "You have the option of monthly or yearly billing.",
    },
    {
      title: "Pick add-ons",
      text: "Add-ons help enhance your gaming experience.",
    },
    {
      title: "Finishing up",
      text: "Double-check everything looks Ok before confirming.",
    },
  ]);
  const [formDetails, setFormDetails] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    planFrequency: "",
    plan: {
      name: "Arcade",
      price: {
        monthly: 9,
        yearly: 90,
      },
      image: ArcadeSVG,
    },
    addons: [],
    totalPrice: 0,
  });

  const value = {
    steps,
    setSteps,
    headers,
    setHeaders,
    formDetails,
    setFormDetails,
  };

  return (
    <>
      <stateDetailsContext.Provider value={value}>
        {props.children}
      </stateDetailsContext.Provider>
    </>
  );
};

export default StateProvider;
