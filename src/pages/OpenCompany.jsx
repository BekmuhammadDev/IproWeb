import React from 'react'
import Opencompany from "../assets/opencompany.png"
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { useTranslation } from "react-i18next";
import "../i18"


export const OpenCompany = () => {
    
      const { t } = useTranslation();
    
    return (
        <section>
            <Navbar />

            <div className='mt-32 mb-8 flex justify-center'>
                <img src={Opencompany} alt="#" />
            </div>
            <div className='px-20 mb-[73px]'>
                <h1 className='text-left text-white text-[32px] font-bold'>10.11.2023</h1>
                <p className='text-left text-white text-[20px] font-normal'>
                    {t("open_text")}
                </p>
            </div>
            <Footer />

        </section>
    )
}
