import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Parallax = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start", "end start"],
  });

  const pbgs = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const parallaxBg = useTransform(pbgs, [0.0, 1.0], ["0%", "-10%"]);

  const ptxs = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 10,
    restDelta: 0.001,
  });
  const parallaxTxt = useTransform(
    ptxs,
    [0.0, 1.0],
    ["0%", "300%"]
  );

  const scaling =
    Math.round((window.devicePixelRatio + Number.EPSILON) * 100) / 100;

  return (
    <div className="relative">
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
          className="text-[30vw] xl:text-[20vw] 2xl:text-[10vw] font-protest-revolution font-bold select-none pointer-events-none text-star relative z-10 bottom-0"
        >
          Hello!
        </motion.h1>
        <div className="absolute inset-0 z-30" id="postCodeGradient" />
        <motion.div
          className="absolute top-0 bottom-0 left-0 right-0 z-0 min-h-screen"
          style={{
            backgroundImage: "url(/bg-back.webp)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: parallaxBg,
          }}
        />
        <div
          className="absolute inset-0 z-20 w-full bg-cover top-4"
          style={{
            backgroundImage: "url(/bg-front.webp)",
            backgroundPosition: "bottom",
            // backgroundSize: "150%",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
      <div className="absolute inset-0 z-30 min-h-[300px]" id="houseGradient" />
    </div>
  );
};

export default Parallax;
