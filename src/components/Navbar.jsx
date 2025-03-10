import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { IoMenu, IoClose } from "react-icons/io5"; // Menu icons
import logo from "../assets/logosvg 1.svg";
import "./Navbar.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink, Link } from "react-router-dom";
import LanguageDropdown from "./LangDropdown";
import "../i18.jsx";

export const Navbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
    <>
      {/* Header */}
      <header
        className={`w-full py-4 fixed top-0 z-50 text-white flex transition-all duration-300 
        ${isScrolled ? "backdrop-blur-lg bg-transparent" : "bg-transparent"}`}
      >
        <nav className="w-full flex items-center justify-between px-6 md:px-10">
          {/* Logo */}
          <Link to={"/"} className="flex items-center">
            <img src={logo} alt="Logo" className="w-32 md:w-40" />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-10 text-[16px]">
            {[
              { path: "/", label: t("home") },
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
                    `text-lg font-medium hover:text-[#0086EE] transition ${
                      isActive ? "text-blue-500" : ""
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right Icons (Language + Mobile Menu) */}
          <div className="flex items-center gap-4">
            {/* Language Switch */}
            <LanguageDropdown />

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white text-3xl"
            >
              {menuOpen ? <IoClose /> : <IoMenu />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 
          ${
            menuOpen
              ? "backdrop-blur-lg bg-black/50"
              : "backdrop-blur-0 bg-transparent pointer-events-none"
          }`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-gray-900/80 text-white shadow-lg transform transition-transform duration-300 
            ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="flex flex-col items-start gap-5 p-10 mt-14 text-lg">
            {[
              { path: "/", label: t("home") },
              { path: "/news", label: t("news") },
              { path: "/services", label: t("services") },
              { path: "/workers", label: t("workers") },
              { path: "/vacancy", label: t("vacancies") },
              { path: "/about", label: t("about") },
            ].map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className="hover:text-blue-500 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
