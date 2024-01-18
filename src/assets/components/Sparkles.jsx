import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "../styles/sparkles.css";
import Sparkle from "../img/Sparkle.jsx";

const Sparkles = () => {
  const container = useRef();
  useGSAP(
    () => {
      gsap.to(".star", {
        y: "random(-50, 50)",
        ease: "power2.inOut",
        duration: "random(1.5, 2.2)",
        repeat: -1,
        yoyo: "true",
        stagger: 0.23,
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className="relative z-20">
      <div className="center z-10 star">
        <Sparkle />
      </div>
      <div className="center z-10 star ml-20">
        <Sparkle />
      </div>
      <div className="center z-10 star ml-40">
        <Sparkle />
      </div>
    </div>
  );
};

export default Sparkles;
