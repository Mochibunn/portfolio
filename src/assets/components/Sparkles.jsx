import { useRef } from "react";
import "../styles/sparkles.css";
import Sparkle from "../img/Sparkle.jsx";

const Sparkles = ({ minX, maxX, minY, maxY, minS, maxS }) => {
  const styles = useRef({
    // left: Math.trunc(Math.random() * (maxX - minX) + minX),
    // top: Math.trunc(Math.random() * (maxY - minY) + minY),
    transform: `scale(${Math.random() * (maxS - minS) + minS})`,
  });

  const randomize = (min, max) => {
    const a = Math.trunc(Math.random() * (max - min) + min);
    const msg = `${a}`;
    console.log(msg);
    return `${a}px`;
  };

  return (
    <div className="absolute z-20">
      <div className="absolute" style={styles.current}>
        <Sparkle />
      </div>
    </div>
  );
};

export default Sparkles;
