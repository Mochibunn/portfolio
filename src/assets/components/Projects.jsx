import { AnimatePresence } from "framer-motion";
import VinylCountdownCard from "./VinylCountdownCard";
import LazyPressCard from "./LazyPressCard";
import ToDoJSCard from "./ToDoJSCard";
import MochiblogCard from "./MochiblogCard";
import PsdToHtmlCard from "./PsdToHtmlCard";
import { useContext } from "react";
import { ClassContext } from "../../Contexts";
import MoreProjects from "./MoreProjects";

const Projects = () => {
  const context = useContext(ClassContext);
  const headingClasses = context.componentTitleClasses;

  return (
    <AnimatePresence>
      <div
        id="projects-root"
        className="relative flex flex-col items-center w-screen min-h-screen pt-20 pb-6 bg-purp gap-y-10"
      >
        <h1 className={"mb-12 " + headingClasses}>MY PROJECTS</h1>
        {/* Card component */}
        <VinylCountdownCard />
        <LazyPressCard />
        <ToDoJSCard />
        <MochiblogCard />
        <PsdToHtmlCard />
        <MoreProjects />
      </div>
    </AnimatePresence>
  );
};

export default Projects;
