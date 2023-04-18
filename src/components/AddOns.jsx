import { stateDetailsContext } from "../state/StateProvider";
import { useContext, useMemo } from "react";

const Addons = () => {
  const { formDetails, setFormDetails } = useContext(stateDetailsContext);

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
        monthly: 2,
        yearly: 20,
      },
    },
  ];

  const handleAddonClick = (addon) =>
    setFormDetails((currentFormDetails) => {
      let { addons } = currentFormDetails;

      const addonExists = getAddonIsSelected(addons, addon);

      if (addonExists) {
        addons = addons.filter((item) => item.id !== addon.id);
      } else {
        addons.push(addon);
      }

      return { ...currentFormDetails, addons };
    });

  const getAddonIsSelected = (addons = [], addon) =>
    addons.find((item) => item.id === addon.id);

  console.log(formDetails.addons);
  return (
    <div className="w-full h-auto">
      {addons.map((addon) => {
        const isActive = Boolean(getAddonIsSelected(formDetails.addons, addon));

        return (
          <section
            key={addon.name}
            onClick={() => handleAddonClick(addon)}
            className=" w-full h-auto flex gap-[1rem] items-center py-3 px-4 mb-4 border rounded-md border-[#d6d9e6] hover:border-[#473dff] hover:cursor-pointer z-20 "
          >
            {/* Check Box */}
            <label id="container" className="">
              <input type="checkbox" checked={isActive} onChange={() => {}} />
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
          </section>
        );
      })}
    </div>
  );
};

export default Addons;
