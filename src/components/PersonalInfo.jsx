import { useContext, useEffect, useState } from "react";
import { stateDetailsContext } from "../state/StateProvider";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const PersonalInfo = () => {
  // Context State

  const { steps, setSteps, formDetails, setFormDetails } =
    useContext(stateDetailsContext);

  // React Hook Form Initialization

  const form = useForm({ mode: "all" });
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = form;

  // Functions

  const submitHandler = (data, e) => {
    e.preventDefault();
    setFormDetails({ ...formDetails, ...data });
    localStorage.setItem("fullName", data.fullName);
    localStorage.setItem("email", data.email);
    localStorage.setItem("phoneNum", data.phoneNumber);
    nextStep();
  };

  const nextStep = () => {
    let step = steps + 1;
    setSteps(step);
  };

  const goBack = () => {
    let step = steps - 1;
    setSteps(step);
  };

  useEffect(() => {
    const formFieldNames = ["fullName", "email", "phoneNumber"];
    formFieldNames.forEach((field) => {
      const fieldValue = formDetails[field];
      if (fieldValue) {
        setValue(field, fieldValue);
      }
    });
  }, []);

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

  const labelStyle = "text-[#02295a] font-normal text-[1rem]";
  const inputStyle =
    "rounded-xl border border-[#d6d9e6] placeholder-[#d6d9e6] text-[#02295a] p-3 font-medium text-[1.1rem] outline-none hover:border-[#473dff] hover:cursor-pointer focus:border-[#473dff]";

  return (
    <motion.form
      animate={{
        x: 0,
      }}
      initial={{
        x: -100,
      }}
      onSubmit={handleSubmit(submitHandler)}
      className="flex flex-col w-full h-full justify-between "
    >
      <div className="flex flex-col gap-8">
        {/* Name Field */}
        <div className="flex flex-col gap-2   ">
          <label className={labelStyle}>Name</label>
          <motion.input
            whileFocus={{
              scale: 0.97,
            }}
            onKeyDown={(e) => {
              e.key === "Enter" && e.preventDefault();
            }}
            {...register("fullName", { required: "This field is required" })}
            className={inputStyle}
            type="text"
            placeholder="e.g. Prisca Tonia"
          />
          <p className="text-red-700">{errors.fullName?.message}</p>
        </div>
        {/* Email Field */}
        <div className="flex flex-col gap-2   ">
          <label className={labelStyle}>Email Address</label>
          <motion.input
            whileFocus={{
              scale: 0.97,
            }}
            onKeyDown={(e) => {
              e.key === "Enter" && e.preventDefault();
            }}
            {...register("email", { required: "This field is required" })}
            className={inputStyle}
            type="email"
            placeholder="e.g. priscatonia@gmail.com"
          />
          <p className="text-red-700">{errors.email?.message}</p>
        </div>
        {/* Phone Number Field */}
        <div className="flex flex-col gap-2   ">
          <label className={labelStyle}>Phone Number</label>
          <motion.input
            whileFocus={{
              scale: 0.97,
            }}
            onKeyDown={(e) => {
              e.key === "Enter" && e.preventDefault();
            }}
            {...register("phoneNumber", {
              required: "This field is required",
              minLength: { value: 11, message: "Minimum Length is 11" },
            })}
            className={inputStyle}
            id="number"
            type="number"
            placeholder="e.g. 08043235762"
          />
          <p className="text-red-700">{errors.phoneNumber?.message}</p>
        </div>
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
          whileTap={{ scale: 0.9 }}
          type="submit"
          className={steps === 3 ? confirmBtnStyle : btnStyles}
        >
          {steps === 3 ? "Confirm" : "Next Step"}
        </motion.button>
      </div>
    </motion.form>
  );
};

export default PersonalInfo;
