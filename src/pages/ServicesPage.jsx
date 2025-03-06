import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import serviceImage from "../assets/serviceIMage.svg";
import { Footer } from "../components/Footer";
import { services } from "../mocks/mock";
import { useTranslation } from "react-i18next";
import "../i18";

const ServicesPage = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/", { state: { scrollTo: "contactSection" } });
  };
  return (
    <div>
      <Navbar />
      <section>
        <div className="relative top-28 flex justify-center">
          <h1 className="text-[128px] font-semibold text-[#ffffff21] relative bottom-12">
            {t("services_BIG")}
          </h1>
          <h1 className="text-white absolute text-[64px] font-semibold">
            {t("services_BIG")}
          </h1>
        </div>
        <div className="w-[1250px] my-20 text-white m-auto grid grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative w-[413px] h-[280px] p-6 rounded-2xl shadow-lg hover:shadow-[0px_10px_30px_10px_rgba(1,134,239,0.5)] transition-shadow duration-300 bg-gradient-to-b from-[#252527] to-[rgba(1,134,239,0)] border border-gray-700 "
            >
              <article className="flex flex-col gap-6">
                <h4 className="text-[20px] font-bold leading-6">
                  {t(service.title)}
                </h4>
                <p className="text-[12px] font-normal leading-4">
                  {t(service.description)}
                </p>
              </article>
              <div className="flex items-center gap-2 absolute bottom-6">
                <button
                  onClick={handleCardClick}
                  className="w-[152px] h-[40px] bg-[#0086EE] rounded-[8px] font-bold text-[14px] hover:bg-transparent hover:border-[1px] hover:border-solid hover:border-[#0086EE] transition"
                >
                  {t("Ordering")}
                </button>
                <button className="w-[84px] h-[40px] border-[1px] border-solid border-[#0086EE] rounded-[8px] font-bold text-[14px] text-[#0086EE] hover:bg-white transition">
                  {t("Detail")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServicesPage;
