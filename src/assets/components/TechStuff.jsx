import { AnimatePresence, motion } from "framer-motion";

const TechStuff = () => {
  return (
    <AnimatePresence>
      <div className="relative">
        <h1 className="text-9xl font-alegreya-bold">MY TOOLS</h1>
        <motion.div className="flex justify-center">
          <div id="react-wrap">
            <div id="react" className="absolute">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt="React icon"
                height="128px"
                width="128px"
                draggable={false}
                className="pointer-events-none select-none cursor-grab"
              />
            </div>
          </div>
        </motion.div>
        <div className="h-[128px] flex items-center">
          <motion.img
            animate={{
              x: Math.floor((Math.random() * 5) + 1),
              y: Math.floor((Math.random() * 5) + 0),
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            src="./1.svg"
            alt="Tailwind CSS logo"
            // height="32px"
            width="128px"
            id="nice"
            className="absolute select-none"
          />
          <motion.img
            animate={{
              x: Math.floor(Math.random() * 21) -10,
              y: Math.floor(Math.random() * 13) -6,
            }}
            transition={{
              duration: 1.5,
              delay: 0.3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            src="./2.svg"
            alt="Tailwind CSS logo"
            // height="32px"
            width="128px"
            id="nice"
            className="select-none"
          />
        </div>
        <img
          src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/ProgrammingLanguages/javascript.svg"
          alt="JavaScript logo"
          className="rounded-md"
          height="128px"
          width="128px"
        />
        <img
          width="128px"
          height="128px"
          src="./Express.png"
          alt="Express JS logo"
          className="rounded-md bg-slate-200"
        />
        <img src="./MongoDB.svg" height="128px" width="128px" />
        <img src="./PostgreSQL.svg" height="128px" width="128px" />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg"
          alt="Vite logo (pronounced 'veet')"
          height="128px"
          width="128px"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
          alt="Microsoft Visual Studio Code icon"
          height="128px"
          width="128px"
        />
        <h2 className="text-6xl font-alegreya-bold">..AND MORE!</h2>
      </div>
    </AnimatePresence>
  );
};

export default TechStuff;
