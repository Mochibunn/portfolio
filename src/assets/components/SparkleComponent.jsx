import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const SparkleComponent = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".starGroup1", {
        y: "random(-50, 50)",
        ease: "power2.inOut",
        duration: 1.25,
        repeat: -1,
        yoyo: "true",
        stagger: 0,
      });
    },
    { scope: container }
  );

  return <div ref={container}></div>;
};

export default SparkleComponent;
