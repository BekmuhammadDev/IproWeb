import React from "react";
import { MdArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";
import "../i18.jsx";

const Item = ({ item, x, y, isDisappearing, isAppearing }) => {
  const { t } = useTranslation();

  return (
    <div
      className={`carousel-item ${isDisappearing ? "hide" : ""} ${
        isAppearing ? "appear" : ""
      }`}
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
    >
      <div className="absolute top-1 left-1 text-4xl font-bold opacity-10">
        {t(item.title)}
      </div>

      <div className="z-10">
        <h2 className="text-xl font-semibold absolute top-5 left-5">
          {t(item.title)}
        </h2>
      </div>

      <div className="flex  items-center">
        <p className="text-xs font-normal text-left ml-2 text-gray-300 mt-2">
          {t(item.description)}
        </p>
        <button className=" text-black mr-10 p-[7px] rounded-full bg-white">
          <MdArrowRight fontSize={46} />
        </button>
      </div>
    </div>
  );
};

export default Item;
