import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Card from "../components/card_vacancy";
import { useTranslation } from "react-i18next";
import { jobList } from "../mocks/mock";
import "../i18.jsx";

const VacancyPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleCardClick = () => {
    navigate("/workers", { state: { scrollTo: "vacancySection" } });
  };

  return (
    <div>
      <Navbar />

      {/* H1 elementi stilini ServicesPage bilan bir xil qilish */}
      <section className="mt-[120px] container mx-auto mb-11">
        <div className="relative flex justify-center items-center w-full">
          {/* Orqa fon matni (katta va xira) */}
          <h1 className="absolute text-[12vw] sm:text-[96px] md:text-[128px] font-bold text-white/10">
            {t("vacancies")}
          </h1>

          {/* Oldi matn (kichik va aniq) */}
          <h1 className="relative text-[6vw] sm:text-[48px] md:text-[64px] font-bold text-white">
            {t("vacancies")}
          </h1>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-11 mt-10 sm:mt-16 lg:mt-20 px-5 sm:px-10 lg:px-20 mb-10 sm:mb-16 lg:mb-20">
          {jobList.map((job, index) => (
            <Card key={index} {...job} onClick={handleCardClick} />
          ))}
        </div>
      </section>



      <Footer className="mt-10" />
    </div>
  );
};

export default VacancyPage;
