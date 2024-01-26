import { useRef } from "react";
import "../styles/sparkles.css";
import Sparkle from "../img/Sparkle.jsx";

const Sparkles = ({ minX, maxX, minY, maxY, minS, maxS }) => {
  const styles = useRef({
    // left: Math.trunc(Math.random() * (maxX - minX) + minX),
    // top: Math.trunc(Math.random() * (maxY - minY) + minY),
    transform: `scale(${Math.random() * (maxS - minS) + minS})`,
  });

  return (
    <div className="absolute z-20">
      <div className="absolute" style={styles.current}>
        <Sparkle />
      </div>
    </div>
  );
};

export default Sparkles;

// Takes the sparkle SVG and randomly scales is up or down