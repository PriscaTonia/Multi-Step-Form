import ThankYouImg from "../assets/images/icon-thank-you.svg";

const ThankYou = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full lg:mt-0 ">
      <img src={ThankYouImg} className="mb-4" alt="" />
      <h1 className="text-[2rem] font-bold text-[#02295a] ">Thank You!</h1>
      <p className=" text-[#9699ab] lg:max-w-[90%] text-center ">
        Thank you for confirming your subscription. I hope you had fun using my
        platform. If you ever need support, please feel free to send me an email
        at priscaebube@gmail.com
      </p>
    </div>
  );
};

export default ThankYou;
