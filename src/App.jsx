import TopComponent from "./assets/components/TopComponent";
import HelloComponent from "./assets/components/HelloComponent";

function App() {
  return (
    <>
      <TopComponent />
      <div className="h-screen"></div>
      <HelloComponent />
      <script src="https://unpkg.com/twemoji@latest/dist/twemoji.min.js" crossOrigin="anonymous"></script>
    </>
  );
}

export default App;
