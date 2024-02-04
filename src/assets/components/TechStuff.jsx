import { AnimatePresence, motion } from "framer-motion";

const itemsRight = {
  initial: {
    x: 50,
    opacity: 0,
  },
  expo: {
    x: 0,
    rotate: 5,
    transition: {
      type: "spring",
      bounce: 0.8,
      duration: 1.5,
    },
  },
};

const TechStuff = () => {
  return (
    <AnimatePresence>
      <div className="relative">
        <h1 className="text-9xl font-alegreya-bold">MY TOOLS</h1>
        <motion.div
          id="react-wrap"
          initial="initial"
          whileInView="expo"
          viewport={{ once: false, amount: 0.8 }}
        >
          <motion.div variants={itemsRight}>
            <div className="flex justify-center">
              <div id="react" className="absolute">
                <img
                  alt="React icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                  height="128px"
                  width="128px"
                  draggable={false}
                  className="pointer-events-none select-none cursor-grab"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
        <div className="h-[128px] flex items-center">
          <motion.img
            alt="Top part of the Tailwind CSS logo"
            animate={{
              x: Math.floor(Math.random() * 21) - 10,
              y: Math.floor(Math.random() * 13) - 6,
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            src="./1.svg"
            // height="32px"
            width="128px"
            id="nice"
            className="absolute pointer-events-none select-none"
          />
          <motion.img
            alt="Bottom part of the Tailwind CSS logo"
            animate={{
              x: Math.floor(Math.random() * 21) - 10,
              y: Math.floor(Math.random() * 13) - 6,
            }}
            transition={{
              duration: 1.5,
              delay: 0.3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            src="./2.svg"
            // height="32px"
            width="128px"
            id="nice"
            className="pointer-events-none select-none"
          />
        </div>
        <img
          alt="JavaScript logo"
          src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/ProgrammingLanguages/javascript.svg"
          className="rounded-md"
          height="128px"
          width="128px"
        />
        <img
          alt="Express JS logo"
          width="128px"
          height="128px"
          src="./Express.svg"
          className="p-2 rounded-md bg-slate-200"
        />
        <img
          alt="MongoDB logo"
          src="./MongoDB.svg"
          height="128px"
          width="128px"
        />
        <img
          alt="PostgreSQL logo"
          src="./PostgreSQL.svg"
          height="128px"
          width="128px"
        />
        <img
          alt="Vite logo (pronounced 'veet')"
          src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg"
          height="128px"
          width="128px"
        />
        <img
          alt="Microsoft Visual Studio Code logo"
          src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
          height="128px"
          width="128px"
        />
        <h2 className="text-6xl font-alegreya-bold">..AND MORE!</h2>
      </div>
    </AnimatePresence>
  );
};

export default TechStuff;
