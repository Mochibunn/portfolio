import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Sparkles from "./Sparkles";

const SparkleComponent = ({ minX, maxX, minY, maxY, minS, maxS, stagger }) => {
  const container = useRef();
  const styles = useRef({
    left: `${Math.trunc(Math.random() * (maxX - minX) + minX)}vw`,
    top: `${Math.trunc(Math.random() * (maxY - minY) + minY)}vh`,
  });

  useGSAP(
    () => {
      gsap.from(".star", {
        y: "random(-50, 50)",
        ease: "power2.inOut",
        duration: 1.25,
        repeat: -1,
        yoyo: "true",
        stagger: stagger,
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className="absolute" style={styles.current}>
      <div className="star">
        <Sparkles
          minX={minX}
          maxX={maxX}
          minY={minY}
          maxY={maxY}
          minS={minS}
          maxS={maxS}
        />
      </div>
    </div>
  );
};

export default SparkleComponent;

//Randomly places a sparkle and wiggles it up and down