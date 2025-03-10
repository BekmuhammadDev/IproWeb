import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { viloyatlar } from "../mocks/mock";
import { useTranslation } from "react-i18next";
import "../i18.jsx";

const ViloyatDropdown = ({ onChange }) => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(viloyatlar[1]); // Default: Toshkent

  const handleSelect = (value) => {
    setSelected(value);
    if (onChange) {
      onChange(value); // **Tanlangan viloyatni tashqi komponentga jo‘natish**
    }
  };

  return (
    <div className="relative w-full text-white">
      <Listbox value={selected} onChange={handleSelect}>
        <Listbox.Button className="flex items-center justify-between w-full h-[46px] px-4 py-2 bg-gray-800 rounded-[8px] hover:bg-gray-700 transition">
          {selected}
          <ChevronDown size={18} />
        </Listbox.Button>
        <Listbox.Options className="absolute top-full right-0 w-[300px] bg-[#29292A] rounded-lg shadow-lg overflow-y-auto max-h-[240px] custom-scroll mt-2 p-2 z-50">
          {viloyatlar.map((viloyat, idx) => (
            <Listbox.Option
              key={idx}
              value={t(viloyat)}
              className={({ active }) =>
                `flex items-center gap-2 px-4 py-2 cursor-pointer rounded-md transition ${
                  active ? "bg-blue-600 text-white" : "text-gray-300"
                }`
              }
            >
              <span
                className={`w-4 h-4 flex items-center justify-center border rounded-full ${
                  selected === viloyat
                    ? "border-blue-500 bg-blue-500"
                    : "border-gray-400"
                }`}
              >
                {selected === viloyat && (
                  <span className="w-2 h-2  rounded-full"></span>
                )}
              </span>
              {t(viloyat)}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};

export default ViloyatDropdown;
