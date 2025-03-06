import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/logosvg 1.svg";
import "./Navbar.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink, Link } from "react-router-dom";
import LanguageDropdown from "./LangDropdown";
import "../i18";

export const Navbar = () => {
  const { t } = useTranslation();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <header
      className={`w-full py-5 fixed top-0 z-50 text-white flex transition-all duration-300 ${isScrolled ? "bg-gray-800 backdrop-blur-md" : "bg-transparent"
        }`}
    >
      <nav className="w-full flex items-center justify-between px-10">
        <div className="cursor-pointer">
          <Link to={"/"}>
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <ul className="flex gap-[50px] text-[16px]">
          {[
            { path: "/news", label: t("news") },
            { path: "/services", label: t("services") },
            { path: "/workers", label: t("workers") },
            { path: "/vacancy", label: t("vacancies") },
            { path: "/about", label: t("about") },
          ].map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-xl hover:text-[#0086EE] ${isActive ? "text-blue-500" : ""}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <LanguageDropdown />
      </nav>
    </header>
  );
};
