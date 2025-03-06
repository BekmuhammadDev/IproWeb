import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoMdPlayCircle } from "react-icons/io";
import { useTranslation } from "react-i18next";
import "../i18";


const Card = ({ title, schedule, time, salary, onClick }) => {
     const { t } = useTranslation();
    return (
        <div
            onClick={onClick}
            className="w-[413px] h-[149px] bg-[#0F4A78] p-3 rounded-[12px] text-white cursor-pointer hover:border-2 hover:border-blue-500"
        >
            <article>
                <p className="w-[382px] h-[35px] border-b border-white text-[13px] font-semibold tracking-wide">
                    {t(title)}
                </p>
            </article>
            <div className="w-[382px] h-[35px] flex pt-10 gap-7">
                <span className="flex gap-1 items-center">
                    <FaRegCalendarAlt className="w-[30px] h-[30px]" /> {t(schedule)}
                </span>
                <span className="flex gap-1 items-center">
                    <FaRegClock className="w-[30px] h-[30px]" /> {time}
                </span>
            </div>
            <div className="w-[342px] h-[48px] relative top-5 left-5 rounded-[8px] mt-4 backdrop-blur bg-white/50 flex justify-around items-center">
                <RiMoneyDollarCircleLine className="w-[32px] h-[32px]" />
                <span className="  font-black text-[14px] text-white">{salary}</span>
                <IoMdPlayCircle className="w-[32px] h-[32px]" />
            </div>
        </div>
    );
};

export default Card;
