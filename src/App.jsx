import { useContext } from "react";
import { stateDetailsContext } from "./state/StateProvider";
import PersonalInfo from "./components/PersonalInfo";
import SelectPlan from "./components/SelectPlan";
import Addons from "./components/AddOns";

function App() {
  const {
    steps,
    setSteps,
    buttonType,
    setButtonType,
    headers,
    setHeaders,
    formDetails,
    setFormDetails,
  } = useContext(stateDetailsContext);

  // Styles

  const backBtn =
    steps === 0
      ? "invisible"
      : "text-[#9699ab] hover:text-[#02295a] font-medium ";
  const defaultStepStyles = "py-2 px-4 border rounded-full";
  const activeStepStyles =
    "py-2 px-4 bg-[#bfe2fd] text-[#02295a]  border-none rounded-full font-medium ";

  // Button Functions

  const NextStep = () => {
    let step = steps + 1;
    setSteps(step);
    if (steps === headers.length - 1) {
      return <h1>Hello There, You have Finished</h1>;
    }
  };

  const GoBack = () => {
    let step = steps - 1;
    setSteps(step);
  };

  return (
    <div className=" lg:flex justify-center items-center bg-[#f0f6ff] w-full h-screen ">
      {/* Main Container */}
      <main className="flex flex-col lg:justify-between lg:flex-row w-full h-auto lg:w-[80%] min-h-[90%] lg:rounded-xl bg-[#ffffff] lg:p-5 ">
        {/* Steps Container Section */}
        <section className="flex justify-center lg:justify-normal items-start gap-2 lg:gap-8 lg:flex-col lg:rounded-xl w-full min-h-[200px] lg:w-[30%] lg:min-h-full p-8 bg-[url('./assets/images/bg-sidebar-mobile.svg')] bg-no-repeat bg-cover lg:bg-[url('./assets/images/bg-sidebar-desktop.svg')]">
          {/* step one */}
          <div className="flex items-center gap-6 lg:min-w-[250px]">
            <p
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
              className={`${
                steps === 3 ? activeStepStyles : defaultStepStyles
              }`}
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
        <section className="flex flex-col gap-12 w-full lg:w-[60%] pt-10 pb-6 ">
          {/* Step Header */}
          <div className="flex flex-col w-full">
            <h1 className="text-[#02295a] text-[2.5rem] font-bold pb-6">
              {headers[steps].title}
            </h1>
            <p className=" text-[#9699ab] text-[1.1rem] ">
              {" "}
              {headers[steps].text}{" "}
            </p>
          </div>
          {/* Steps Content */}
          <div className="flex h-[80%] w-full lg:w-[75%]">
            {steps === 0 ? (
              <PersonalInfo />
            ) : steps === 1 ? (
              <SelectPlan />
            ) : steps === 2 ? (
              <Addons />
            ) : (
              "hello"
            )}
          </div>
          {/* Button Container */}
          <div className="flex justify-between w-full lg:max-w-[75%]">
            <button onClick={GoBack} className={backBtn}>
              Go Back
            </button>
            <button
              type={buttonType}
              onClick={NextStep}
              className="hover:bg-[#473dff] bg-[#02295a] text-white py-4 px-6 rounded-xl font-medium "
            >
              {steps === 3 ? "Confirm" : "Next Step"}
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
