import { stateDetailsContext } from "../state/StateProvider";
import { useContext, useEffect, useMemo } from "react";

const Summary = () => {
  const { formDetails, setFormDetails, steps, setSteps } =
    useContext(stateDetailsContext);

  const isYearlyPlan = useMemo(
    () => formDetails.planFrequency === "Yearly",
    [formDetails.planFrequency]
  );

  useEffect(() => {
    const planPrice = isYearlyPlan
      ? formDetails.plan.price.yearly
      : formDetails.plan.price.monthly;

    let addonSum = 0;
    formDetails.addons.forEach((addon) => {
      isYearlyPlan
        ? (addonSum += addon.price.yearly)
        : (addonSum += addon.price.monthly);
    });

    let total = planPrice + addonSum;

    setFormDetails({ ...formDetails, totalPrice: total });
  }, []);

  const handleChangePlanClick = () => {
    setSteps(1);
  };

  return (
    <div className="w-full h-auto flex flex-col">
      {/* All Plans Selection */}
      <section className="flex flex-col w-full h-auto p-6 mb-8 bg-[#f0f6ff] rounded-lg">
        {/* Current Plan */}
        <div className="flex justify-between mb-6">
          <div className="flex flex-col">
            <h3 className="text-[#02295a] font-bold">
              Arcade ({isYearlyPlan ? "Yearly " : "Monthy"})
            </h3>
            <button
              onClick={handleChangePlanClick}
              className="text-[#9699ab] underline w-fit"
            >
              Change
            </button>
          </div>
          <p className="text-[#02295a] font-bold">
            {isYearlyPlan
              ? `$${formDetails.plan.price.yearly}/yr`
              : `$${formDetails.plan.price.monthly}/mo`}
          </p>
        </div>
        {/* Line */}
        <div className="w-full h-[1px] bg-[#9699ab]"></div>
        {/* Addons */}
        <div className="w-full flex flex-col mt-4">
          {formDetails.addons.map((addon) => {
            return (
              <div className="flex justify-between mb-3" key={addon.id}>
                <h4 className="text-[#9699ab] "> {addon.name} </h4>
                <p className="text-[#02295a] ">
                  {isYearlyPlan
                    ? `+$${addon.price.yearly}/yr`
                    : `+$${addon.price.monthly}/mo`}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Total Price */}
      <div className="flex justify-between ">
        <h3 className="text-[#9699ab]">
          Total (per {isYearlyPlan ? "year" : "month"})
        </h3>
        <p className="text-[1.5rem] font-bold text-[#473dff] ">
          +$
          {isYearlyPlan
            ? `${formDetails.totalPrice}/yr`
            : `${formDetails.totalPrice}/mo`}
        </p>
      </div>
    </div>
  );
};

export default Summary;
