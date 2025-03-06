import React, { useEffect, useState } from "react";
import "./Carusel.scss";
import Item from "./item";
import { data } from "../mocks/mock";

const Carousel = () => {

  const [angle, setAngle] = useState(0);
  const [velocity, setVelocity] = useState(2);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let vel = velocity;

    const interval = setInterval(() => {
      if (isPaused) {
        if (vel > 0) {
          vel -= 0.1; 
          setVelocity(vel);
        }
      } else {
        vel = 2;
        setVelocity(2);
      }

      setAngle((prev) => prev + vel);
    }, 100);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="carousel"
      onMouseEnter={() => setIsPaused(true)} 
      onMouseLeave={() => setIsPaused(false)} 
    >
      {data.map((item, index) => {
        const rotation = (360 / data.length) * index + angle;
        const x =
          Math.cos((rotation * Math.PI) / 180) * 600 + window.innerWidth / 2;
        const y =
          Math.sin((rotation * Math.PI) / 180) * 500 + window.innerHeight / 2;

        return <Item key={item.id} item={item} x={x} y={y} />;
      })}
    </div>
  );
};

export default Carousel;
