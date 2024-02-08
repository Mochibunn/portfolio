import { AnimatePresence, motion } from "framer-motion";

const Projects = () => {
  return (
    <AnimatePresence>
      <div id="projects-root" className="relative flex flex-col items-center w-screen bg-purp">
        <h1 className="text-9xl font-alegreya-bold">MY PROJECTS</h1>
        {/* Card component */}
        <div className="flex flex-row justify-center w-full">
          <div className="w-11/12 debug">
            <img
              src="./vinylC.webp"
              alt="Website screenshot"
              id="vinylC"
              className="p-2 rounded-2xl"
            />
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Projects;