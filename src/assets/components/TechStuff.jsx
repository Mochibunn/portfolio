import { AnimatePresence, motion } from "framer-motion";
import { Component } from "react";

const itemsRight = {
  initial: {
    x: 50,
    y: 30,
    opacity: 0,
  },
  expo: {
    x: 0,
    y: 0,
    opacity: 1,
    rotate: 5,
    transition: {
      type: "spring",
      bounce: 0.6,
      duration: 1.5,
    },
  },
};
const itemsLeft = {
  initial: {
    x: -50,
    y: 30,
    opacity: 0,
  },
  expo: {
    x: 0,
    y: 0,
    opacity: 1,
    rotate: -5,
    transition: {
      type: "spring",
      bounce: 0.6,
      duration: 1.5,
    },
  },
};

//AnimateTw and transitionTw handle the Tailwind div
class AnimateTw extends Component {
  constructor() {
    super();
    this.props = {
      x: Math.floor(Math.random() * 41) - 20,
      y: Math.floor(Math.random() * 21) - 10,
    };
  }
  render() {
    return this.props;
  }
}

const transitionTw = {
  duration: 1.5,
  repeat: Infinity,
  repeatType: "reverse",
  ease: "easeInOut",
};

const cardClasses = "h-[300px] flex items-center";
const divClasses = "flex gap-12";
const labelClasses = "my-auto text-9xl font-alegreya-bold";

const TechStuff = () => {
  return (
    <AnimatePresence>
      <div className="relative flex flex-col items-center py-12">
        <div className="relative h-screen">
        <h1 className="sticky top-6 text-9xl font-alegreya-bold">MY TOOLS</h1>
        </div>
        <motion.div
        className={cardClasses}
          id="react-div"
          initial="initial"
          whileInView="expo"
          viewport={{ once: false, amount: 0.8 }}
        >
          <motion.div variants={itemsRight}>
            <div className={`${divClasses} ml-52 mt-52`}>
              <div id="react" className="">
                <img
                  alt="React icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                  height="256px"
                  width="256px"
                  draggable={false}
                  className="pointer-events-none select-none cursor-grab"
                />
              </div>
              <h1 className={labelClasses}>REACT</h1>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          id="tailwind-div"
          className={cardClasses}
          initial="initial"
          whileInView="expo"
          viewport={{ once: false, amount: 0.8 }}
        >
          <motion.div variants={itemsLeft}>
            <div className={divClasses}>
              <h1 className={labelClasses}>TAILWIND</h1>
              <div className="relative">
                <motion.img
                  alt="Top part of the Tailwind CSS logo"
                  animate={new AnimateTw().props}
                  transition={transitionTw}
                  src="./1.svg"
                  width="256px"
                  id="nice"
                  className="absolute pointer-events-none select-none"
                />
                <motion.img
                  alt="Bottom part of the Tailwind CSS logo"
                  animate={new AnimateTw().props}
                  transition={{
                    delay: 0.3,
                    ...transitionTw,
                  }}
                  src="./2.svg"
                  width="256px"
                  id="nice"
                  className="pointer-events-none select-none"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          id="js-div"
          className={cardClasses}
          initial="initial"
          whileInView="expo"
          viewport={{ once: false, amount: 0.8 }}
        >
          <motion.div variants={itemsRight}>
            <div className={divClasses}>
              <img
                alt="JavaScript logo"
                src="./javascript.svg"
                className="rounded-md"
                width="256px"
              />
              <h1 className={labelClasses}>JAVASCRIPT</h1>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
        id="express-div"
        className={cardClasses}
        initial="initial"
        whileInView="expo"
        viewport={{ once: false, amount: 0.8 }}
        >
          <motion.div variants={itemsLeft}>
            <div className={divClasses}>
              <h1 className={labelClasses}>EXPRESS</h1>
              <img
                alt="Express JS logo"
                width="256px"
                src="./Express.svg"
                className="p-4 rounded-md bg-slate-200"
              />
            </div>
          </motion.div>
        </motion.div>
        <motion.div
        id="mongo-div"
        className={cardClasses}
        initial="initial"
        whileInView="expo"
        viewport={{ once: false, amount: 0.8 }}
        >
          <motion.div variants={itemsRight}>
            <div className={divClasses}>
              <img
                alt="MongoDB logo"
                src="./MongoDB.svg"
                width="256px"
              />
              <h1 className={labelClasses}>MONGODB</h1>
            </div>
          </motion.div>
        </motion.div>
        <motion.div 
        id="postgre-div"
        className={cardClasses}
        initial="initial"
        whileInView="expo"
        viewport={{ once: false, amount: 0.8 }}
        >
          <motion.div variants={itemsLeft}>
            <div className={divClasses}>
              <h1 className={labelClasses}>POSTGRESQL</h1>
              <img
                alt="PostgreSQL logo"
                src="./PostgreSQL.svg"
                width="256px"
              />
            </div>
          </motion.div>
        </motion.div>
        <motion.div
        id="vite-div"
        className={cardClasses}
        initial="initial"
        whileInView="expo"
        viewport={{ once: false, amount: 0.8 }}
        >
          <motion.div variants={itemsRight}>
            <div className={divClasses}>
              <img
                alt="Vite logo (pronounced 'veet')"
                src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg"
                width="256px"
              />
              <h1 className={labelClasses}>VITE</h1>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
        id="vscode-div"
        className={cardClasses}
        initial="initial"
        whileInView="expo"
        viewport={{ once: false, amount: 0.8 }}
        >
          <motion.div variants={itemsLeft}>
            <div className={divClasses}>
              <h1 className={labelClasses}>VS CODE</h1>
              <img
                alt="Microsoft Visual Studio Code logo"
                src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
                width="256px"
              />
            </div>
          </motion.div>
        </motion.div>
        <h2 className="pb-12 text-6xl font-alegreya-bold">..AND MORE!</h2>
      </div>
    </AnimatePresence>
  );
};

export default TechStuff;
