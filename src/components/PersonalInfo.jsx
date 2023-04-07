import { useContext } from "react";
import { stateDetailsContext } from "../state/StateProvider";

const PersonalInfo = () => {
  const { formDetails, setFormDetails } = useContext(stateDetailsContext);

  return (
    <form className="flex flex-col w-full gap-8 ">
      {/* Name Field */}
      <div className="flex flex-col gap-2   ">
        <label className={labelStyle}>Name</label>
        <input
          onChange={(e) => {
            setFormDetails({ ...formDetails, fullName: e.target.value });
          }}
          value={formDetails.fullName}
          className={inputStyle}
          type="text"
          placeholder="e.g. Prisca Tonia"
        />
      </div>
      {/* Email Field */}
      <div className="flex flex-col gap-2   ">
        <label className={labelStyle}>Email Address</label>
        <input
          onChange={(e) => {
            setFormDetails({ ...formDetails, email: e.target.value });
          }}
          value={formDetails.email}
          className={inputStyle}
          type="email"
          placeholder="e.g. priscaebube@gmail.com"
        />
      </div>
      {/* Phone Number Field */}
      <div className="flex flex-col gap-2   ">
        <label className={labelStyle}>Phone Number</label>
        <input
          onChange={(e) => {
            setFormDetails({ ...formDetails, phoneNumber: e.target.value });
          }}
          value={formDetails.phoneNumber}
          className={inputStyle}
          id="number"
          type="number"
          placeholder="e.g. +234 904 3245 276"
        />
      </div>
    </form>
  );
};

export default PersonalInfo;

const labelStyle = "text-[#02295a] font-normal text-[1rem]";
const inputStyle =
  "rounded-xl border border-[#d6d9e6] placeholder-[#d6d9e6] text-[#02295a] p-3 font-medium text-[1.1rem] outline-none";
