import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Card from "../components/card_vacancy";
import { useTranslation } from "react-i18next";
import { jobList } from "../mocks/mock";
import "../i18";



const VacancyPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleCardClick = () => {
    navigate("/workers", { state: { scrollTo: "vacancySection" } });
  };

  // const handleCardClick = () => {
  //   console.log("Card clicked!");
  // };

  return (
    <div>
      <Navbar />
      <div className="relative top-28 flex justify-center">
        <h1 className="text-[128px] font-semibold text-[#ffffff21] relative bottom-12">
          {t("vacancies")}
        </h1>
        <h1 className="text-white absolute text-[64px] font-semibold">
          {t("vacancies")}
        </h1>
      </div>

      <div className="w-full grid grid-cols-3 gap-11 mt-20 px-20 mb-20">
      {jobList.map((job, index) => (
        <Card key={index} {...job} onClick={handleCardClick} />
      ))}
    </div>

      <Footer className="mt-10" />
    </div>
  );
};

export default VacancyPage;
