import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
import { useEffect, useState, useRef } from "react";
import "../i18.jsx";

const achievementsList = [
  { metric: "Projects", value: 100, postfix: "+" },
  { metric: "Partners", value: 50, postfix: "+" },
  { metric: "Achievements", value: 30 },
  { metric: "Year", value: 5 },
];

const Achievements = () => {
  const { t } = useTranslation();
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          } else {
            setInView(false);
          }
        });
      },
      { threshold: 0.5 } // 50% chiqsa ishga tushadi
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="bg-black py-5 flex justify-center my-[10px]">
      <div className="flex flex-col sm:flex-row items-center justify-center text-white gap-8 sm:gap-[50px]">
        {achievementsList.map((achievement, index) => (
          <div key={index} className="flex items-center">
            {index !== 0 && (
              <div className="hidden sm:block h-16 w-[1px] bg-gray-500 mx-6"></div>
            )}
            <div className="text-center">
              <p className="text-lg sm:text-2xl text-gray-300 font-bold">
                {t(achievement.metric)}
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold">
                {inView && (
                  <CountUp
                    start={0}
                    end={achievement.value}
                    duration={3}
                    separator=","
                  />
                )}
                {achievement.postfix && (
                  <span className="ml-1">{achievement.postfix}</span>
                )}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
