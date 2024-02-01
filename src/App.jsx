import TopComponent from "./assets/components/TopComponent";
import HelloComponent from "./assets/components/HelloComponent";
import Parallax from "./assets/components/Parallax";
import LoremIpsum from "./assets/components/LoremIpsum";
import Zoom from "./assets/components/Zoom";

function App() {
  return (
    <>
      <TopComponent />
      <div className="h-[800px]" />
      <Parallax />
      <div className="relative h-screen" id="postHouseGradient">
        <div className="absolute inset-0 z-30" />
        <Zoom />
      </div>
      <HelloComponent />
      <LoremIpsum />
      <script
        src="https://unpkg.com/twemoji@latest/dist/twemoji.min.js"
        crossOrigin="anonymous"
      ></script>
    </>
  );
}

export default App;
