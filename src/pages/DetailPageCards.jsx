import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useTranslation } from "react-i18next";
import "../i18.jsx";

const DetailPageCards = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Link orqali yuborilgan state ma'lumotlarini olish
  const news = location.state;

  if (!news) {
    return (window.location.href = "/news");
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 sm:px-10 mt-[120px] text-white min-h-screen">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-auto max-h-[500px] sm:max-h-[700px] object-cover rounded-lg shadow-lg my-5"
        />
        <h1 className="text-2xl sm:text-3xl font-bold mb-3 mt-6 sm:mt-10">
          {news.title}
        </h1>
        <p className="text-md sm:text-lg leading-relaxed mt-4 mb-10 sm:mt-6">
          {t("open_text")}
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default DetailPageCards;
