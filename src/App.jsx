import TopComponent from "./assets/components/TopComponent";
import HelloComponent from "./assets/components/HelloComponent";
import Parallax from "./assets/components/Parallax";
import TechStuff from "./assets/components/TechStuff";
import Projects from "./assets/components/Projects";
import ContactStuff from "./assets/components/ContactStuff";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <>
      <div className="h-screen">
        <TopComponent />
      </div>
      <div className="" aria-hidden height="800px" />
      <div className="min-h-screen">
        <Parallax />
        <div className="relative min-h-[1400px] grain" id="postHouseGradient">
          <div
            className="h-[300px]"
            style={{
              backgroundImage: "url(/noise-grad.webp)",
              backgroundPosition: "bottom",
              backgroundRepeat: "repeat-x",
            }}
          />
          <HelloComponent />
          <TechStuff />
        </div>
        <Projects />
        <ContactStuff />
        <Footer />
      </div>

      <script
        src="https://unpkg.com/twemoji@latest/dist/twemoji.min.js"
        crossOrigin="anonymous"
      ></script>
    </>
  );
}

export default App;
