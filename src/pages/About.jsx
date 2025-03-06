import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import CircularCarousel from "../components/Card";
import IproLogoBig from "../assets/IproLogoBig.png";
import Circle from "../assets/Circle.png";
import { useTranslation } from "react-i18next";
import "../i18";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <div className="container pt-40 px-10 mb-52">
        <div className="flex justify-center mb-20">
          <img src={IproLogoBig} alt="" />
        </div>

        <div className="flex justify-between">
          <div className="mb-60 mr-[650px]">
            <h1 className="text-white text-[48px] font-bold mb-8">
              {t("ipro_about")}
            </h1>
            <p className="text-white text-xl font-normal">{t("text_about")}</p>

            <button className="w-[180px] h-[40px] mt-5 rounded-[8px] text-white bg-[#42a6f3f7]">
              {t("contact")}
            </button>
          </div>
          <div className="absolute right-0 top-64 h-full">
            <img src={Circle} width={500} alt="#" />
          </div>
          <CircularCarousel />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
