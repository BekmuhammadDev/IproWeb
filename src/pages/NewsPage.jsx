import React, { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { OpenCompany } from "./OpenCompany.jsx";
import "../i18.jsx";

// Rasmlar
import Yangiliklar from "../assets/YANGILIKLAR.png";
import image from "../assets/ochilish.svg";
import greenly from "../assets/green.svg";
import image2 from "../assets/image.svg";
import image3 from "../assets/girlimage.svg";
import image4 from "../assets/girlimage.svg";
import image5 from "../assets/laptop.svg";
import chegirma from "../assets/chegirma.png";
import openImage from "../assets/opening.svg";

const imagesArr = [image2, image3, image4, image5];

const NewsPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Navbar />
      <section className="mt-[120px] mb-11">
        <div className="relative flex justify-center items-center w-full">
          <h1 className="absolute text-[12vw] sm:text-[96px] md:text-[128px] font-bold text-white/10">
            {t("NEWS_BIG")}
          </h1>
          <h1 className="relative text-[6vw] sm:text-[48px] md:text-[64px] font-bold text-white">
            {t("NEWS_BIG")}
          </h1>
        </div>

        {/* Katta rasm */}
        <section className="mt-10 sm:mt-[50px] px-5 sm:px-10">
          <div className="w-full text-white flex flex-col lg:flex-row justify-center gap-5">
            <div className="relative group w-full sm:w-[650px]">
              <img
                src={openImage}
                alt=""
                className="w-full sm:w-[650px] h-auto sm:h-[705px] object-cover cursor-pointer hover:shadow-[0px_10px_30px_20px_rgba(1,134,239,0.5)] transition-shadow duration-300"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white gap-5">
                <h2
                  dangerouslySetInnerHTML={{ __html: t("opening") }}
                  className="text-xl sm:text-[40px] font-bold"
                ></h2>
              </div>
              <Link
                className="absolute right-5 bottom-5 sm:bottom-10 opacity-0 translate-y-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 text-[#0086ee] flex items-center gap-[5px]"
                to={`/news/card1`}
                state={{
                  title: t("news_date"),
                  description: t("news_description"),
                  image: openImage,
                }}
              >
                {t("news_button")} <FaArrowRight />
              </Link>
            </div>

            {/* Kichik rasmlar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {imagesArr.map((img, index) => {
                const newsId = index + 1;

                return (
                  <div
                    key={newsId}
                    className="w-full sm:w-[290px] h-auto sm:h-[342px] bg-[#252527] relative group overflow-hidden cursor-pointer hover:shadow-[0px_0px_10px_10px_rgba(1,134,239,0.5)] transition-shadow duration-300"
                  >
                    <img
                      src={img}
                      alt={`news-image-${newsId}`}
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
                    <Link
                      to={`/news/${newsId}`}
                      state={{
                        title: t("news_date"),
                        description: t("news_description"),
                        image: img,
                      }}
                      className="absolute right-5 bottom-1 opacity-0 translate-y-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 text-[#0086ee] flex items-center gap-[5px]"
                    >
                      {t("news_button")} <FaArrowRight />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Ikkinchi qism */}
        <section className="mt-10 sm:mt-[50px] px-5 sm:px-10">
          <div className="w-full min-h-screen text-white flex flex-col sm:items-center sm:justify-center lg:flex-row justify-center gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {imagesArr.map((img, index) => {
                const newsId = index + 5;

                return (
                  <div
                    key={newsId}
                    className="w-full sm:w-[290px] h-auto sm:h-[342px] bg-[#252527] relative group overflow-hidden cursor-pointer hover:shadow-[0px_0px_30px_20px_rgba(1,134,239,0.5)] transition-shadow duration-300"
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
                    <Link
                      className="absolute right-5 bottom-1 opacity-0 translate-y-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 text-[#0086ee] flex items-center gap-[5px]"
                      to={`/news/${newsId}`}
                      state={{
                        title: t("news_date"),
                        description: t("news_description"),
                        image: img,
                      }}
                    >
                      {t("news_button")} <FaArrowRight />
                    </Link>
                  </div>
                );
              })}
            </div>
            <div className="relative group w-full sm:w-[650px]">
              <img
                src={chegirma}
                alt=""
                className="w-full sm:w-[650px] h-auto sm:h-[705px] object-cover cursor-pointer hover:shadow-[0px_10px_30px_20px_rgba(1,134,239,0.5)] transition-shadow duration-300"
              />
              <Link
                className="absolute right-5 bottom-5 sm:bottom-10 opacity-0 translate-y-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 text-[#0086ee] flex items-center gap-[5px]"
                to={`/news/1`}
                state={{
                  title: t("news_date"),
                  description: t("news_description"),
                  image: chegirma,
                }}
              >
                {t("news_button")} <FaArrowRight />
              </Link>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default NewsPage;
