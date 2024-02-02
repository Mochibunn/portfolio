import TopComponent from "./assets/components/TopComponent";
import HelloComponent from "./assets/components/HelloComponent";
import Parallax from "./assets/components/Parallax";
import LoremIpsum from "./assets/components/LoremIpsum";
import Zoom from "./assets/components/Zoom";

function App() {
  return (
    <>
      <TopComponent />
      <div className="" height="800px">
        <img
          className="pointer-events-none select-none"
          src="/bg-back.jpg"
          height="0px"
          aria-hidden
          width="0px"
          alt="bg"
        />
        {/* Perhaps I will remove this img, it's to try and force the bg to preload */}
      </div>
      <Parallax />
      <div className="relative min-h-[1400px]" id="postHouseGradient">
        <div className="h-[300px]" />
        {/* <Zoom /> */}
        <HelloComponent />
      </div>
      <LoremIpsum />

      <script
        src="https://unpkg.com/twemoji@latest/dist/twemoji.min.js"
        crossOrigin="anonymous"
      ></script>
    </>
  );
}

export default App;
