import MarqueeComponent from "./MarqueeComponent";
import ParallaxText from "./Temp";

const HelloComponent = () => {

  return (
    <>
      <div className="helloMain">
        <div className="relative bg-purp">
          <div className="relative z-10">
            <div className="w-[640px] mx-auto">
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
          <div className="absolute inset-0 z-0 top-20">
            <MarqueeComponent />
            {/* <ParallaxText /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HelloComponent;
