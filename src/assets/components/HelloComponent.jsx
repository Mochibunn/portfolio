import { Parallax } from "react-scroll-parallax";
import Sparkles from "./Sparkles";
import SparkleComponent from "./SparkleComponent";

const HelloComponent = () => {
  return (
    <div className="min-h-[400px] mx-4 pb-4">
      <div className="flex justify-center relative">
        <Parallax speed={20}></Parallax>
        <h1
          className="text-[8rem] z-text py-6 font-mynerve font-bold"
          id="hello"
        >
          Hello!
        </h1>
        <div>
          <SparkleComponent
            minX={180}
            maxX={240}
            minY={50}
            maxY={100}
            minS={0.5}
            maxS={1.25}
            stagger={0}
          />
          <SparkleComponent
            minX={650}
            maxX={790}
            minY={100}
            maxY={280}
            minS={0.5}
            maxS={1.25}
            stagger={0.25}
          />
          <SparkleComponent
            minX={800}
            maxX={900}
            minY={120}
            maxY={220}
            minS={0.5}
            maxS={1.25}
            stagger={0.33}
          />
        </div>
      </div>
      <p className="text-xl mb-2"></p>
      <img src="../src/assets/img/1.jpg" className="rounded-xl" />
      <p className="text-xl mt-2">
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
