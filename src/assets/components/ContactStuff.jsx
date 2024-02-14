import { AnimatePresence, motion } from "framer-motion";
const transitionOnce = {
  type: "spring",
  bounce: 0.6,
  duration: 1.5,
};

const ContactStuff = () => {
  return (
    <AnimatePresence>
      <div className="relative flex flex-col items-center w-screen py-12 bg-purp min-h-[600px]">
        <h1 className="text-9xl font-alegreya-bold">CONTACT</h1>
        <div className="relative mt-12">
          <div className="relative">
            <motion.h2
              className="text-5xl font-gochi-hand"
              initial={{
                x: 40,
                y: 20,
                opacity: 0,
                rotate: -2,
              }}
              whileInView={{
                x: 0,
                y: 0,
                opacity: 1,
                rotate: 3,
                transition: transitionOnce,
              }}
              viewport={{
                once: false,
                amount: 0.8,
              }}
            >
              If you would like to contact me, feel free to reach me via email!
            </motion.h2>
          </div>
          <div>
            <motion.img
              initial={{
                y: 10,
                opacity: 0,
                rotate: 5,
                scaleY: 1,
              }}
              whileInView={{
                y: 20,
                opacity: 1,
                rotate: 0,
                scaleY: 1,
                transition: transitionOnce,
              }}
              viewport={{
                once: false,
                amount: 0.8,
              }}
              className="w-[200px] opacity-[0.87] absolute top-20 right-0 select-none pointer-events-none"
              id="arrow-contact"
              src="./arrow-curved.svg"
            />
          </div>
          <div className="absolute top-40 right-44">
            <a
              href="mailto:hi@mochibun.me?subject=[From portfolio]"
              target="_blank"
              rel="noreferrer"
            >
              <motion.h1
                initial={{
                  y: -40,
                  x: -10,
                  opacity: 0,
                  rotate: -10,
                  scale: 1,
                }}
                whileInView={{
                  y: 0,
                  x: 0,
                  opacity: 1,
                  rotate: 6,
                  scale: 1,
                  transition: transitionOnce,
                }}
                whileHover={{
                  scale: 2.25,
                }}
                viewport={{
                  once: false,
                  amount: 0.8,
                }}
                className="font-sans origin-right text-9xl"
              >
                @
              </motion.h1>
            </a>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default ContactStuff;
