import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ChevronDown, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../i18.jsx";

const LanguageDropdown = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(i18n.language || "uz");
  const navigate = useNavigate();

  const languages = [
    { code: "uz", label: "UZ" },
    { code: "ru", label: "RU" },
    { code: "en", label: "EN" },
  ];

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setSelectedLang(lang.toUpperCase());
    setIsOpen(false);
  };

  const handleCardClick = () => {
    navigate("/", { state: { scrollTo: "contactSection" } });
  };

  return (
    <div className="flex items-center gap-10">
      <button
        onClick={handleCardClick}
        className="  w-[180px] h-[40px]  rounded-[8px] text-white bg-[#42a6f3f7] hidden xl:block hover:bg-transparent hover:font-semibold hover:leading-3 hover:border-[1px] hover:border-solid hover:border-[#42a6f3f7] transition"
      >
        <h1>{t("contact")}</h1>
      </button>

      <div className="relative inline-block">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between border border-[#5C5E60] p-2 h-10 w-20 bg-inherit rounded-[8px] text-[14px] font-bold text-white cursor-pointer"
        >
          <Globe className="w-5 h-5 mr-1" />
          {selectedLang.toUpperCase()}
          <ChevronDown
            className={`transition-transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 mt-2 w-20 bg-black border border-gray-700 rounded-lg shadow-lg overflow-hidden"
          >
            {languages.map((lang) => (
              <li
                key={lang.code}
                className="px-4 py-2 hover:bg-gray-700 text-white cursor-pointer text-center"
                onClick={() => changeLanguage(lang.code)}
              >
                {lang.label}
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </div>
  );
};

export default LanguageDropdown;
