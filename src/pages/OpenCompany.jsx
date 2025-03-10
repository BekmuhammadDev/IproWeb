import React from "react";
import Opencompany from "../assets/opening2.svg";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useTranslation } from "react-i18next";
import "../i18.jsx";

export const OpenCompany = () => {
  const { t } = useTranslation();

  return (
    <section>
      <Navbar />

      {/* Rasm va ustiga yozuv */}
      <div className="relative w-full flex justify-center mt-32 mb-8 px-4 sm:px-0">
        <img
          src={Opencompany}
          alt="Open Company"
          className=" h-auto max-h-[500px] sm:max-h-[700px] object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white gap-3 sm:gap-5 px-4">
          <h2
            dangerouslySetInnerHTML={{ __html: t("opening") }}
            className="text-lg sm:text-3xl font-bold leading-tight"
          ></h2>
        </div>
      </div>

      {/* Matn bo‘limi */}
      <div className="px-4 sm:px-20 mb-10">
        <h1 className="text-white text-xl sm:text-2xl font-bold mb-2">
          10.11.2023
        </h1>
        <p className="text-white text-base sm:text-lg leading-relaxed">
          {t("open_text")}
        </p>
      </div>

      <Footer />
    </section>
  );
};
