import ArcadeSVG from "../assets/images/icon-arcade.svg";
import AdvancedSVG from "../assets/images/icon-advanced.svg";
import ProSVG from "../assets/images/icon-pro.svg";
import { stateDetailsContext } from "../state/StateProvider";
import { useContext, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

const SelectPlan = () => {
  // Context State

  const { steps, setSteps, formDetails, setFormDetails } =
    useContext(stateDetailsContext);

  // Button Functions

  const nextStep = () => {
    let step = steps + 1;
    setSteps(step);
  };
  const goBack = () => {
    let step = steps - 1;
    setSteps(step);
  };

  useEffect(() => {
    localStorage.setItem("frequency", formDetails.planFrequency);
    localStorage.setItem("planName", formDetails.plan.name);
    localStorage.setItem("price", JSON.stringify(formDetails.plan.price));
    localStorage.setItem("img", formDetails.plan.image);
  }, [formDetails.planFrequency, formDetails.plan]);

  const isYearlyPlan = useMemo(
    () => formDetails.planFrequency === "Yearly",
    [formDetails.planFrequency]
  );

  const plans = useMemo(
    () => [
      {
        name: "Arcade",
        price: {
          monthly: 9,
          yearly: 90,
        },
        image: ArcadeSVG,
      },
      {
        name: "Advanced",
        price: {
          monthly: 12,
          yearly: 120,
        },
        image: AdvancedSVG,
      },
      {
        name: "Pro",
        price: {
          monthly: 15,
          yearly: 150,
        },
        image: ProSVG,
      },
    ],
    []
  );

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

  // Other Styles

  const spanTxtStyle = "text-[#9699ab]";
  const headerTxtStyle = "flex flex-col gap-1 text-[#02295a] font-bold";
  const imgStyle = "w-[50px] h-[50px]";
  const boxStyle =
    "flex flex-row gap-6 lg:flex-col lg:justify-between p-5 h-auto lg:min-h-[200px] w-full lg:w-[30%] border rounded-lg cursor-pointer";
  const planBoxStyle = "border-[#9699ab]";
  const activePlanBoxStyle = "bg-[#f0f6ff] border-[#473dff] ";
  const frequencyTextStyle = "text-[#9699ab] font-medium";
  const activeFrequencyTextStyle = "text-[#02295a] font-medium";

  return (
    <motion.div
      animate={{
        x: 0,
      }}
      initial={{
        x: -100,
      }}
      className="flex flex-col w-full gap-10 z-20"
    >
      {/* Plans */}
      <div className="flex flex-col gap-4 lg:flex-row w-full justify-between">
        {/* Begining of  Plans */}
        {plans.map((plan) => {
          const isActive = plan.name === formDetails.plan.name;

          return (
            <motion.div
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.97,
              }}
              key={plan.name}
              onClick={() => {
                setFormDetails({
                  ...formDetails,
                  plan,
                });
              }}
              className={
                isActive
                  ? `${boxStyle} ${activePlanBoxStyle}`
                  : `${boxStyle} ${planBoxStyle}`
              }
            >
              <img src={plan.image} alt="" className={imgStyle} />
              <h4 className={headerTxtStyle}>
                {plan.name}
                <span className={spanTxtStyle}>
                  $
                  {isYearlyPlan
                    ? `${plan.price.yearly}/yr`
                    : `${plan.price.monthly}/mo`}
                </span>
                <span
                  className={
                    isYearlyPlan === false ? "hidden" : "flex text-[0.7rem]"
                  }
                >
                  2 months free
                </span>
              </h4>
            </motion.div>
          );
        })}
      </div>
      {/* End of Plans */}
      {/* Monthly or Yearly */}
      <div className="flex justify-center bg-[#f0f6ff] gap-8 items-center p-6 rounded-lg">
        <p
          className={
            isYearlyPlan === false
              ? activeFrequencyTextStyle
              : frequencyTextStyle
          }
        >
          Monthly
        </p>{" "}
        <div className="cursor-pointer">
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onChange={(e) => {
              const isChecked = e.target.checked;

              const planFrequency = isChecked === false ? "Monthly" : "Yearly";
              setFormDetails({ ...formDetails, planFrequency });
            }}
            checked={isYearlyPlan}
          />
          <label htmlFor="checkbox" className="label cursor-pointer">
            <div className="ball cursor-pointer"></div>
          </label>
        </div>
        <p
          className={
            isYearlyPlan === true
              ? activeFrequencyTextStyle
              : frequencyTextStyle
          }
        >
          Yearly
        </p>
      </div>
      <div
        className={
          steps > 3 ? btnContainer : "flex justify-between w-full mt-5 lg:mt-0"
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

export default SelectPlan;
