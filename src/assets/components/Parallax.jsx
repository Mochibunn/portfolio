import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start", "end start"],
  });
  const parallaxBg = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const parallaxTxt = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);

  const scaling =
    Math.round((window.devicePixelRatio + Number.EPSILON) * 100) / 100;

  return (
    <div
      className="relative grid w-full h-[220vh] overflow-hidden place-items-center"
      ref={ref}
    >
      <motion.h1
        id="hello"
        style={{
          y: parallaxTxt,
          top: -Math.round(80 * scaling),
        }}
        className="text-[30vw] xl:text-[20vw] 2xl:text-[10vw] font-singleday font-bold select-none pointer-events-none text-star relative z-10 bottom-0"
      >
        Hello!
      </motion.h1>
      <motion.div
        className="absolute top-0 bottom-0 left-0 right-0 z-0"
        style={{
          backgroundImage: "url(/bg-back.jpg)",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: parallaxBg,
        }}
      />
      <div
        className="absolute inset-0 z-20 w-full bg-cover top-4"
        style={{
          backgroundImage: "url(/bg-front.png)",
          backgroundPosition: "bottom",
          // backgroundSize: "150%",
          backgroundRepeat: "no-repeat",
        }}
      />
    </div>
  );
};

export default Parallax;
