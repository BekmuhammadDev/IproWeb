import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "emailjs-com";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { LuArrowDownToLine } from "react-icons/lu";
import Dropdown from "../components/Dropdown";
import DropdownSalary from "../components/DropdownSalary";
import DegreeDropdown from "../components/DropdownDegree";
import DropdownEmployment from "../components/DropdownEmployment";
import AhilJamoa from "../components/AhilJamoa";
import { employees } from "../mocks/mock";
import { useTranslation } from "react-i18next";
import "../i18.jsx";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { FaTelegram, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const EmployeeCard = ({ employee }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/workers/${employee.id}`, { state: employee }); // Ma'lumotni yuborish
  };

  return (
    <div
      className="card relative group w-[305px] h-96 overflow-hidden rounded-lg cursor-pointer perspective-[1000px] duration-500 shadow-lg hover:shadow-[0px_10px_30px_20px_rgba(1,104,159,0.5)]"
      onClick={handleClick} // Bosilganda sahifaga o'tkazadi
    >
      <div
        style={{
          background: `linear-gradient(
              to bottom right, rgba(0, 0, 255, 0.5) 10%, transparent 20%
            ), 
            linear-gradient(
              to top left, rgba(0, 0, 255, 0.5) 15%, transparent 40%
            )`,
        }}
        className="card-inner relative w-full h-full transform-style-3d"
      >
        <div className="card-front absolute w-full h-full backface-hidden rounded-lg overflow-hidden border border-gray-300">
          <img
            src={employee.image}
            alt={t(employee.name)}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="card-back absolute w-full h-full flex flex-col items-center justify-center text-center p-4 rounded-lg backface-hidden border border-gray-500">
          <h1 className="text-lg font-semibold text-white">
            {t(employee.name)}
          </h1>
          <p className="text-yellow-400">{t(employee.position)}</p>
          {employee.description && (
            <p className="text-sm text-gray-300">{t(employee.description)}</p>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-20 bg-white/45 z-50 backdrop-blur-2xl flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <FaTelegram className="text-white text-2xl cursor-pointer hover:text-blue-400" />
        <FaInstagram className="text-white text-2xl cursor-pointer hover:text-blue-400" />
        <BsFacebook className="text-white text-2xl cursor-pointer hover:text-blue-400" />
        <FaYoutube className="text-white text-2xl cursor-pointer hover:text-blue-400" />
      </div>
    </div>
  );
};

const WorkersPage = () => {
  const { t } = useTranslation();

  const initialState = JSON.parse(localStorage.getItem("workersFormData")) || {
    fullName: "",
    profession: "",
    phone: "",
    region: "",
    salary: "",
    level: "",
    portfolio: "",
    employment: "",
    cv: null,
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    localStorage.setItem("workersFormData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFormData({ ...formData, cv: e.target.files[0] });
    }
  };

  const handleDropdownChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};

    Object.entries(formData).forEach(([key, value]) => {
      if (!value) newErrors[key] = t("Error");
    });

    if (!formData.cv) {
      newErrors.cv = "*Xatolik";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const templateParams = {
      fullName: formData.fullName,
      profession: formData.profession,
      phone: formData.phone,
      region: formData.region,
      salary: formData.salary,
      level: formData.level,
      portfolio: formData.portfolio,
      employment: formData.employment,
    };

    try {
      await emailjs.send(
        "service_zarp7qs",
        "template_n9y64se",
        templateParams,
        "7STayiENTcu0WLfMR"
      );

      toast.success(t("success_message"), {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });

      // Formani tozalash
      setFormData({
        fullName: "",
        profession: "",
        phone: "",
        region: "",
        salary: "",
        level: "",
        portfolio: "",
        employment: "",
        cv: null,
      });

      localStorage.removeItem("workersFormData");
      setErrors({});
    } catch (error) {
      console.error("Email yuborishda xatolik:", error);
      toast.error("Xatolik yuz berdi. Qaytadan urunib ko'ring!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    }
  };

  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "vacancySection") {
      const section = document.getElementById("vacancy-section");

      if (section) {
        const observer = new IntersectionObserver(
          (entries) => {
            const entry = entries[0];

            if (entry.isIntersecting) {
              section.scrollIntoView({ behavior: "smooth", block: "center" });
              observer.disconnect(); // Bir marta ishlagandan keyin observerni o‘chiramiz
            }
          },
          { root: null, threshold: 0.5 } // 50% ekranda bo‘lsa, trigger bo‘ladi
        );

        observer.observe(section);
      }
    }
  }, [location]);

  useEffect(() => {
    if (location.state?.scrollTo === "homeText") {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Sahifani tepaga olib boradi

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
  }, [location]);

  return (
    <div>
      <Navbar />
      <section className="mt-[120px] mb-11">
        <div
          id="home-text"
          className="relative flex justify-center items-center w-full"
        >
          {/* Orqa fon matni (katta va xira) */}
          <h1 className="absolute text-[12vw] sm:text-[96px] md:text-[128px] font-bold text-white/10">
            {t("workers_BIG")}
          </h1>

          {/* Oldi matn (kichik va aniq) */}
          <h1 className="relative text-[6vw] sm:text-[48px] md:text-[64px] font-bold text-white">
            {t("workers_BIG")}
          </h1>
        </div>
      </section>

      <section className="container mx-auto px-6 gap-x-10 mb-11">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 justify-center">
          {employees.map((employee) => (
            <EmployeeCard key={employee.id} employee={employee} />
          ))}
        </div>
      </section>

      <section id="vacancy-section" className="container mx-auto mb-8">
        <h1 className="text-white font-bold text-[27px] text-center">
          {t("join_our_team")}
        </h1>

        <div className="relative w-full flex justify-center items-center">
          {/* Kompyuter uchun Ahil Jamoa */}
          <div className="absolute hidden lg:block right-5 top-12 transform -translate-y-1/2">
            <AhilJamoa />
          </div>

          {/* Form */}
          <form
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6 p-8 rounded-lg text-white w-full max-w-6xl"
            onSubmit={handleSubmit}
          >
            <label className="flex flex-col">
              <p>*{t("full_name")}</p>
              <input
                className="p-2 w-full rounded bg-gray-800"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && (
                <span className="text-red-500 text-sm">{errors.fullName}</span>
              )}
            </label>

            <label className="flex flex-col">
              <p>*{t("region")}</p>
              <Dropdown
                onChange={(value) => handleDropdownChange("region", value)}
              />
              {errors.region && (
                <span className="text-red-500 text-sm">{errors.region}</span>
              )}
            </label>

            <label className="flex flex-col">
              <p>*{t("salary")}</p>
              <DropdownSalary
                onChange={(value) => handleDropdownChange("salary", value)}
              />
              {errors.salary && (
                <span className="text-red-500 text-sm">{errors.salary}</span>
              )}
            </label>

            <label className="flex flex-col">
              <p>*{t("profession")}</p>
              <input
                className="p-2 rounded bg-gray-800 w-full"
                name="profession"
                type="text"
                max={25}
                value={formData.profession}
                onChange={handleChange}
              />
              {errors.profession && (
                <span className="text-red-500 text-sm">
                  {errors.profession}
                </span>
              )}
            </label>

            <label className="flex flex-col">
              <p>*{t("level")}</p>
              <DegreeDropdown
                onChange={(value) => handleDropdownChange("level", value)}
              />
              {errors.level && (
                <span className="text-red-500 text-sm">{errors.level}</span>
              )}
            </label>

            <label className="flex flex-col">
              <p>*{t("employment_type")}</p>
              <DropdownEmployment
                onChange={(value) => handleDropdownChange("employment", value)}
              />
              {errors.employment && (
                <span className="text-red-500 text-sm">
                  {errors.employment}
                </span>
              )}
            </label>

            <label className="flex flex-col">
              <p>*{t("phone_number")}</p>
              <input
                className="p-2 w-full rounded bg-gray-800"
                name="phone"
                type="number"
                placeholder="99 999 99 99"
                value={formData.phone}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value.length <= 9) {
                    handleChange(e);
                  }
                }}
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">{errors.phone}</span>
              )}
            </label>

            <label className="flex flex-col">
              <p>*{t("portfolio")}</p>
              <input
                className="p-2 rounded bg-gray-800 w-full"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
              />
              {errors.portfolio && (
                <span className="text-red-500 text-sm">{errors.portfolio}</span>
              )}
            </label>

            <label className="flex flex-col">
              <p>*{t("upload_cv")}</p>
              <div className="p-3 bg-gray-800 rounded cursor-pointer flex items-center justify-center">
                <input
                  type="file"
                  name="cv"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <LuArrowDownToLine className="text-white text-2xl" />
              </div>
              {errors.cv && (
                <span className="text-red-500 text-sm">{errors.cv}</span>
              )}
            </label>

            <button
              className="p-2 w-full bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 md:w-1/2 lg:w-1/3"
              type="submit"
            >
              {t("submit")}
            </button>
            <ToastContainer />
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorkersPage;
