import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { services } from "../mocks/mock";
import { useTranslation } from "react-i18next";
import "../i18.jsx";

const ServicesPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation(); // ✅ useLocation ni qo'shish kerak

  const handleCardClick = () => {
    navigate("/", { state: { scrollTo: "contactSection" } });
  };

  useEffect(() => {
    // Sahifa yuklanganda har doim tepaga scroll qiladi
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Agar location.state da scrollTo bo'lsa, shunga mos keladigan elementni topamiz
    if (location.state?.scrollTo === "services") {
      const section = document.getElementById("home-text");

      if (section) {
        const observer = new IntersectionObserver(
          (entries) => {
            const entry = entries[0];

            if (entry.isIntersecting) {
              section.scrollIntoView({ behavior: "smooth", block: "center" });
              observer.disconnect(); // Kuzatuvni to‘xtatish
            }
          },
          { root: null, threshold: 0.5 } // 50% ekranda bo‘lsa, trigger bo‘ladi
        );

        observer.observe(section);
      }
    }
  }, [location]); // ✅ Har safar sahifa o‘zgarganda ishlaydi

  return (
    <div>
      <Navbar />
      <section className="mb-28">
        <section className="mt-[120px] mb-11">
          <div
            id="home-text"
            className="relative flex justify-center items-center w-full"
          >
            <h1 className="absolute text-[12vw] sm:text-[96px] md:text-[128px] font-bold text-white/10">
              {t("services_BIG")}
            </h1>
            <h1 className="relative text-[6vw] sm:text-[48px] md:text-[64px] font-bold text-white">
              {t("services_BIG")}
            </h1>
          </div>
        </section>

        <div>
          <div className="w-full mt-5 px-6 sm:px-10">
            <div className="w-full max-w-[1250px] mt-10 text-white mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="relative w-full max-w-[413px] mx-auto p-6 rounded-2xl shadow-lg hover:shadow-[0px_10px_30px_10px_rgba(1,134,239,0.5)] transition-shadow duration-300 bg-gradient-to-b from-[#252527] to-[rgba(1,134,239,0)] border border-gray-700 flex flex-col justify-between"
                >
                  <article className="flex flex-col gap-4 sm:gap-6">
                    <h4 className="text-lg sm:text-xl font-bold leading-6">
                      {t(service.title)}
                    </h4>
                    <p className="text-sm sm:text-[12px] font-normal leading-4">
                      {t(service.description)}
                    </p>
                  </article>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
                    <button
                      onClick={handleCardClick}
                      className="w-full sm:w-[152px] h-[40px] bg-[#0086EE] rounded-[8px] font-bold text-sm sm:text-base hover:bg-transparent hover:border-[1px] hover:border-solid hover:border-[#0086EE] transition"
                    >
                      {t("order_button")}
                    </button>
                    <button className="w-full sm:w-[84px] h-[40px] border-[1px] border-solid border-[#0086EE] rounded-[8px] font-bold text-sm sm:text-base text-[#0086EE] hover:bg-white transition">
                      {t("details_button")}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServicesPage;
