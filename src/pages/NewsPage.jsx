import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Yangiliklar from "../assets/YANGILIKLAR.png"
import image from "../assets/ochilish.svg";
import greenly from "../assets/green.svg"
import image2 from "../assets/image.svg";
import image3 from "../assets/girlimage.svg";
import image5 from "../assets/laptop.svg";
import chegirma from "../assets/chegirma.png"
import Coffee from "../assets/Coffee.png"
import Plane from "../assets/Plan.png"
import Work from "../assets/Work.png"
import { useTranslation } from "react-i18next";
import "../i18";

const NewsPage = () => {
  
    const { t } = useTranslation();
  
  return (
    <div>
      <Navbar />
      {/* ----------------------------------------------- */}
      <section className="mt-[120px] mb-11">
        {/* ----------------------------------------------- */}
        <div className="relative flex justify-center">
          <h1 className="text-[128px] font-semibold text-[#ffffff21] relative bottom-12">{t("NEWS_BIG")}</h1>
          <h1 className="text-white absolute text-[64px] font-semibold">{t("NEWS_BIG")}</h1>
        </div>
        {/* ----------------------------------------------- */}
        <div className="mt-[50px] px-10">

          <div className="flex justify-center items-center gap-5">

            <div className=" relative group cursor-pointer">
              <img
                src={image}
                alt=""
                width={650}
                height={580}
                className="object-cover"
              />
              <button className="w-[76px] h-[24px] text-[#0086ee] bottom-10 z-10 absolute left-[540px]  opacity-0 translate-y-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 items-center">
                <Link className="flex items-center gap-[5px]" to={"/opencompany"}>
                  {t("Detail")} <FaArrowRight />
                </Link>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 ">

              <div className="w-[290px] h-[342px] p-auto bg-[#252527] relative group text-white cursor-pointer border border-black hover:border-blue-600">
                <img src={image2} alt="" />
                <article className="p-3">
                  <h4 className="font-bold text-bold mb-[5px]">10.11.2023</h4>
                  <p className="text-[12px] font-normal leading-[14px]">
                    {t("text_description")}
                  </p>
                </article>
                <button className="w-[76px] h-[24px] text-[#0086ee] absolute left-[193px] bottom-[8px] opacity-0 translate-y-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                  <Link className="flex items-center gap-[5px]" to={"/news"}>
                    {t("Detail")} <FaArrowRight />
                  </Link>
                </button>
              </div>

              <div className="w-[290px] h-[342px] p-auto bg-[#252527] relative group text-white cursor-pointer  border border-black hover:border-blue-600">
                <img src={image3} alt="" />
                <article className="p-3">
                  <h4 className="font-bold text-bold mb-[5px]">10.11.2023</h4>
                  <p className="text-[12px] font-normal leading-[14px]">
                    {t("text_description")}
                  </p>
                </article>
                <button className="w-[76px] h-[24px] text-[#0086ee] absolute left-[193px] bottom-[8px] opacity-0 translate-y-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                  <Link className="flex items-center gap-[5px]" to={"/news"}>
                    {t("Detail")} <FaArrowRight />
                  </Link>
                </button>
              </div>

              <div className="w-[290px] h-[342px] p-auto bg-[#252527] relative group text-white cursor-pointer  border border-black hover:border-blue-600">
                <img src={greenly} alt="" />
                <article className="p-3">
                  <h4 className="font-bold text-bold mb-[5px]">10.11.2023</h4>
                  <p className="text-[12px] font-normal leading-[14px]">
                    {t("text_description")}
                  </p>
                </article>
                <button className="w-[76px] h-[24px] text-[#0086ee] absolute left-[195px] bottom-[8px] opacity-0 translate-y-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                  <Link className="flex items-center gap-[5px]" to={"/news"}>
                    {t("Detail")} <FaArrowRight />
                  </Link>
                </button>
              </div>

              <div className="w-[290px] h-[342px] p-auto bg-[#252527] relative group text-white cursor-pointer border border-black hover:border-blue-600">
                <img src={image5} alt="" />
                <article className="p-3">
                  <h4 className="font-bold text-bold mb-[5px]">10.11.2023</h4>
                  <p className="text-[12px] font-normal leading-[14px]">
                    {t("text_description")}
                  </p>
                </article>
                <button className="w-[76px] h-[24px] text-[#0086ee] absolute left-[193px] bottom-[8px] opacity-0 translate-y-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                  <Link className="flex items-center gap-[5px]" to={"/news"}>
                    {t("Detail")} <FaArrowRight />
                  </Link>
                </button>
              </div>

            </div>
          </div>

        </div>
        {/* ----------------------------------------------- */}
        <div className="mt-[50px] px-10">

          <div className="flex justify-center">

            <div className="flex items-center gap-5 ">

              <div className="gap-5">

                <div className="w-[290px] h-[342px] mb-5 p-auto bg-[#252527] relative group text-white cursor-pointer  border border-black hover:border-blue-600">
                  <img src={Coffee} alt="" width={290} height={184} />
                  <article className="p-3">
                    <h4 className="font-bold text-bold mb-[5px]">10.11.2023</h4>
                    <p className="text-[12px] font-normal leading-[14px]">
                      {t("text_description")}

                    </p>
                  </article>

                  <button className="w-[76px] h-[24px] text-[#0086ee] absolute left-[195px] bottom-[8px] opacity-0 translate-y-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                    <Link className="flex items-center gap-[5px]" to={"/news"}>
                      {t("Detail")} <FaArrowRight />
                    </Link>
                  </button>
                </div>

                <div className="w-[290px] h-[342px] p-auto bg-[#252527] relative group text-white cursor-pointer  border border-black hover:border-blue-600">
                  <img src={image3} alt="" />
                  <article className="p-3">
                    <h4 className="font-bold text-bold mb-[5px]">10.11.2023</h4>
                    <p className="text-[12px] font-normal leading-[14px]">
                      {t("text_description")}

                    </p>
                  </article>
                  <button className="w-[76px] h-[24px] text-[#0086ee] absolute left-[193px] bottom-[8px] opacity-0 translate-y-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                    <Link className="flex items-center gap-[5px]" to={"/news"}>
                      {t("Detail")} <FaArrowRight />
                    </Link>
                  </button>
                </div>

              </div>

              <div className=" relative group cursor-pointer">
                <img
                  src={chegirma}
                  alt=""
                  width={650}
                  height={580}
                  className="object-cover"
                />
                <button className="w-[76px] h-[24px] text-[#0086ee] bottom-10 z-10 absolute left-[540px]  opacity-0 translate-y-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 items-center">
                  <Link className="flex items-center gap-[5px]" to={"/news"}>
                    {t("Detail")} <FaArrowRight />
                  </Link>
                </button>
              </div>

              <div className="gap-5">

                <div className="w-[290px] h-[342px] mb-5 p-auto bg-[#252527] relative group text-white cursor-pointer  border border-black hover:border-blue-600">
                  <img src={Plane} alt="" />
                  <article className="p-3">
                    <h4 className="font-bold text-bold mb-[5px]">10.11.2023</h4>
                    <p className="text-[12px] font-normal leading-[14px]">
                      {t("text_description")}

                    </p>
                  </article>
                  <button className="w-[76px] h-[24px] text-[#0086ee] absolute left-[195px] bottom-[8px] opacity-0 translate-y-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                    <Link className="flex items-center gap-[5px]" to={"/news"}>
                      {t("Detail")} <FaArrowRight />
                    </Link>
                  </button>
                </div>

                <div className="w-[290px] h-[342px] p-auto bg-[#252527] relative group text-white cursor-pointer border border-black hover:border-blue-600">
                  <img src={Work} alt="" />
                  <article className="p-3">
                    <h4 className="font-bold text-bold mb-[5px]">10.11.2023</h4>
                    <p className="text-[12px] font-normal leading-[14px]">
                      {t("text_description")}

                    </p>
                  </article>
                  <button className="w-[76px] h-[24px] text-[#0086ee] absolute left-[193px] bottom-[8px] opacity-0 translate-y-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                    <Link className="flex items-center gap-[5px]" to={"/news"}>
                      {t("Detail")} <FaArrowRight />
                    </Link>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* ----------------------------------------------- */}
      </section>
      <Footer />
    </div>
  );
};

export default NewsPage;
