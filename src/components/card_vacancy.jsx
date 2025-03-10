import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoMdPlayCircle } from "react-icons/io";
import { useTranslation } from "react-i18next";
import "../i18.jsx";

const Card = ({ title, schedule, time, salary, onClick }) => {
  const { t } = useTranslation();
  return (
    <div
      onClick={onClick}
      className="w-full sm:w-[380px] md:w-[400px] lg:w-[413px] bg-[#222930] p-3 rounded-[12px] text-white cursor-pointer shadow-lg 
            hover:shadow-[0px_10px_30px_20px_rgba(1,134,239,0.5)] transition-shadow duration-300 
            bg-gradient-to-b from-[#252527] to-[rgba(1,134,239,0)] border border-gray-700"
    >
      <article>
        <p className="w-full border-b border-white text-sm sm:text-[13px] font-semibold tracking-wide pb-1">
          {t(title)}
        </p>
      </article>
      <div className="w-full flex flex-wrap justify-between items-center pt-6 gap-4">
        <span className="flex items-center gap-1 text-sm sm:text-base">
          <FaRegCalendarAlt className="w-5 h-5 sm:w-[30px] sm:h-[30px]" />{" "}
          {t(schedule)}
        </span>
        <span className="flex items-center gap-1 text-sm sm:text-base">
          <FaRegClock className="w-5 h-5 sm:w-[30px] sm:h-[30px]" /> {time}
        </span>
      </div>
      <div className="w-full sm:w-[342px] h-[48px] mx-auto mt-4 rounded-[8px] backdrop-blur bg-white/50 flex justify-around items-center">
        <RiMoneyDollarCircleLine className="w-6 h-6 sm:w-[32px] sm:h-[32px]" />
        <span className="font-black text-sm sm:text-[14px] text-white">
          {salary}
        </span>
        <IoMdPlayCircle className="w-6 h-6 sm:w-[32px] sm:h-[32px]" />
      </div>
    </div>
  );
};

export default Card;
