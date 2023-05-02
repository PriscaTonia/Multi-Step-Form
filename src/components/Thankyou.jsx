import ThankYouImg from "../assets/images/icon-thank-you.svg";
import { motion } from "framer-motion";

const ThankYou = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full h-full lg:mt-0 ">
      <motion.img
        animate={{
          rotate: 0,
          scale: 1,
        }}
        initial={{
          rotate: 360,
          scale: 1.5,
        }}
        transition={{
          duration: 1,
        }}
        src={ThankYouImg}
        className="mb-4"
        alt=""
      />
      <motion.h1
        animate={{
          opacity: 1,
        }}
        initial={{
          opacity: 0.5,
        }}
        transition={{
          duration: 1,
        }}
        className="text-[2rem] font-bold text-[#02295a] "
      >
        Thank You!
      </motion.h1>
      <motion.p
        animate={{
          opacity: 1,
        }}
        initial={{
          opacity: 0.5,
        }}
        transition={{
          duration: 1,
        }}
        className=" text-[#9699ab] lg:max-w-[90%] text-center "
      >
        Thank you for confirming your subscription. I hope you had fun using my
        platform. If you ever need support, please feel free to send me an email
        at priscaebube@gmail.com
      </motion.p>
    </div>
  );
};

export default ThankYou;
