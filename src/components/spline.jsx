import Spline from "@splinetool/react-spline";
import { useState } from "react";

const SplineViewer = () => {
  const [robot, setRobot] = useState(null); // Robot obyekti

  // Spline sahifasi yuklanganda chaqiriladi
  const onSplineLoad = (spline) => {
    const object = spline.findObjectByName("Robot"); // "Robot" nomli obyektni olish
    if (object) {
      setRobot(object);
    }
  };

  // Sichqoncha harakatlanganda robotni harakatlantirish
  const handleMouseMove = (event) => {
    if (robot) {
      const { clientX, clientY } = event;
      robot.position.x = (clientX - window.innerWidth / 2) * 0.01;
      robot.position.y = -(clientY - window.innerHeight / 2) * 0.01;
    }
  };

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-[#000000]"
      onMouseMove={handleMouseMove} // Sichqoncha harakati
    >
      <Spline
        scene="https://prod.spline.design/uJVrdR00ImQ-ndSW/scene.splinecode"
        onLoad={onSplineLoad}
      />
    </div>
  );
};

export default SplineViewer;
