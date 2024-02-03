import TopComponent from "./assets/components/TopComponent";
import HelloComponent from "./assets/components/HelloComponent";
import Parallax from "./assets/components/Parallax";
import LoremIpsum from "./assets/components/LoremIpsum";
import Zoom from "./assets/components/Zoom";
import TechStuff from "./assets/components/TechStuff";

function App() {
  return (
    <>
      <TopComponent />
      <div className="" height="800px" />
      <Parallax />
      <div className="relative min-h-[1400px]" id="postHouseGradient">
        <div className="h-[300px]" />
        {/* <Zoom /> */}
        <HelloComponent />
        <TechStuff />
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
