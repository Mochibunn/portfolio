import { Parallax } from "react-scroll-parallax";

const HelloComponent = () => {
  return (
    <div className="min-h-[400px] mx-4 pb-4">
      <div className="flex justify-center">
        
        <h1 className="text-[8rem] py-6 font-mynerve" id="hello">
          Hello!
        </h1>
      </div>
      <p className="text-xl mb-2"></p>
      <img src="../src/assets/img/1.jpg" className="rounded-xl" />
      <p className="text-xl mt-2">
        This is just some more texty text to fill in this empty space in the
        div, you know!
      </p>
    </div>
  );
};

export default HelloComponent;