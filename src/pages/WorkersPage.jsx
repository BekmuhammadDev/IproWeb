import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "emailjs-com";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import HODIMLAR from "../assets/HODIMLAR.png";
import { LuArrowDownToLine } from "react-icons/lu";
import Dropdown from "../components/Dropdown";
import DropdownSalary from "../components/DropdownSalary";
import DegreeDropdown from "../components/DropdownDegree";
import DropdownEmployment from "../components/DropdownEmployment";
import AhilJamoa from "../components/AhilJamoa";
import { employees } from "../mocks/mock";
import { useTranslation } from "react-i18next";
import "../i18";

const EmployeeCard = ({ employee }) => {
  const { t } = useTranslation();
  return (
    <div className="relative group w-[305px] h-96 overflow-hidden rounded-lg shadow-lg cursor-pointer">
      <img
        src={employee.image}
        alt={employee.name}
        className="w-full h-full object-cover"
      />

      <div className="absolute bottom-0 left-0 w-full h-[105px] bg-[#ffffffe4] p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
        <h3 className="text-lg font-semibold">{t(employee.name)}</h3>
        <p className="text-gray-600">{t(employee.position)}</p>
        {employee.description && (
          <p className="text-sm text-gray-500">{t(employee.description)}</p>
        )}
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

  // LocalStorage ga saqlash
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
      if (!value) newErrors[key] = "Iltimos, bu maydonni to'ldiring";
    });

    if (!formData.cv) {
      newErrors.cv = "CV yuklash majburiy";
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
      alert("Ma'lumot emailga yuborildi!");

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
      alert("Xatolik yuz berdi.");
    }
  };

  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "vacancySection") {
      const section = document.getElementById("vacancy-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>
      <Navbar />
      <section className="mt-[120px] mb-11">
        <div className="relative flex justify-center">
          <h1 className="text-[128px] font-semibold text-[#ffffff21] relative bottom-12">
            {t("workers_BIG")}
          </h1>
          <h1 className="text-white absolute text-[64px] font-semibold">
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
        <form
          className="grid grid-cols-3 gap-4 p-6 rounded-lg text-white"
          onSubmit={handleSubmit}
        >
          <label>
            <p>*{t("full_name")}</p>
            <input
              className="p-2 w-[300px] h-[46px] rounded bg-gray-800"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && (
              <span className="text-red-500 text-sm">{errors.fullName}</span>
            )}
          </label>

          <label>
            <p>*{t("region")}</p>
            <Dropdown
              onChange={(value) => handleDropdownChange("region", value)}
            />
            {errors.region && (
              <span className="text-red-500 text-sm">{errors.region}</span>
            )}
          </label>

          <label>
            <p>*{t("salary")}</p>
            <DropdownSalary
              onChange={(value) => handleDropdownChange("salary", value)}
            />
            {errors.salary && (
              <span className="text-red-500 text-sm">{errors.salary}</span>
            )}
          </label>

          <label>
            <p>*{t("profession")}</p>
            <input
              className="p-2 rounded bg-gray-800 w-[300px] h-[46px]"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
            />
            {errors.profession && (
              <span className="text-red-500 text-sm">{errors.profession}</span>
            )}
          </label>

          <label>
            <p>*{t("level")}</p>
            <DegreeDropdown
              onChange={(value) => handleDropdownChange("level", value)}
            />
            {errors.level && (
              <span className="text-red-500 text-sm">{errors.level}</span>
            )}
          </label>

          <label>
            <p>*{t("employment_type")}</p>
            <DropdownEmployment
              onChange={(value) => handleDropdownChange("employment", value)}
            />
            {errors.employment && (
              <span className="text-red-500 text-sm">{errors.employment}</span>
            )}
          </label>

          <label>
            <p>*{t("phone_number")}</p>
            <input
              className="p-2 w-[300px] h-[46px] rounded bg-gray-800"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <span className="text-red-500 text-sm">{errors.phone}</span>
            )}
          </label>

          <label>
            <p>*{t("portfolio")}</p>
            <input
              className="p-2 rounded bg-gray-800 w-[300px] h-[46px]"
              name="portfolio"
              value={formData.portfolio}
              onChange={handleChange}
            />
            {errors.portfolio && (
              <span className="text-red-500 text-sm">{errors.portfolio}</span>
            )}
          </label>

          <label>
            <p>*{t("upload_cv")}</p>
            <div className="p-3 bg-gray-800 rounded cursor-pointer w-[300px] h-[46px] flex items-center justify-center">
              <input
                type="file"
                name="cv"
                onChange={handleFileChange}
                className="hidden"
              />
              <LuArrowDownToLine className="text-#000000 text-2xl" />
            </div>
            {errors.cv && (
              <span className="text-red-500 text-sm">{errors.cv}</span>
            )}
          </label>

          <AhilJamoa />
          <button
            className="p-2 mt-14 w-[300px] h-12 bg-blue-500 text-white rounded hover:bg-blue-600"
            type="submit"
          >
            {t("submit")}
          </button>
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default WorkersPage;
