import { useEffect, useState, useRef } from "react";
import {
  AnimatePresence,
  motion,
  useAnimate,
  useMotionValue,
  useTransform,
  useInView,
  useScroll,
} from "framer-motion";
import Tilt from "react-parallax-tilt";

const Card = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  console.log(scrollYProgress.current)
  const tiltAngle = useTransform(scrollYProgress, [0.0, 1.0], [-30, 30]);

  return (
    <div className="w-11/12" ref={ref}>
      {/*  */}
      <motion.div id="vinylC">
        <Tilt
          tiltAngleXInitial={tiltAngle}
          tiltAngleYInitial={tiltAngle}
          >
          <img
            src="./vinylC.webp"
            alt="Website screenshot"
            className="p-2 rounded-2xl"
          />
        </Tilt>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope);
  const initMotion = useMotionValue(0);
  // const vinylC = document.getElementById("vinylC");

  useEffect(() => {
    if (inView) {
      animate(scope.vinylC);
    }
  }, [inView]);

  return (
    <AnimatePresence>
      <div
        ref={scope}
        id="projects-root"
        className="relative flex flex-col items-center w-screen bg-purp"
      >
        <h1 className="text-9xl font-alegreya-bold">MY PROJECTS</h1>
        {/* Card component */}
        <div className="flex flex-row justify-center w-full">
          <Card />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Projects;
