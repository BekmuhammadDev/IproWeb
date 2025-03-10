import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useTranslation } from "react-i18next";

const WorkerCardPage = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Xodim haqida ma'lumotni olish
  const worker = location.state;

  if (!worker) {
    return (window.location.href = "/workers"); // Xodim topilmasa, sahifaga qaytaradi
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 sm:px-10 mt-[120px] text-white flex justify-center gap-10">
        <img
          src={worker.image}
          alt={worker.name}
          className=" h-auto max-h-[500px] sm:max-h-[700px] object-cover rounded-lg shadow-lg my-5"
        />
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-3 mt-6 sm:mt-10">
            {t(worker.name)}
          </h1>
          <h2 className="text-lg sm:text-xl text-gray-400 mb-3">
            {t(worker.position)}
          </h2>
          <p className="text-md sm:text-lg leading-relaxed mt-4 mb-10 sm:mt-6">
            {t(worker.description)}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WorkerCardPage;
