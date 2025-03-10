import { useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useTranslation } from "react-i18next";
import "../i18.jsx";
import Webdasturlash from "../assets/Web dasturlash 1.png"
import cardbook from "../assets/cardbook.png"
import cardoffice from "../assets/cardoffice.png"

const Portfolio = () => {
    const { id } = useParams();
    const { t } = useTranslation();

    return (
        <div>
            <Navbar />
            <div>
                {/* H1 elementi stilini ServicesPage bilan bir xil qilish */}
                <section className="mt-[120px] mb-11">
                    <div className="relative flex justify-center items-center w-full">
                        {/* Orqa fon matni (katta va xira) */}
                        <h1 className="absolute text-[12vw] sm:text-[96px] md:text-[128px] font-bold text-white/10">
                            {t("Portfolio")}
                        </h1>

                        {/* Oldi matn (kichik va aniq) */}
                        <h1 className="relative text-[6vw] sm:text-[48px] md:text-[64px] font-bold text-white">
                            {t("Portfolio")}
                        </h1>
                    </div>
                </section>

                <section className="mb-24">
                    <div className="container mx-auto">
                        <div className="flex items-center gap-10">
                            <div className="gap-y-5">
                                <img src={Webdasturlash} alt="#" width="630px" height="483" className=" shadow-lg hover:shadow-[0px_10px_30px_20px_rgba(1,134,239,0.5)] transition-shadow duration-300  cursor-pointer w-[630px] h-[483px]" />
                                <br />
                                <img src={Webdasturlash} alt="#" width="630px" height="483" className=" shadow-lg hover:shadow-[0px_10px_30px_20px_rgba(1,134,239,0.5)] transition-shadow duration-300  cursor-pointer w-[630px] h-[483px]" />
                            </div>
                            <div>
                                <img src={cardbook} alt="" className=" shadow-lg hover:shadow-[0px_10px_30px_20px_rgba(1,134,239,0.5)] transition-shadow duration-300  cursor-pointer" />
                                <br />
                                <img src={cardbook} alt="" className=" shadow-lg hover:shadow-[0px_10px_30px_20px_rgba(1,134,239,0.5)] transition-shadow duration-300  cursor-pointer" />
                                <br />
                                <img src={cardbook} alt="" className=" shadow-lg hover:shadow-[0px_10px_30px_20px_rgba(1,134,239,0.5)] transition-shadow duration-300  cursor-pointer" />
                                <br />
                                <img src={cardbook} alt="" className=" shadow-lg hover:shadow-[0px_10px_30px_20px_rgba(1,134,239,0.5)] transition-shadow duration-300  cursor-pointer" />
                            </div>
                            <div>
                                <img src={cardoffice} alt="" className=" h-[485px] shadow-lg hover:shadow-[0px_10px_30px_20px_rgba(1,134,239,0.5)] transition-shadow duration-300  cursor-pointer" />
                                <br />
                                <img src={cardoffice} alt="" className=" h-[485px] shadow-lg hover:shadow-[0px_10px_30px_20px_rgba(1,134,239,0.5)] transition-shadow duration-300  cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-24">
                    <div className="container mx-auto">
                        <div className="flex items-center gap-10">
                            <div>
                                <img src={cardoffice} alt="" className=" h-[485px] shadow-lg hover:shadow-[0px_10px_30px_20px_rgba(1,134,239,0.5)] transition-shadow duration-300  cursor-pointer" />
                                <br />
                                <img src={cardoffice} alt="" className=" h-[485px] shadow-lg hover:shadow-[0px_10px_30px_20px_rgba(1,134,239,0.5)] transition-shadow duration-300  cursor-pointer" />
                            </div>
                            <div>
                                <img src={cardbook} alt="" className=" shadow-lg hover:shadow-[0px_10px_30px_20px_rgba(1,134,239,0.5)] transition-shadow duration-300  cursor-pointer" />
                                <br />
                                <img src={cardbook} alt="" className=" shadow-lg hover:shadow-[0px_10px_30px_20px_rgba(1,134,239,0.5)] transition-shadow duration-300  cursor-pointer" />
                                <br />
                                <img src={cardbook} alt="" className=" shadow-lg hover:shadow-[0px_10px_30px_20px_rgba(1,134,239,0.5)] transition-shadow duration-300  cursor-pointer" />
                                <br />
                                <img src={cardbook} alt="" className=" shadow-lg hover:shadow-[0px_10px_30px_20px_rgba(1,134,239,0.5)] transition-shadow duration-300  cursor-pointer" />
                            </div>

                            <div className="gap-y-5">
                                <img src={Webdasturlash} alt="#" width="630px" height="483" className=" shadow-lg hover:shadow-[0px_10px_30px_20px_rgba(1,134,239,0.5)] transition-shadow duration-300  cursor-pointer w-[630px] h-[483px]" />
                                <br />
                                <img src={Webdasturlash} alt="#" width="630px" height="483" className=" shadow-lg hover:shadow-[0px_10px_30px_20px_rgba(1,134,239,0.5)] transition-shadow duration-300  cursor-pointer w-[630px] h-[483px]" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default Portfolio; // <--- EXPORT TO‘G‘RI!
