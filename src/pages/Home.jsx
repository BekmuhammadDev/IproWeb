import React from "react";
import { Navbar } from "../components/Navbar";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import image from "../assets/ochilish.svg";
import image2 from "../assets/image.svg";
import image3 from "../assets/girlimage.svg";
import image4 from "../assets/girlimage.svg";
import image5 from "../assets/laptop.svg";
import openImage from "../assets/opening.svg";
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
import ServiceDropdown from "../components/Dropdownservicetype";
import { jobList } from "../mocks/mock";
import "../i18.jsx";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SplineViewer from "../components/spline.jsx";
const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const secondNavigate = useNavigate();
  const thirdNavigate = useNavigate();
  const location = useLocation();

  const [hovered, setHovered] = useState(null);

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

  const handleLinkClick = () => {
    secondNavigate("/workers", { state: { scrollTo: "homeText" } });
  };

  const handleVacancyClick = () => {
    thirdNavigate("/workers", { state: { scrollTo: "vacancySection" } });
  };

  const handleMoreClick = () => {
    thirdNavigate("/services", { state: { scrollTo: "services" } });
  };

  const handleClick = () => {
    navigate(`/portfolio`);
  };

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phoneNumber: "",
    serviceType: "",
    comentary: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("contactForm"));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    localStorage.setItem("contactForm", JSON.stringify(updatedData));
  };

  const handleDropdownChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    localStorage.setItem(
      "contactForm",
      JSON.stringify({ ...formData, [name]: value })
    );
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Ismni kiriting";
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Telefon raqamni kiriting";
    if (!formData.serviceType.trim()) newErrors.serviceType = "Xizmat turini tanlang";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Iltimos, barcha majburiy maydonlarni to‘ldiring!");
      return;
    }

    const templateParams = {
      fullName: formData.fullName,
      companyName: formData.companyName,
      phoneNumber: formData.phoneNumber,
      serviceType: formData.serviceType,
      comentary: formData.comentary,
    };

    try {
      const res = await emailjs.send(
        "service_zarp7qs",
        "template_n9y64se",
        templateParams,
        "7STayiENTcu0WLfMR"
      );

      console.log("Email yuborildi:", res);
      toast.success("Muvaffaqiyatli jo‘natildi!");

      localStorage.removeItem("contactForm");
      setFormData({
        fullName: "",
        companyName: "",
        phoneNumber: "",
        serviceType: "",
        comentary: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
      toast.error("Xatolik yuz berdi, qayta urinib ko‘ring.");
    }
  };

  return (
    <div className="w-full flex flex-col ">
      <Navbar />

      {/* HeroSection */}
      <section id="Hero" className="w-full pt-60">

        <div className="w-full items-start justify-between px-10">
          <h1 className="text-white text-3xl font-bold mb-10">
            {t("hero_title")}
            <br />
            {t("hero_subtitle")}
          </h1>
      <SplineViewer/>

          <div className="sm:flex sm:gap-5">
            <Link to={"/about"}>
              <button className="w-[180px] mb-5 h-[40px] cursor-pointer rounded-[8px] text-white bg-[#42a6f3f7] hover:bg-transparent hover:font-semibold hover:leading-3 hover:border-[1px] hover:border-solid hover:border-[#42a6f3f7] transition">
                {t("details_button")}
              </button>
            </Link>
            <Link to={"/portfolio"}>
              <button
                onClick={handleClick}
                className="w-[182px]  h-[40px] border-[1px] p-2 border-solid border-[#0086EE] rounded-[8px] font-bold text-sm sm:text-base text-[#0086EE] hover:bg-white transition">
                {t("Portfolio")}
              </button>
            </Link>
          </div>
          {/* <div className="absolute top-0 justify-center z-[-1]"> */}
          {/* <img src={Shadow} alt="#" /> */}
          {/* </div> */}
        </div>

        <div className="mt-10 hidden">
          <img className="w-full" src={EarthGlobal} alt="#" />
        </div>
      </section>
      <article className="marque-container h-[40px] mt-5 text-center overflow-hidden flex items-center gap-10 text-[20px]">
        <p className="moving-text text-2xl">{t("company_name")}</p>
      </article>

      {/* News section */}
      <section className="container mx-auto">
        <div className="mt-10 sm:mt-[50px] px-5 sm:px-10">
          <div className="w-full min-h-screen text-white">
            <div className="flex flex-col lg:flex-row justify-center gap-5">
              {/* Asosiy katta yangilik rasmi */}
              <div className="relative group w-full sm:w-[650px]">
                <h1 className="text-[28px] sm:text-[36px] font-bold leading-[35px] sm:leading-[43px] mb-5">
                  {t("news_title")}
                </h1>
                <Link to={"/news"}>
                  <img
                    src={openImage}
                    alt=""
                    className="w-full sm:w-[650px] h-auto sm:h-[705px] object-cover cursor-pointer hover:shadow-[0px_10px_30px_10px_rgba(1,134,239,0.5)] transition-shadow duration-300"
                  />
                </Link>

                {/* Yozuv qo'shildi */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white gap-5">
                  <h2
                    dangerouslySetInnerHTML={{ __html: t("opening") }}
                    className="text-xl sm:text-[40px] font-bold"
                  ></h2>
                </div>

                <button className="w-[76px] h-[24px] text-[#0086ee] bottom-5 sm:bottom-10 z-10 absolute right-5 sm:left-[540px] opacity-0 translate-y-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 flex items-center">
                  <Link className="flex items-center gap-[5px]" to={"/news"}>
                    {t("news_button")} <FaArrowRight />
                  </Link>
                </button>
              </div>

              {/* Kichik yangilik rasmlari grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5 sm:pt-[70px]">
                {[image2, image3, image4, image5].map((img, index) => (
                  <div
                    key={index}
                    className="w-full sm:w-[290px] h-auto sm:h-[342px] bg-[#252527] relative group overflow-hidden cursor-pointer hover:shadow-[0px_0px_10px_10px_rgba(1,134,239,0.5)] transition-shadow duration-300"
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full sm:w-[290px] h-auto sm:h-[184px] object-cover"
                    />
                    <article className="p-3">
                      <h4 className="font-bold text-bold mb-[5px] text-sm sm:text-base">
                        {t("news_date")}
                      </h4>
                      <p className="text-[12px] sm:text-[14px] font-normal leading-[14px] sm:leading-[18px]">
                        {t("news_description")}
                      </p>
                    </article>
                    <button className="w-[76px] pb-5 h-[24px] text-[#0086ee] absolute right-5 sm:left-[195px] bottom-1 opacity-0 translate-y-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                      <Link
                        className="flex items-center gap-[5px]"
                        to={"/news"}
                      >
                        {t("news_button")} <FaArrowRight />
                      </Link>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AnimateNumbersSection */}
      <Achievements />

      {/* ServicesSection */}

      <section className="container mx-auto">
        <div className="w-full mt-5 px-6 sm:px-10">
          <h1 className="text-white text-2xl sm:text-3xl lg:text-[36px] font-bold mb-6">
            {t("services_title")}
          </h1>
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
                {/* BUTTONLAR RESPONSIVE */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
                  <button
                    onClick={handleCardClick}
                    className="w-full  h-[40px] bg-[#0086EE] rounded-[8px] font-bold text-sm sm:text-base hover:bg-transparent hover:border-[1px] hover:border-solid hover:border-[#0086EE] transition"
                  >
                    {t("order_button")}
                  </button>
                  <button
                    onClick={handleMoreClick}
                    className="w-full  h-[40px] border-[1px] p-2 border-solid border-[#0086EE] rounded-[8px] font-bold text-sm sm:text-base text-[#0086EE] hover:bg-white transition"
                  >
                    {t("details_button")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SimpleSection */}
      <section className="w-full text-white mt-12 pt-10">
        <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-7">
          {[
            { img: bagImage, text1: "with_us", text2: "safe" },
            { img: lineImage, text1: "improve_business", text2: "grow" },
            { img: houseImage, text1: "take_place", text2: "market" },
            { img: tickImage, text1: "choose_us", text2: "right_choice" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center max-w-[200px] sm:max-w-[250px]"
            >
              <img src={item.img} alt="" className="mb-3" />
              <article className="text-center">
                <p className="font-normal text-sm sm:text-base leading-5 sm:leading-6">
                  {t(item.text1)}
                </p>
                <h1 className="text-lg sm:text-xl font-bold">
                  {t(item.text2)}
                </h1>
              </article>
            </div>
          ))}
        </div>
      </section>

      <article className="marque-container h-[40px] mt-5 text-center overflow-hidden flex items-center gap-10 text-[20px]">
        <p className="moving-text text-2xl">{t("marquee_text")}</p>
      </article>

      {/* WorkersSection */}

      <section className="py-10  container mx-auto">
        <h2 className="text-white text-[30px] sm:text-[36px] font-bold mb-6 text-center sm:text-left">
          {t("workers")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
          {workers.map((worker) => (
            <div
              key={worker.id}
              className="relative group w-[250px] h-[320px] overflow-hidden rounded-2xl transition-transform duration-500 hover:scale-105 mx-auto"
            >
              <img
                src={worker.image}
                alt={worker.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white opacity-90 backdrop-blur-md">
                <h3 className="font-bold text-lg">{worker.name}</h3>
                <p className="text-sm text-gray-300">{worker.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:justify-end">
          <button
            onClick={handleLinkClick}
            className="text-blue-400 hover:text-blue-500 transition-colors text-lg font-medium"
          >
            {t("workers_all")}
          </button>
        </div>
      </section>

      {/* VacancySection */}
      <section className="container mx-auto">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-11 mt-10 sm:mt-16 lg:mt-20 px-5 sm:px-10 lg:px-20 mb-10 sm:mb-16 lg:mb-20">
          {jobList.map((job, index) => (
            <Card key={index} {...job} onClick={handleVacancyClick} />
          ))}
        </div>
      </section>

      {/* PartnersSection */}
      <section>
        <div className="overflow-hidden whitespace-nowrap relative w-full bg-black py-5">
          <div className="flex gap-10 animate-marquee">
            <img src={partnerLogo} alt="Rasm 1" className="object-cover cursor-pointer" />
            <img src={metinLogo} alt="Rasm 1" className="object-cover cursor-pointer" />
            <img src={academyLogo} alt="Rasm 1" className="object-cover cursor-pointer" />
            <img src={hospitalLogo} alt="Rasm 1" className="object-cover cursor-pointer" />
            <img src={lifeLogo} alt="Rasm 1" className="object-cover cursor-pointer" />
            <img src={partnerLogo} alt="Rasm 1" className="object-cover cursor-pointer" />
            <img src={metinLogo} alt="Rasm 1" className="object-cover cursor-pointer" />
            <img src={academyLogo} alt="Rasm 1" className="object-cover cursor-pointer" />
            <img src={hospitalLogo} alt="Rasm 1" className="object-cover cursor-pointer" />
            <img src={lifeLogo} alt="Rasm 1" className="object-cover cursor-pointer" />
            <img src={partnerLogo} alt="Rasm 1" className="object-cover cursor-pointer" />
            <img src={metinLogo} alt="Rasm 1" className="object-cover cursor-pointer" />
            <img src={academyLogo} alt="Rasm 1" className="object-cover cursor-pointer" />
            <img src={partnerLogo} alt="Rasm 1" className="object-cover cursor-pointer" />
            <img src={metinLogo} alt="Rasm 1" className="object-cover cursor-pointer" />
            <img src={academyLogo} alt="Rasm 1" className="object-cover cursor-pointer" />
            <img src={hospitalLogo} alt="Rasm 1" className="object-cover cursor-pointer" />
            <img src={lifeLogo} alt="Rasm 1" className="object-cover cursor-pointer" />
            <img src={partnerLogo} alt="Rasm 1" className="object-cover cursor-pointer" />
            <img src={metinLogo} alt="Rasm 1" className="object-cover cursor-pointer" />
            <img src={academyLogo} alt="Rasm 1" className="object-cover cursor-pointer" />
            <img src={hospitalLogo} alt="Rasm 1" className="object-cover cursor-pointer" />
            <img src={lifeLogo} alt="Rasm 1" className="object-cover cursor-pointer" />
            <img src={partnerLogo} alt="Rasm 1" className="object-cover cursor-pointer" />
            <img src={metinLogo} alt="Rasm 1" className="object-cover cursor-pointer" />
            <img src={academyLogo} alt="Rasm 1" className="object-cover cursor-pointer" />
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
              animation: marquee 30s linear infinite;
            }
                .animate-marquee:hover {
      animation-play-state: paused;
    }
          `}</style>
        </div>
      </section>

      {/* SupportSection */}
      <section className="w-full text-white mt-20 px-5 sm:px-10">
        <h1 className="text-center font-semibold text-[28px] sm:text-[32px]">
          {t("text_support")}
        </h1>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`px-6 py-8 flex flex-col items-center gap-3 rounded-lg transition-all duration-300 cursor-pointer w-full
          ${hovered === card.id
                  ? "bg-gray-900"
                  : card.isBlue
                    ? "bg-blue-500"
                    : "bg-gray-800"
                }
          ${hovered !== null && !card.isBlue ? "bg-blue-500" : ""}`}
              onMouseEnter={() => setHovered(card.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={card.img}
                alt=""
                className=" w-[413px] h-[150px] object-contain"
              />
              <p className="font-semibold text-[18px] sm:text-[20px] text-center">
                {t(card.text)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ContactSection */}
      <section id="contact-section" className="w-full h-full flex flex-col lg:flex-row justify-center items-center bg-black px-5 mt-10">
        <div className="relative md:w-[732px] w-full bg-[#0F0F0F] border-[3.5px] border-blue-500 p-8 rounded-lg shadow-[0px_0px_15px_2px_rgba(0,123,255,0.5)]">
          <h1 className="text-white text-3xl font-bold mb-6 text-left">{t("contact")}</h1>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-white mb-1">* {t("full_name")}</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className={`bg-[#1C1C1C] text-white p-3 rounded-md outline-none w-full ${errors.fullName ? "border-red-500 border-2" : ""}`} />
                {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
              </div>
              <div className="flex flex-col">
                <label className="text-white mb-1">{t("companyname")}</label>
                <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} className="bg-[#1C1C1C] text-white p-3 rounded-md outline-none w-full" />
              </div>
              <div className="flex flex-col">
                <label className="text-white mb-1">* {t("phone_number")}</label>
                <input type="number" name="phoneNumber" value={formData.phoneNumber} onChange={(e) => {
                  const value = e.target.value;
                  if (value.length <= 9) {
                    handleChange(e);
                  }
                }} className={`bg-[#1C1C1C] text-white p-3 rounded-md outline-none w-full ${errors.phoneNumber ? "border-red-500 border-2" : ""}`} />
                {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
              </div>
              <div className="flex flex-col w-full">
                <label className="text-white mb-1">*{t("service_type")}</label>
                <ServiceDropdown selectedService={formData.serviceType} onServiceSelect={handleDropdownChange} />
                {errors.serviceType && <p className="text-red-500 text-sm">{errors.serviceType}</p>}
              </div>
            </div>
            <div className="flex flex-col mt-4">
              <textarea name="comentary" value={formData.comentary} onChange={handleChange} className="bg-[#1C1C1C] text-white p-3 h-[120px] rounded-md resize-none w-full" />
            </div>
            <div className="flex justify-left">
              <button type="submit" className="mt-5 w-full max-w-xs h-[46px] bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition">{t("submit")}</button>
            </div>
          </form>
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        </div>
        <ContactWithMap />
      </section>

      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Home;
