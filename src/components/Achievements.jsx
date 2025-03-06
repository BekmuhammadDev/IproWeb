import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
import "../i18"



const achievementsList = [
  { metric: "Projects", value: 100, postfix: "+" },
  { metric: "Partners", value: 50, postfix: "+" },
  { metric: "achievements", value: 7 },
  { metric: "Year", value: 3 },
];

const Achievements = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-black py-10 flex justify-center my-[100px]">
      <div className="flex items-center justify-center text-white gap-[50px]">
        {achievementsList.map((achievement, index) => (
          <div key={index} className="flex items-center">
            {index !== 0 && (
              <div className="h-16 w-[1px] bg-gray-500 mx-6"></div>
            )}
            <div className="text-center">
              <p className="text-lg text-gray-300">{t(achievement.metric)}</p>
              <h2 className="text-4xl font-bold">
                <CountUp
                  start={0}
                  end={achievement.value}
                  duration={5} // ⚡ Animatsiyani sekinlashtirish uchun
                  separator=","
                />
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
