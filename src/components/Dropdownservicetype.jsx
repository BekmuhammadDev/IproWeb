import { useState, useEffect, useRef } from "react";

const ServiceDropdown = ({ selectedService, onServiceSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(selectedService || "");
  const dropdownRef = useRef(null); // Dropdown tashqariga bosganda yopish uchun

  const services = [
    "Veb Dasturlash",
    "UI/UX Xizmatlari",
    "Dizayn Xizmatlari",
    "SMM xizmatlar",
    "Server va Hosting",
    "Promo Video",
    "Targeting",
    "Moushen Dizayn",
    " Montaj",
    "Telegram Bot",
  ];

  // Ota komponentdan kelayotgan qiymatni yangilash
  useEffect(() => {
    setInputValue(selectedService || "");
  }, [selectedService]);

  // Tashqariga bosganda dropdownni yopish
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (service) => {
    setInputValue(service); // Input qiymatini yangilash
    onServiceSelect("serviceType", service); // Ota komponentga xizmat turini jo‘natish
    setIsOpen(false); // Dropdownni yopish
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <input
        type="text"
        value={inputValue}
        readOnly // Foydalanuvchi qo‘lda kiritmasligi uchun
        className="w-full p-3 rounded-md bg-[#1C1C1C] text-white cursor-pointer focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        
      />
      {isOpen && (
        <ul className="absolute w-full mt-1 bg-white rounded-md shadow-md max-h-40 overflow-y-auto z-10">
          {services.map((service, index) => (
            <li
              key={index}
              className="p-3 hover:bg-blue-100 cursor-pointer"
              onMouseDown={(e) => {
                e.preventDefault();
                handleSelect(service);
              }}
            >
              {service}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceDropdown;
