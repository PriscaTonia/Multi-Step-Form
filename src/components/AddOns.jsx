import { stateDetailsContext } from "../state/StateProvider";
import { useContext, useMemo, useEffect } from "react";
import { motion } from "framer-motion";

const Addons = () => {
  const { steps, setSteps, formDetails, setFormDetails } =
    useContext(stateDetailsContext);

  // Button Styles

  const backBtn =
    steps === 0
      ? "invisible"
      : "text-[#9699ab] hover:text-[#02295a] font-medium ";
  const btnContainer = "invisible";
  const btnStyles =
    "hover:bg-[#473dff] bg-[#02295a] text-white py-4 px-6 rounded-xl font-medium";
  const confirmBtnStyle =
    "hover:bg-[#473dff] bg-[#473dff] text-white py-4 px-6 rounded-xl font-medium";

  // Button Functions

  const nextStep = () => {
    // onSubmit();
    let step = steps + 1;
    setSteps(step);
  };
  const goBack = () => {
    let step = steps - 1;
    setSteps(step);
  };

  const isYearlyPlan = useMemo(
    () => formDetails.planFrequency === "Yearly",
    [formDetails.planFrequency]
  );

  const addons = [
    {
      id: "service",
      name: "Online service",
      text: "Access to multi player games",
      price: {
        monthly: 1,
        yearly: 10,
      },
    },
    {
      id: "storage",
      name: "Larger storage",
      text: "Extra 1TB of cloud save",
      price: {
        monthly: 2,
        yearly: 20,
      },
    },
    {
      id: "profile",
      name: "Customizable profile",
      text: "Custom theme on your profile",
      price: {
        monthly: 3,
        yearly: 30,
      },
    },
  ];

  const handleAddonClick = (addon) => {
    setFormDetails((currentFormDetails) => {
      let { addons } = currentFormDetails;

      const addonExists = getAddonIsSelected(addons, addon);

      if (addonExists) {
        addons = addons.filter((item) => item.id !== addon.id);
      } else {
        addons.push(addon);
      }

      localStorage.setItem("addons", JSON.stringify(addons));

      return { ...currentFormDetails, addons };
    });
  };

  const getAddonIsSelected = (addons = [], addon) =>
    addons.find((item) => item.id === addon.id);

  const activePlanBoxStyle = "bg-[#f0f6ff] border-[#473dff] ";
  const addonStyle =
    " w-full h-auto flex gap-[1rem] items-center py-3 px-4 mb-4 border rounded-md border-[#d6d9e6] hover:border-[#473dff] hover:cursor-pointer z-20";

  return (
    <motion.div
      animate={{
        x: 0,
      }}
      initial={{
        x: -100,
      }}
      className="w-full h-full flex justify-between flex-col"
    >
      <div>
        {addons.map((addon) => {
          const isActive = Boolean(
            getAddonIsSelected(formDetails.addons, addon)
          );

          return (
            <motion.section
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.97,
              }}
              key={addon.name}
              onClick={() => handleAddonClick(addon)}
              className={
                isActive
                  ? `${activePlanBoxStyle} ${addonStyle}`
                  : `${addonStyle}`
              }
            >
              {/* Check Box */}
              <label id="container" htmlFor={addon.id}>
                <input
                  type="checkbox"
                  onClick={() => handleAddonClick(addon)}
                  id={addon.id}
                  checked={isActive}
                  onChange={() => {}}
                />
                <span id="checkmark"></span>
              </label>
              {/* Texts */}
              <div className="w-full">
                <h3 className=" text-[#02295a] font-bold ">{addon.name}</h3>
                <p className=" text-[#9699ab] "> {addon.text} </p>
              </div>
              {/* Pricsa */}
              <p className="text-[#473dff] ">
                {isYearlyPlan
                  ? `+$${addon.price.yearly}/yr`
                  : `+$${addon.price.monthly}/mo`}
              </p>
            </motion.section>
          );
        })}
      </div>
      <div
        className={
          steps > 3 ? btnContainer : "flex justify-between w-full mt-8 lg:mt-0"
        }
      >
        <button onClick={goBack} className={backBtn}>
          Go Back
        </button>
        <motion.button
          // whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextStep}
          className={steps === 3 ? confirmBtnStyle : btnStyles}
        >
          {steps === 3 ? "Confirm" : "Next Step"}
        </motion.button>
      </div>{" "}
    </motion.div>
  );
};

export default Addons;
