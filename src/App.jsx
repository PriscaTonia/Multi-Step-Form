import { useContext, useEffect } from "react";
import { stateDetailsContext } from "./state/StateProvider";
import PersonalInfo from "./components/PersonalInfo";
import SelectPlan from "./components/SelectPlan";
import Addons from "./components/AddOns";
import Summary from "./components/Summary";
import ThankYou from "./components/Thankyou";
import { motion } from "framer-motion";

function App() {
  // State
  const { steps, setSteps, headers, setHeaders } =
    useContext(stateDetailsContext);

  // Local Storage
  useEffect(() => {
    localStorage.setItem("steps", steps.toString());

    if (steps == 4) {
      localStorage.clear();
    }
  }, [steps]);

  // Styles
  const defaultStepStyles = "py-2 px-4 border rounded-full cursor-pointer";
  const activeStepStyles =
    "py-2 px-4 bg-[#bfe2fd] text-[#02295a]  border-none rounded-full font-medium cursor-pointer ";

  return (
    <motion.div className=" lg:flex justify-center items-center bg-[#f0f6ff] w-full h-auto min-h-screen pb-5 lg:pb-0 ">
      {/* Main Container */}
      <motion.main
        animate={{
          x: 0,
        }}
        initial={{
          x: "-100vw",
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-col lg:justify-between max-w-[1400px] lg:flex-row w-full lg:w-[80%] lg:rounded-xl lg:bg-[#ffffff] lg:p-5 "
      >
        {/* Steps Container Section */}
        <section className="flex justify-center lg:justify-normal items-start gap-2 lg:gap-8 lg:flex-col lg:rounded-xl w-full min-h-[200px] lg:w-[30%] lg:min-h-[600px] p-8 bg-[url('./assets/images/bg-sidebar-mobile.svg')] bg-no-repeat bg-cover lg:bg-[url('./assets/images/bg-sidebar-desktop.svg')]">
          {/* step one */}
          <div className="flex items-center gap-6 lg:min-w-[250px]">
            <p
              onClick={() => setSteps(0)}
              className={`${
                steps === 0 ? activeStepStyles : defaultStepStyles
              }`}
            >
              1
            </p>
            <div className="hidden lg:flex flex-col">
              <h4 className="uppercase text-[#9699ab] ">step 1</h4>
              <p className="text-[#ffffff] uppercase text-[1.1rem] font-medium tracking-wider ">
                your info
              </p>
            </div>
          </div>
          {/* step two */}
          <div className="flex items-center gap-6 lg:min-w-[250px]">
            <p
              onClick={() => setSteps(1)}
              className={`${
                steps === 1 ? activeStepStyles : defaultStepStyles
              }`}
            >
              2
            </p>
            <div className="hidden lg:flex flex-col">
              <h4 className="uppercase text-[#9699ab] ">step 2</h4>
              <p className="text-[#ffffff] uppercase text-[1.1rem] font-medium tracking-wider ">
                select plan
              </p>
            </div>
          </div>
          {/* step three */}
          <div className="flex items-center gap-6 lg:min-w-[250px]">
            <p
              onClick={() => setSteps(2)}
              className={`${
                steps === 2 ? activeStepStyles : defaultStepStyles
              }`}
            >
              3
            </p>
            <div className="hidden lg:flex flex-col">
              <h4 className="uppercase text-[#9699ab] ">step 3</h4>
              <p className="text-[#ffffff] uppercase text-[1.1rem] font-medium tracking-wider ">
                add-ons
              </p>
            </div>
          </div>
          {/* step four */}
          <div className="flex items-center gap-6 lg:min-w-[250px]">
            <p
              onClick={() => setSteps(3)}
              className={`${steps >= 3 ? activeStepStyles : defaultStepStyles}`}
            >
              4
            </p>
            <div className="hidden lg:flex flex-col">
              <h4 className="uppercase text-[#9699ab] ">step 4</h4>
              <p className="text-[#ffffff] uppercase text-[1.1rem] font-medium tracking-wider ">
                summary
              </p>
            </div>
          </div>
        </section>

        {/* Form Container Section */}
        <section className="flex flex-col rounded-xl  gap-12 w-[90%] mt-[-50px] mx-auto lg:m-0 lg:w-[60%] pt-10 pb-6 px-6 lg:px-0 bg-white ">
          {/* Step Header */}
          {steps < headers.length && (
            <div className="flex flex-col w-full">
              <h1 className="text-[#02295a] text-[1.5rem] lg:text-[2.5rem] font-bold pb-6">
                {headers[steps]?.title}
              </h1>
              <p className=" text-[#9699ab] text-[15px] lg:text-[1.1rem] ">
                {" "}
                {headers[steps]?.text}{" "}
              </p>
            </div>
          )}
          {/* Steps Content */}
          <div className="flex h-[80%] w-full lg:w-[75%]">
            {steps === 0 ? (
              <PersonalInfo />
            ) : steps === 1 ? (
              <SelectPlan />
            ) : steps === 2 ? (
              <Addons />
            ) : steps === 3 ? (
              <Summary />
            ) : steps === 4 ? (
              <ThankYou />
            ) : (
              ""
            )}
          </div>
        </section>
      </motion.main>
    </motion.div>
  );
}

export default App;
