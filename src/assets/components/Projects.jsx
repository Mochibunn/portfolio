import { useEffect, useState, useRef, } from "react";
import {
  AnimatePresence,
  motion,
  useAnimate,
  useMotionValue,
  useInView,
  useTransform,
  useScroll,
} from "framer-motion";
import Tilt from "react-parallax-tilt";
import BubbleText from "./BubbleText";

const Projects = () => {
  const [scope, animate] = useAnimate();
  const temp = useRef(0);
  // console.log(temp.current);
  const inView = useInView(scope);
  const initMotion = useMotionValue(0);
  // const vinylC = document.getElementById("vinylC");
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  });
  const [scrollPos, setScrollPos] = useState(0);
  // console.log(scrollPos);
  
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  useEffect(() => {
    const scrollCheck = (e) => {
      const deez = document.getElementById("deez");
      const scrollCurr = deez.scrollTop;
      if (scrollCurr > scrollPos) {
        //scroll down
      } else if (scrollCurr < scrollPos) {
        //scroll up
      } else return;
      setScrollPos(scrollCurr <=0 ? 0 : scrollCurr);
    };
    window.addEventListener("scroll", scrollCheck, false);
    return () => {
      window.removeEventListener("scroll", scrollCheck);
    }
  }, [scrollPos]);

  return (
    <AnimatePresence>
      <div
        ref={scope}
        id="projects-root"
        className="relative flex flex-col items-center w-screen min-h-screen bg-purp"
      >
        <h1 className="mb-12 text-9xl font-alegreya-bold">MY PROJECTS</h1>
        {/* Card component */}
        <div className="flex w-full px-12 justify-evenly rounded-2xl">
          <div className="w-5/12 rounded-2xl">
            <Tilt
            tiltAngleXInitial={0}
            tiltAngleYInitial={-10}
            transitionSpeed={1000}
            glareEnable={true}
            glareBorderRadius="12px"
            glareMaxOpacity={0.30}
            glarePosition="right"
            className="w-fit overflow-clip rounded-2xl"
            >
            <div>
              <img
                src="./vinylC.webp"
                alt="Website screenshot"
                className="rounded-2xl"
              />
            </div>
              </Tilt>
          </div>
          <div className="block w-6/12">
            <h1 className="text-6xl text-center font-alegreya-bold">Vinyl Countdown</h1>
            <BubbleText
              content="Vinyl countdown is my personal favorite. Most of the front end and some of the back end done by me. All of the albums available are from my physical vinyl collection."
            />
            <div className="flex mt-4">
              <div>
                <h1 className="text-2xl font-alegreya-bold">TECH STACK:</h1>
                <div className="flex gap-2">
                  <img
                    className="aspect-square w-[64px]"
                    src="./React.svg"
                    alt="React logo"
                    />
                  <img
                    className="aspect-square w-[64px]"
                    src="./Tailwind.svg"
                    alt="Tailwind logo"
                  />
                  <img
                    className="aspect-square w-[64px]"
                    src="./NextUI.svg"
                    alt="NextUI logo"
                    />
                  <div className="relative">
                    <img 
                      src="./circle.svg"
                      className="aspect-square w-[64px]"

                    />
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Projects;
