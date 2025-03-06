import React from "react";
import { useTranslation } from "react-i18next";
import Logo from "../assets/logosvg 1.svg";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";
import ArrowTop from "../components/ArrowTop";
import { Link } from "react-router-dom";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-[63px] px-10 bg-[#1D1D1D]">
      <div className="flex gap-[165px]">
        <img src={Logo} alt="Logo" />
        <div className="flex gap-[102px] 2xl:gap-56">
          <div>
            <h1 className="text-white font-bold text-2xl">{t("contact")}</h1>
            <div className="flex gap-3 mt-3 font-semibold items-center">
              <IoCallOutline color="white" fontSize={24} />
              <h1 className="text-white">+99890 225 20 25</h1>
            </div>
            <div className="flex gap-3 mt-3 font-semibold items-center">
              <MdOutlineAlternateEmail color="white" fontSize={24} />
              <h1 className="text-white">iPro_group@bk.ru</h1>
            </div>
            <div className="flex gap-3 mt-3 font-semibold items-center">
              <IoLocationOutline color="white" fontSize={24} />
              <h1 className="text-white">{t("address")}</h1>
            </div>
          </div>

          <div>
            <h1 className="text-white text-center mb-2 font-bold text-2xl">
              {t("links")}
            </h1>
            <ul>
              <li className="mb-2">
                <Link
                  to={"/news"}
                  className="text-white text-base hover:text-blue-600 font-semibold"
                >
                  {t("news")}
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to={"/services"}
                  className="text-white text-base hover:text-blue-600 font-semibold"
                >
                  {t("services")}
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to={"/workers"}
                  className="text-white text-base hover:text-blue-600 font-semibold"
                >
                  {t("workers")}
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to={"/vacancy"}
                  className="text-white text-base hover:text-blue-600 font-semibold"
                >
                  {t("vacancies")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-white mb-5 text-center font-bold text-2xl">
              {t("social_media")}
            </h1>
            <div className="flex gap-3">
              <div className="p-4 rounded-full bg-white hover:bg-black hover:text-white border cursor-pointer">
                <FaYoutube fontSize={20} />
              </div>
              <div className="p-4 rounded-full bg-white hover:bg-black hover:text-white border cursor-pointer">
                <FaInstagram fontSize={20} />
              </div>
              <div className="p-4 rounded-full bg-white hover:bg-black hover:text-white border cursor-pointer">
                <FaFacebook fontSize={20} />
              </div>
              <div className="p-4 rounded-full bg-white hover:bg-black hover:text-white border cursor-pointer">
                <PiTelegramLogo fontSize={20} />
              </div>
            </div>
          </div>
        </div>
        <ArrowTop />
      </div>
    </footer>
  );
};
