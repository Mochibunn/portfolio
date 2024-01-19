import { useRef } from "react";
import "../styles/sparkles.css";
import Sparkle from "../img/Sparkle.jsx";

const Sparkles = () => {
  const styles = useRef({
    left: Math.trunc(Math.random() * (240 - 180) + 180),
  });

  const randomize = (min, max) => {
    const a = Math.trunc(Math.random() * (max - min) + min);
    const msg = `${a}`;
    console.log(msg);
    return `${a}px`;
  };

  return (
    <div className="z-20">
      <div className="center z-10 starGroup1" id="star0" style={styles.current}>
        <Sparkle />
      </div>
      <div className="center z-10 starGroup1" id="star1">
        <Sparkle />
      </div>
      <div className="center z-10 starGroup1" id="star2">
        <Sparkle />
      </div>
    </div>
  );
};

export default Sparkles;
//TODO finish up randomization for at least 1 sparkle