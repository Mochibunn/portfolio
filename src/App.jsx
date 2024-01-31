import TopComponent from "./assets/components/TopComponent";
// import HelloComponent from "./assets/components/HelloComponent";
import Parallax from "./assets/components/Parallax";
import LoremIpsum from "./assets/components/LoremIpsum";
import Zoom from "./assets/components/Zoom";

function App() {
  return (
    <>
      <TopComponent />
      <div className="h-[500px]" />
      <Parallax />
      {/* <HelloComponent /> */}
      <Zoom />
      <LoremIpsum />
      <script
        src="https://unpkg.com/twemoji@latest/dist/twemoji.min.js"
        crossOrigin="anonymous"
      ></script>
    </>
  );
}

export default App;
