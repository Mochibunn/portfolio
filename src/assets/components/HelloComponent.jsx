import MarqueeComponent from "./MarqueeComponent";
import ParallaxText from "./Temp";

const HelloComponent = () => {
  return (
    <>
      <div className="helloMain">
        <div className="relative z-10">
          <div className="flex flex-col items-center mb-6">
            <h1 className="text-8xl">I&apos;m Mochi</h1>
            <div className="flex gap-2 align-middle">
              <h2 className="text-xl font-semibold">
                Full Stack Web & App Developer
              </h2>
              <div aria-hidden>|</div>
              <h2 className="text-xl font-semibold">Avid intermediate coder</h2>
              <div aria-hidden>|</div>
              <h2 className="text-xl font-semibold">Vinyl Connoisseur</h2>
              <div aria-hidden>|</div>
              <h2 className="text-xl font-semibold">Obsessed With Rabbits</h2>
            </div>
          </div>
          <div className="flex flex-col items-center mx-auto">
            <img
              src="https://www.thesprucepets.com/thmb/PYJiButDwZb4JNzGE1gwfsI6YYs=/1733x0/filters:no_upscale():strip_icc()/Stocksy_txp14acff329Kw100_Medium_1360769-5aec7baefa6bcc00373c6cb7.jpg"
              className="rounded-xl w-[30%]"
              alt="A bunny rabbit."
            />
            <h4 className="pb-4 ml-3 italic text-gray-400">
              Yup, I&apos;m a rabbit!
            </h4>
          </div>
        </div>
        <div className="absolute inset-0 z-0 top-20">
          <MarqueeComponent />
          {/* <ParallaxText /> */}
        </div>
      </div>
    </>
  );
};

export default HelloComponent;
