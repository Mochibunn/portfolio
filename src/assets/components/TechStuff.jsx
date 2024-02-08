import { AnimatePresence, motion } from "framer-motion";
import { Component, useRef } from "react";
import useOnScreen from "./useOnScreen";

const cardClasses =
  "h-[128px] sm:h-[164px] md:h-[190px] lg:h-[250px] xl:h-[300px] flex items-center";
const divClasses = "gap-3 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-12 flex";
const labelClasses =
  "text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl my-auto font-alegreya-bold";
const imageClasses =
  "w-[100px] sm:w-[110px] md:w-[132px] lg:w-[192px] xl:w-[256px] aspect-square";

const transition = {
  duration: 1.5,
  repeat: Infinity,
  repeatType: "reverse",
  ease: "easeInOut",
};

const transitionOnce = {
  type: "spring",
  bounce: 0.6,
  duration: 1.5,
};

const viewport = {
  once: false,
  amount: 0.8,
};

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
//First time I managed to make a class on my own :D

class AnimateWiggle extends Component {
  constructor() {
    super();
    this.props = {
      initial: {
        y: 8,
      },
      wiggle: {
        y: -8,
        transition: transition,
      },
    };
  }
  render() {
    return this.props;
  }
}

const TechStuff = () => {
  const elementRef = useRef(null);
  const isOnScreen = useOnScreen(elementRef);

  return (
    <AnimatePresence>
      <div className="relative flex flex-col items-center w-screen py-12">
        <h1 className="text-9xl font-alegreya-bold">MY TOOLS</h1>
        <div className="relative h-[200px]"></div>
        <motion.div
          className={cardClasses}
          id="react-div"
          initial="initial"
          whileInView="expo"
          viewport={viewport}
        >
          <motion.div variants={itemsRight}>
            <div id="reasct-wrapper" className={divClasses}>
              <div id="react">
                <img
                  alt="React icon"
                  src="./React.svg"
                  className={imageClasses}
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
          viewport={viewport}
        >
          <motion.div variants={itemsLeft}>
            <div className={divClasses}>
              <h1 className={labelClasses}>TAILWIND</h1>
              <div className="relative">
                <motion.img
                  alt="Top part of the Tailwind CSS logo"
                  animate={new AnimateTw().props}
                  transition={transition}
                  src="./twTop.svg"
                  id="twTop"
                  className={`${imageClasses} absolute`}
                />
                <motion.img
                  alt="Bottom part of the Tailwind CSS logo"
                  animate={new AnimateTw().props}
                  transition={{
                    delay: 0.3,
                    ...transition,
                  }}
                  src="./twBot.svg"
                  id="twBot"
                  className={imageClasses}
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
          viewport={viewport}
        >
          <motion.div variants={itemsRight}>
            <div className={divClasses}>
              <img
                alt="JavaScript logo"
                src="./javascript.svg"
                className={`${imageClasses} rounded-md bg-[#FFD600]`}
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
          viewport={viewport}
        >
          <motion.div variants={itemsLeft}>
            <div className={divClasses}>
              <h1 className={labelClasses}>EXPRESS</h1>
              <img
                alt="Express JS logo"
                src="./Express.svg"
                className={`${imageClasses} p-4 rounded-md bg-slate-200`}
              />
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          id="mongo-div"
          className={cardClasses}
          initial="initial"
          whileInView="expo"
          viewport={viewport}
        >
          <motion.div variants={itemsRight}>
            <div className={divClasses}>
              <motion.img
                initial={{
                  rotate: -10,
                }}
                whileInView={{
                  rotate: 5,
                  transition: transition,
                }}
                viewport={viewport}
                alt="MongoDB logo"
                src="./MongoDB.svg"
                className={imageClasses}
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
          viewport={viewport}
        >
          <motion.div variants={itemsLeft}>
            <div className={divClasses}>
              <h1 className={labelClasses}>POSTGRESQL</h1>
              <img
                alt="PostgreSQL logo"
                src="./PostgreSQL.svg"
                className={imageClasses}
              />
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          id="vite-div"
          className={cardClasses}
          initial="initial"
          whileInView="expo"
          viewport={viewport}
        >
          <motion.div variants={itemsRight} ref={elementRef}>
            <div className={divClasses + " " + (isOnScreen ? "mask" : ``)}>
              <div className={imageClasses}>
                <motion.img
                  initial={new AnimateWiggle().props.initial}
                  whileInView={new AnimateWiggle().props.wiggle}
                  viewport={viewport}
                  alt="Vite logo (pronounced 'veet')"
                  src="Vite.svg"
                  className={imageClasses}
                />
              </div>
              <h1 className={labelClasses}>VITE</h1>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          id="vscode-div"
          className={cardClasses}
          initial="initial"
          whileInView="expo"
          viewport={viewport}
        >
          <motion.div variants={itemsLeft}>
            <div className={divClasses}>
              <h1 className={labelClasses}>VS CODE</h1>
              <motion.img
                initial={new AnimateWiggle().props.initial}
                whileInView={new AnimateWiggle().props.wiggle}
                viewport={viewport}
                alt="Microsoft Visual Studio Code logo"
                src="./VSCode.svg"
                className={imageClasses}
              />
            </div>
          </motion.div>
        </motion.div>
        <h2 className="pb-12 text-6xl font-alegreya-bold">..AND MORE!</h2>
        <div className="flex gap-12 align-middle">
          <div className="relative flex">
            <motion.p
              initial={{
                y: 20,
                opacity: 0,
                rotate: 5,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
                rotate: 0,
                transition: transitionOnce,
              }}
              viewport={{
                once: true,
                amount: 0.8,
              }}
              className="self-center text-5xl font-gochi-hand -rotate-[2deg]"
            >
              More info on my github
            </motion.p>
            <motion.img
              initial={{
                y: 10,
                opacity: 0,
                rotate: 5,
                scaleY: -1,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
                rotate: 0,
                scaleY: -1,
                transition: transitionOnce,
              }}
              viewport={{
                once: true,
                amount: 0.8,
              }}
              className="w-[128px] -scale-y-100 opacity-[0.87] absolute -right-12 top-12"
              src="./arrow-curved.svg"
            />
          </div>
          <motion.a
            href="https://github.com/Mochibunn#%EF%B8%8Fwhats-my-tech-stack"
            target="_blank"
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              transition: transitionOnce,
            }}
          >
            <motion.img
              initial={{
                y: -5,
                rotate: 8,
              }}
              whileInView={{
                y: 5,
                rotate: 8,
                transition: transition,
              }}
              viewport={viewport}
              src="./github.svg"
              className="w-[128px]"
            />
          </motion.a>
        </div>
        {/* Shimmer mask for Vite logo */}
        <svg height="0">
          <mask id="mask-firefox">
            <image
              className={imageClasses}
              xlinkHref="./Vite.svg"
              filter="url(#filter)"
            />
          </mask>
          <filter id="filter">
            <feFlood floodColor="white" />
            <feComposite in2="SourceAlpha" operator="in" />
          </filter>
        </svg>
      </div>
    </AnimatePresence>
  );
};

export default TechStuff;
