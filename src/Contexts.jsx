import { createContext } from "react";
import App from "./App";

export const ClassContext = createContext();
const classList = {
  stackClasses: "aspect-square w-[64px] pointer-events-none",
  stackSubheadingClasses: "text-3xl font-alegreya-medium",
  topCardClasses: "flex w-full p-12 justify-evenly rounded-2xl",
  tiltClasses: "sticky w-5/12 h-full rounded-2xl top-[30%]",
};

const Contexts = () => {
  return(
    <ClassContext.Provider value={classList}>
      <App />
    </ClassContext.Provider>
  );
};

export default Contexts;