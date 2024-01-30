import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Parallax } from "react-scroll-parallax";
import SparkleComponent from "./SparkleComponent";
import MarqueeComponent from "./MarqueeComponent";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import ParallaxText from "./Temp";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const useParallax = (value, distance) => {
  return useTransform(value, [0, 1], [-distance, distance]);
};

const HelloText = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 600);

  return (
    <div ref={ref}>
      <div className="h-[500px]" />
      <motion.h2
        style={{ y }}
        className="text-[8rem] z-50 py-6 font-singleday font-bold select-none pointer-events-none text-star"
        transition={{
          duration: 3,
          ease: "easeInOut",
          times: []
        }}

      >
        Hello!
      </motion.h2>
    </div>
  );
};

const HelloComponent = () => {
  const container = useRef();
  // const target = useRef(null);
  // const { scrollYProgress } = useScroll({ target: target });
  const { scrollYProgress } = useScroll();

  // useGSAP(
  //   () => {
  //     const tl = gsap.timeline();

  //     tl.from(".sparkle", {
  //       scrollTrigger: {
  //         trigger: ".test",
  //         scrub: 2,
  //         start: "top 90%",
  //         end: "+=800",
  //         id: "sparkle",
  //         markers: {
  //           startColor: "orange",
  //           endColor: "white",
  //           fontWeight: "bold",
  //         },
  //       },
  //       ease: "none",
  //       opacity: 0,
  //       y: 500,
  //       // duration: 4,
  //     });
  //     gsap.from("#hello", {
  //       scrollTrigger: {
  //         trigger: ".test",
  //         scrub: 1,
  //         start: "100% 70%",
  //         end: "+=800",
  //         pin: true,
  //         id: "hello",
  //         markers: "true",
  //       },
  //       ease: "none",
  //       opacity: 0,
  //       color: "#ffffff",
  //       // delay: 0.2,
  //       // duration: 3,
  //     });
  //   },
  //   { scope: container }
  // );

  return (
    <>
      <div className="min-h-[1400px] helloMain" ref={container}>
        {/* <div className="bae">🥰</div> */}
        {/* <div className="h-[1000px]">{` `}</div> */}
        <div className="relative flex justify-center min-h-screen purpGradient">
          <div className="overflow-visible test">
            <div id="FOLDED_CONTENT">
              {/* <div className="relative sparkle">
              <SparkleComponent
              minX={10}
              maxX={12}
                minY={6}
                maxY={8}
                minS={0.5}
                maxS={1.25}
                stagger={0}
              />
              </div>
            <div className="relative sparkle">
              <SparkleComponent
                minX={2}
                maxX={5}
                minY={10}
                maxY={20}
                minS={0.5}
                maxS={1.25}
                stagger={0.25}
              />
            </div>
            <div className="relative sparkle">
              <SparkleComponent
              minX={25}
                maxX={36}
                minY={6}
                maxY={9}
                minS={0.5}
                maxS={1.25}
                stagger={0.25}
                />
                </div>
                <div className="relative sparkle">
                <SparkleComponent
                minX={-2}
                maxX={-8}
                minY={6}
                maxY={15}
                minS={0.5}
                maxS={1.25}
                stagger={0.33}
                />
                </div>
            <div className="relative sparkle">
              <SparkleComponent
                minX={-10}
                maxX={-15}
                minY={22}
                maxY={26}
                minS={0.5}
                maxS={1.25}
                stagger={0.69}
                />
              </div> */}
            </div>
            {/* <div
              className="text-[8rem] h- z-text py-6 font-singleday font-bold select-none pointer-events-none text-star"
              id="hello"
            >
              Hello!
            </div> */}
            <HelloText />
          </div>
        </div>
        <div className="relative bg-purp">
          <div className="relative">
            <div className="w-[640px] mx-auto mb-12">
              <img
                src="https://www.thesprucepets.com/thmb/PYJiButDwZb4JNzGE1gwfsI6YYs=/1733x0/filters:no_upscale():strip_icc()/Stocksy_txp14acff329Kw100_Medium_1360769-5aec7baefa6bcc00373c6cb7.jpg"
                className="rounded-xl"
                alt="A bunny rabbit."
              />
              <h4 className="ml-3 italic text-gray-400">
                Yup, I&apos;m a rabbit!
              </h4>
            </div>
          </div>
          <div className="absolute top-80 z-1">
            

            <MarqueeComponent />
            {/* <ParallaxText /> */}
          </div>
          <p className="h-[1000px] mx-10 mt-2 text-xl">
            This is just some more texty text to fill in this empty space in the
            div, you know! Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Quos reiciendis quia provident facilis commodi error, in rem.
            Rem earum impedit, soluta saepe ad veritatis voluptate dolore
            nostrum pariatur assumenda corporis. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Amet, odio nam! Porro libero quas
            dolorem eveniet harum id tenetur illo recusandae a quisquam optio
            voluptatibus rerum, adipisci pariatur cumque provident? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Animi accusantium quam
            amet ex nobis asperiores esse deleniti, omnis distinctio impedit
            quae atque, placeat sapiente ad rerum expedita assumenda aliquid.
            Consectetur! Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Laudantium incidunt odio facere ea rem optio voluptatum
            aliquid a! Error ducimus necessitatibus repellendus incidunt eos
            nemo vero tempore tenetur quidem a.
          </p>
        </div>
      </div>
    </>
  );
};

export default HelloComponent;
