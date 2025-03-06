import React from "react";
import { Navbar } from "../components/Navbar";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import image from "../assets/ochilish.svg";
import image2 from "../assets/image.svg";
import image3 from "../assets/girlimage.svg";
import image5 from "../assets/laptop.svg";
import EarthGlobal from "../assets/GlobalEarth.png";
import Shadow from "../assets/shadow.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Achievements from "../components/Achievements";
import { Footer } from "../components/Footer";
import bagImage from "../assets/bag.svg";
import lineImage from "../assets/line.svg";
import houseImage from "../assets/house.svg";
import tickImage from "../assets/tick.svg";
import partnerLogo from "../assets/partnerLogo.svg";
import metinLogo from "../assets/metin.svg";
import academyLogo from "../assets/academy.svg";
import hospitalLogo from "../assets/hospital.svg";
import lifeLogo from "../assets/life.svg";
import { cards } from "../mocks/mock";
import { services } from "../mocks/mock";
import { workers } from "../mocks/mock";
import ContactWithMap from "../components/ContactWithMap";
import { useTranslation } from "react-i18next";
import Card from "../components/card_vacancy";
import { jobList } from "../mocks/mock";
import "../i18";


const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [hovered, setHovered] = useState(null);

  const job = {
    title: "Frontend dasturchisi - VueJS, Javascript, React (Junior)",
    schedule: "DUSHANBA - SHANBA",
    time: "10:00 - 18:00",
    salary: "5 000 000 - 20 000 000",
  };

  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "contactSection") {
      const section = document.getElementById("contact-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleCardClick = () => {
    navigate("/", { state: { scrollTo: "contactSection" } });
  };

  const handleCardClicks = () => {
    navigate("/workers", { state: { scrollTo: "vacancySection" } });
  };

  return (
    <div className="w-full flex flex-col">
      <Navbar />
      {/* HeroSection */}

      <section id="Hero" className="w-full pt-60">
        <div className="w-full items-start justify-between px-10">
          <h1 className="text-white text-3xl font-bold mb-10">
            {t("hero_title")}
            <br />
            {t("hero_subtitle")}
          </h1>
          <Link to={"/about"}>
            <button className="w-[180px] h-[40px] cursor-pointer rounded-[8px] text-white bg-[#42a6f3f7] hover:bg-transparent hover:font-semibold hover:leading-3 hover:border-[1px] hover:border-solid hover:border-[#42a6f3f7] transition">
              {t("details_button")}
            </button>
          </Link>
          <div className="absolute top-0 justify-center z-[-1]">
            <img src={Shadow} alt="#" />
          </div>
        </div>

        <div>
          <img className="w-full" src={EarthGlobal} alt="#" />
        </div>
      </section>

      <article className="marque-container h-[40px] mt-5 text-center overflow-hidden flex items-center gap-10 text-[20px]">
        <p className="moving-text">{t("company_name")}</p>
      </article>

      {/* News section */}

      <div className="mt-[50px] px-10">
        <div className="w-full h-screen text-white">
          <div className="flex justify-center gap-5">
            <div className="relative group">
              <h1 className="text-[36px] font-bold leading-[43px] mb-5">
                {t("news_title")}
              </h1>
              <img
                src={image}
                alt=""
                width={650}
                height={580}
                className="object-cover"
              />
              <button className="w-[76px] h-[24px] text-[#0086ee] bottom-10 z-10 absolute left-[540px] opacity-0 translate-y-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 items-center">
                <Link className="flex items-center gap-[5px]" to={"/news"}>
                  {t("news_button")} <FaArrowRight />
                </Link>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-[70px]">
              {[image2, image3, image2, image5].map((img, index) => (
                <div
                  key={index}
                  className="w-[290px] h-[342px] bg-[#252527] relative group overflow-hidden"
                >
                  <img src={img} alt="" width={290} height={184} />
                  <article className="p-3">
                    <h4 className="font-bold text-bold mb-[5px]">
                      {t("news_date")}
                    </h4>
                    <p className="text-[12px] font-normal leading-[14px]">
                      {t("news_description")}
                    </p>
                  </article>
                  <button className="w-[76px] h-[24px] text-[#0086ee] absolute left-[195px] bottom-[8px] opacity-0 translate-y-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                    <Link className="flex items-center gap-[5px]" to={"/news"}>
                      {t("news_button")} <FaArrowRight />
                    </Link>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* AnimateNumbersSection */}
      <Achievements />
      {/* ServicesSection */}
      <section>
        <div className="w-full mt-5 px-10">
          <h1 className="text-white text-[36px] font-bold mb-6">
            {t("services_title")}
          </h1>
          <div className="w-[1250px] mt-10 text-white m-auto grid grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="relative w-[413px] h-[280px] p-6 rounded-2xl shadow-lg hover:shadow-[0px_10px_30px_10px_rgba(1,134,239,0.5)] transition-shadow duration-300 bg-gradient-to-b from-[#252527] to-[rgba(1,134,239,0)] border border-gray-700"
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
                    {t("order_button")}
                  </button>
                  <button className="w-[84px] h-[40px] border-[1px] border-solid border-[#0086EE] rounded-[8px] font-bold text-[14px] text-[#0086EE] hover:bg-white transition">
                    {t("details_button")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* SimpleSection */}
      <section className="w-full h-[309px] text-white mt-12 pt-10">
        <div className="flex justify-center items-center gap-7">
          <div>
            <img src={bagImage} alt="" className="z-[-1] relative top-2" />
            <article className="text-center">
              <p className="font-normal text-[14px] leading-4">
                {t("with_us")}
              </p>
              <h1>{t("safe")}</h1>
            </article>
          </div>
          <div>
            <img src={lineImage} alt="" className="z-[-1] relative top-2" />
            <article className="text-center">
              <p className="font-normal text-[14px] leading-4">
                {t("improve_business")}
              </p>
              <h1>{t("grow")}</h1>
            </article>
          </div>
          <div>
            <img src={houseImage} alt="" className="z-[-1] relative top-2" />
            <article className="text-center">
              <p className="font-normal text-[14px] leading-4">
                {t("take_place")}
              </p>
              <h1>{t("market")}</h1>
            </article>
          </div>
          <div>
            <img src={tickImage} alt="" className="z-[-1] relative top-2" />
            <article className="text-center">
              <p className="font-normal text-[14px] leading-4">
                {t("choose_us")}
              </p>
              <h1>{t("right_choice")}</h1>
            </article>
          </div>
        </div>
      </section>
      <article className="marque-container h-[40px] mt-5 text-center overflow-hidden flex items-center gap-10 text-[20px]">
        <p className="moving-text">{t("marquee_text")}</p>
      </article>
      {/* WorkersSection */}

      <section className="py-10 px-10">
        <h2 className="text-white text-[36px] font-bold mb-6">
          {t("workers")}
        </h2>
        <div className="flex gap-6 justify-center flex-wrap">
          {workers.map((worker, index) => (
            <div
              key={worker.id}
              className={`relative group w-[250px] h-[320px] overflow-hidden rounded-2xl transition-all duration-500 ${index % 2 === 0 ? "mt-12" : "-mt-12"
                }`}
            >
              <img
                src={worker.image}
                alt={worker.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white opacity-90">
                <h3 className="font-bold text-lg">{worker.name}</h3>
                <p className="text-sm text-gray-300">{worker.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-right">
          <Link
            to="/workers"
            className="text-blue-400 hover:text-blue-500 transition-colors"
          >
            {t("all")}
          </Link>
        </div>
      </section>


      {/* VacancySection */}

      <div className="w-full grid grid-cols-3 gap-11 mt-20 px-20 mb-20">
        {jobList.map((job, index) => (
          <Card key={index} {...job} onClick={handleCardClick} />
        ))}
      </div>

      {/* PartnersSection */}

      <div className="overflow-hidden whitespace-nowrap relative w-full bg-black py-5">
        <div className="flex gap-10 animate-marquee">
          <img src={partnerLogo} alt="Rasm 1" className="object-cover" />
          <img src={metinLogo} alt="Rasm 1" className="object-cover" />
          <img src={academyLogo} alt="Rasm 1" className="object-cover" />
          <img src={hospitalLogo} alt="Rasm 1" className="object-cover" />
          <img src={lifeLogo} alt="Rasm 1" className="object-cover" />
          <img src={partnerLogo} alt="Rasm 1" className="object-cover" />
          <img src={metinLogo} alt="Rasm 1" className="object-cover" />
          <img src={academyLogo} alt="Rasm 1" className="object-cover" />
          <img src={hospitalLogo} alt="Rasm 1" className="object-cover" />
          <img src={lifeLogo} alt="Rasm 1" className="object-cover" />
          <img src={partnerLogo} alt="Rasm 1" className="object-cover" />
          <img src={metinLogo} alt="Rasm 1" className="object-cover" />
          <img src={academyLogo} alt="Rasm 1" className="object-cover" />
        </div>

        <style jsx>{`
          @keyframes marquee {
            from {
              transform: translateX(0%);
            }
            to {
              transform: translateX(-100%);
            }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 15s linear infinite;
          }
        `}</style>
      </div>

      {/* SupportSection */}

      <section className="w-full h-[651px] text-white mt-20 px-10">
        <h1 className="text-center font-semibold text-[32px]">
          {t("text_support")}
        </h1>
        <div className="w-[1280px] h-[428px] m-auto grid grid-cols-3 gap-5 mt-12">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`w-[413px] h-[204px] px-10 flex flex-col gap-3 rounded-lg transition-all duration-300 cursor-pointer ${hovered === card.id
                  ? "bg-gray-900"
                  : card.isBlue
                    ? "bg-blue-500"
                    : "bg-gray-800"
                } ${hovered !== null && !card.isBlue ? "bg-blue-500" : ""}`}
              onMouseEnter={() => setHovered(card.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <img src={card.img} alt="" className="m-auto" />
              <p className="font-semibold text-[20px] text-center pb-5">
                {t(card.text)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ContactSection */}

      <section
        id="contact-section"
        className="w-full h-[780px] flex justify-center items-center bg-black"
      >
        <div className="relative w-[650px] h-[550px] bg-[#0F0F0F] border-[3.5px] border-blue-500 p-8 rounded-lg shadow-[0px_0px_15px_2px_rgba(0,123,255,0.5)]">
          <h1 className="text-white text-3xl font-bold mb-6">{t("contact")}</h1>

          {/* Inputlar */}
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col">
              <label className="text-white mb-1">*{t("full_name")}</label>
              <input
                type="text"
                className="bg-[#1C1C1C] text-white p-3 rounded-md outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white mb-1">{t("companyname")}</label>
              <input
                type="text"
                className="bg-[#1C1C1C] text-white p-3 rounded-md outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white mb-1">*{t("phone_number")}</label>
              <input
                type="text"
                className="bg-[#1C1C1C] text-white p-3 rounded-md outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white mb-1">{t("service_type")}</label>
              <input
                type="text"
                className="bg-[#1C1C1C] text-white p-3 rounded-md outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col mt-5">
            <label className="text-white mb-1">{t("comentary")}</label>
            <textarea className="bg-[#1C1C1C] text-white p-3 h-[120px] rounded-md outline-none"></textarea>
          </div>

          <button className="mt-5 w-[300px] h-[46px] bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition">
            {t("send")}
          </button>

          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        </div>
        <ContactWithMap />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
