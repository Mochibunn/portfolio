import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Parallax } from "react-scroll-parallax";
import Sparkles from "./Sparkles";
import SparkleComponent from "./SparkleComponent";

const HelloComponent = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(".hello", {
        scrollTrigger: {
          trigger: ".hello",
          scrub: 2,
          start: "center center",
          end: "top top",
          markers: "true",
          pin: true,
        },
        ease: "none",
        opacity: 0,
        duration: 1.5,
      });
    }, { scope: container }
  );
  
  return (
    <div className="min-h-[400px] mx-4 pb-4" ref={container}>
      <div className="flex justify-center relative">
        <Parallax speed={20}></Parallax>
        <div>
          <SparkleComponent
            minX={10}
            maxX={12}
            minY={6}
            maxY={8}
            minS={0.5}
            maxS={1.25}
            stagger={0}
          />
          <SparkleComponent
            minX={2}
            maxX={5}
            minY={10}
            maxY={20}
            minS={0.5}
            maxS={1.25}
            stagger={0.25}
          />
        <h1
          className="text-[8rem] z-text py-6 font-mynerve font-bold hello"
          id="hello"
        >
          Hello!
        </h1>
          <SparkleComponent
            minX={75}
            maxX={80}
            minY={5}
            maxY={15}
            minS={0.5}
            maxS={1.25}
            stagger={0.33}
          />
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
      <p className="text-xl mb-2"></p>
      <img src="https://www.thesprucepets.com/thmb/PYJiButDwZb4JNzGE1gwfsI6YYs=/1733x0/filters:no_upscale():strip_icc()/Stocksy_txp14acff329Kw100_Medium_1360769-5aec7baefa6bcc00373c6cb7.jpg" className="rounded-xl w-[640px] mx-auto mb-12" alt="A bunny rabbit." />
      <p className="text-xl mt-2 h-screen">
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
