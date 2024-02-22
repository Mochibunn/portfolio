import { createContext } from "react";
import App from "./App";

export const ClassContext = createContext();
const classList = {
  stackClasses: "aspect-square w-[64px] pointer-events-none",
  stackSubheadingClasses: "lg:text-lg xl:text-2xl 2xl:text-3xl font-alegreya-medium w-fit",
  topCardClasses: "flex md:flex-row w-full p-6 xl:p-12 justify-center items-center md:items-stretch md:justify-stretch xl:justify-evenly rounded-2xl relative",
  tiltClasses: "relative md:sticky w-11/12 md:w-1/2 xl:w-5/12 h-fit md:h-full rounded-2xl md:top-[30%] z-40",
  infoClasses: "w-11/12 pt-10 md:pt-0 md:w-1/2",
  linkClasses: "origin-bottom scale-[1.0] lg:scale-[1.3]",
  componentTitleClasses: "text-6xl xl:text-8xl 2xl:text-9xl font-alegreya-bold",
};

const Contexts = () => {
  return(
    <ClassContext.Provider value={classList}>
      <App />
    </ClassContext.Provider>
  );
};

export default Contexts;