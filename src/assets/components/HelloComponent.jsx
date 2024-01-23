import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Parallax } from "react-scroll-parallax";
import SparkleComponent from "./SparkleComponent";

const HelloComponent = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const timeline = gsap.timeline();

      timeline.from(".sparkle", {
        scrollTrigger: {
          trigger: ".test",
          scrub: 1.5,
          // markers: true,
          start: "bottom bottom",
          end: "center center",
        },
        ease: "none",
        opacity: 0,
        duration:1.5,
      });
      timeline.from(".hello", {
        scrollTrigger: {
          trigger: ".hello",
          scrub: 2,
          start: "center center",
          end: "top top",
          // markers: "true",
          pin: true,
        },
        ease: "none",
        opacity: 0,
        duration: 1.5,
      });
    },
    { scope: container }
  );

  return (
    <div className="min-h-[400px] mx-4 pb-4 overflow-visible z-30" ref={container}>
      <div className="relative flex justify-center test">
        <Parallax speed={20}></Parallax>
        <div>
          <div className="sparkle">
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
          <div className="sparkle">
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
          <div className="sparkle">
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
          <h1
            className="text-[8rem] z-text py-6 font-mynerve font-bold hello select-none pointer-events-none"
            id="hello"
          >
            Hello!
          </h1>
          <div className="sparkle">
            <SparkleComponent
              minX={75}
              maxX={80}
              minY={6}
              maxY={15}
              minS={0.5}
              maxS={1.25}
              stagger={0.33}
            />
          </div>
          <div className="sparkle">
            <SparkleComponent
              minX={82}
              maxX={86}
              minY={22}
              maxY={26}
              minS={0.5}
              maxS={1.25}
              stagger={0.69}
            />
          </div>
        </div>
      </div>
      <p className="mb-2 text-xl"></p>
      <img
        src="https://www.thesprucepets.com/thmb/PYJiButDwZb4JNzGE1gwfsI6YYs=/1733x0/filters:no_upscale():strip_icc()/Stocksy_txp14acff329Kw100_Medium_1360769-5aec7baefa6bcc00373c6cb7.jpg"
        className="rounded-xl w-[640px] mx-auto mb-12"
        alt="A bunny rabbit."
      />
      <p className="h-screen mt-2 text-xl">
        This is just some more texty text to fill in this empty space in the
        div, you know! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Quos reiciendis quia provident facilis commodi error, in rem. Rem earum
        impedit, soluta saepe ad veritatis voluptate dolore nostrum pariatur
        assumenda corporis. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Amet, odio nam! Porro libero quas dolorem eveniet harum id tenetur
        illo recusandae a quisquam optio voluptatibus rerum, adipisci pariatur
        cumque provident? Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Animi accusantium quam amet ex nobis asperiores esse deleniti,
        omnis distinctio impedit quae atque, placeat sapiente ad rerum expedita
        assumenda aliquid. Consectetur! Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Laudantium incidunt odio facere ea rem optio
        voluptatum aliquid a! Error ducimus necessitatibus repellendus incidunt
        eos nemo vero tempore tenetur quidem a.
      </p>
    </div>
  );
};

export default HelloComponent;
