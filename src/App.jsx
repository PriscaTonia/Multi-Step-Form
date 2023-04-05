import { useState } from "react";

function App() {
  const [step, setStep] = useState(0);
  return (
    <div className=" lg:flex justify-center items-center bg-[#f0f6ff] w-full h-screen ">
      {/* Main Container */}
      <div className="flex flex-col lg:flex-row w-full h-auto lg:w-[80%] min-h-[80%] lg:rounded-xl bg-[#ffffff] lg:p-5 ">
        {/* Steps Container Section */}
        <section className="flex justify-center lg:justify-normal items-start gap-2 lg:gap-8 lg:flex-col lg:rounded-xl w-full min-h-[200px] lg:w-[30%] lg:min-h-full p-8 bg-[url('./assets/images/bg-sidebar-mobile.svg')] bg-no-repeat bg-cover lg:bg-[url('./assets/images/bg-sidebar-desktop.svg')]">
          {/* step one */}
          <div className="flex items-center gap-6 lg:min-w-[250px]">
            <p
              className={`${step === 0 ? activeStepStyles : defaultStepStyles}`}
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
              className={`${step === 1 ? activeStepStyles : defaultStepStyles}`}
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
              className={`${step === 2 ? activeStepStyles : defaultStepStyles}`}
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
              className={`${step === 3 ? activeStepStyles : defaultStepStyles}`}
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
      </div>
    </div>
  );
}

export default App;

const defaultStepStyles = "py-2 px-4 border rounded-full";
const activeStepStyles =
  "py-2 px-4 bg-[#bfe2fd] text-[#02295a]  border-none rounded-full font-medium ";
