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
    <footer className="py-[63px] px-6 bg-[#1D1D1D]">
      <div className="container mx-auto flex gap-20">
        
        <div className="hidden sm:flex">
        <img src={Logo} alt="Logo" className="w-40 md:w-auto justify-items-start" />
        </div>

        <div className="flex flex-wrap  md:justify-between gap-10 w-full">
          {/* Contact Info */}
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

          {/* Links */}
          <div>
            <h1 className="text-white mb-2 font-bold text-2xl">{t("links")}</h1>
            <ul>
              {["news", "services", "workers", "vacancies"].map((link, index) => (
                <li key={index} className="mb-2">
                  <Link
                    to={`/${link}`}
                    className="text-white text-base hover:text-blue-600 font-semibold"
                  >
                    {t(link)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

      {/* Social Media */}
<div className="">
  <h1 className="text-white mb-5 text-center font-bold text-2xl">
    {t("social_media")}
  </h1>
  <div className="flex justify-center">
    <div className="flex gap-3 justify-center">
      {[
        { Icon: FaYoutube, link: "https://www.youtube.com/@IPROUZ" },
        { Icon: FaInstagram, link: "https://www.instagram.com/iprogroupuz/" },
        { Icon: FaFacebook, link: "https://www.facebook.com" },
        { Icon: PiTelegramLogo, link: "https://t.me/iPRO_group" }
      ].map(({ Icon, link }, index) => (
        <a
          key={index}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-white hover:bg-black hover:text-white border cursor-pointer transition"
        >
          <Icon fontSize={20} />
        </a>
      ))}
    </div>
  </div>
</div>

        </div>

        <ArrowTop className="hidden md:block" />
      </div>
    </footer>

  );
};
