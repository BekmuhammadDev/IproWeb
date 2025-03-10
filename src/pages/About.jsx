import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import IproLogoBig from "../assets/IproLogoBig.png";
import Circle from "../assets/Circle.png";
import { useTranslation } from "react-i18next";
import "../i18.jsx";
import Phoneimg from "../assets/PhoneImg.png";

const AboutPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/", { state: { scrollTo: "contactSection" } });
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto pt-40 px-5 md:px-10 mb-80">
        <div className="flex justify-center mb-5 sm:mb-10">
          <img src={IproLogoBig} alt="" className="w-[80%] md:w-auto" />
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-between mt-40">
          <div className="mb-20 md:mb-60 md:mr-[50px] lg:mr-[150px] xl:mr-[300px]">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {t("ipro_about")}
            </h1>
            <p className="text-white text-lg md:text-xl font-normal">
              {t("text_about")}
            </p>

            <div className="block gap-x-5 sm:flex">
              <button
                onClick={handleCardClick}
                className="w-[180px] h-[40px] mt-5 rounded-[8px] text-white bg-[#42a6f3f7] hover:bg-transparent hover:font-semibold hover:border-[1px] hover:border-solid hover:border-[#42a6f3f7] transition"
              >
                {t("contact")}
              </button>
            </div>
          </div>

          {/* Rasm joylashuvi */}
          <div className=" w-[500px] h-[400px] hidden md:flex justify-center items-center">
            {/* Background doira */}
            <img src={Circle} className=" absolute " alt="Circle" />

            {/* Telefon rasmi */}
            <img
              src={Phoneimg}
              alt="Phone"
              className="absolute ml-10 w-[250px] md:w-[300px] lg:w-[350px] transition-transform duration-300 hover:translate-y-[-20px]"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
