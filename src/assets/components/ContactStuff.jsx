import { AnimatePresence, motion } from "framer-motion";
const transitionOnce = {
  type: "spring",
  bounce: 0.6,
  duration: 1.5,
};

const ContactStuff = () => {
  const contactClasses =
    "w-full p-4 rounded-2xl bg-purple-950 font-asap text-2xl formfield relative z-10";

  return (
    <AnimatePresence>
      <div className="relative flex flex-col items-center w-screen py-12 bg-purp min-h-[600px]">
        <h1 className="text-9xl font-alegreya-bold">CONTACT</h1>
        {/* <div className="relative mt-12">
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
        </div> */}
        <form
          name="contact"
          netlify=""
          className="flex flex-col items-center w-7/12"
        >
          <div className="w-7/12">
            <label htmlFor="name">
              <motion.p
                initial={{
                  rotate: 5,
                  y: -10,
                  opacity: 0,
                }}
                whileInView={{
                  rotate: -5,
                  y: 10,
                  opacity: 1,
                  transition: transitionOnce,
                }}
                viewport={{
                  once: true,
                  amount: 0.8,
                }}
                className="relative z-20 mb-2 text-5xl font-gochi-hand w-fit"
              >
                Name:
              </motion.p>
            </label>
            <motion.input
              initial={{
                x: 40,
                y: 0,
                rotate: -3,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                y: 0,
                rotate: 2,
                opacity: 1,
              }}
              viewport={{
                once: true,
                amount: 0.8,
              }}
              type="text"
              name="name"
              required
              className={contactClasses}
            />
          </div>
          <div className="w-7/12 mt-4">
            <label htmlFor="name">
              <motion.p
              initial={{
                rotate: 5,
                y: 5,
                opacity: 0,
              }}
              whileInView={{
                rotate: 3,
                y: 30,
                opacity: 1,
                transition: transitionOnce,
              }}
              viewport={{
                once: true,
                amount: 0.8,
              }}
            className="relative z-20 text-5xl font-gochi-hand w-fit"
              >
                Email:</motion.p>
            </label>
            <motion.input
              initial={{
                x: -60,
                y: 0,
                rotate: 2,
              }}
              whileInView={{
                x: 0,
                y: 0,
                rotate: -3,
              }}
              viewport={{
                once: true,
                amount: 0.8,
              }}
              type="email"
              name="name"
              required
              className={contactClasses}
            />
          </div>
          <div className="w-11/12 mt-4">
            <label htmlFor="name" className="text-5xl font-gochi-hand">
            <motion.p
                initial={{
                  rotate: 5,
                  y: -10,
                  opacity: 0,
                }}
                whileInView={{
                  rotate: -3,
                  y: 20,
                  opacity: 1,
                  transition: transitionOnce,
                }}
                viewport={{
                  once: true,
                  amount: 0.8,
                }}
                className="relative z-20 mb-2 text-5xl font-gochi-hand w-fit"
              >
                Message:
              </motion.p>
            </label>
            <motion.textarea
              initial={{
                x: -10,
                y: -50,
                rotate: 2,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                y: 0,
                rotate: 0,
                opacity: 1,
              }}
              viewport={{
                once: true,
                amount: 0.8,
              }}
              name="name"
              required
              className={contactClasses + " rounded-br-3xl"}
              rows="15"
            />
          </div>
          <motion.input
            initial={{
              x: 30,
              y: -30,
              rotate: -12,
              opacity: 0,
              scale: 1,
            }}
            whileInView={{
              x: 0,
              y: 0,
              rotate: 3,
              opacity: 1,
            }}
            whileHover={{
              scale: 1.75,
            }}
            viewport={{
              once: true,
              amount: 0.8,
            }}
            type="submit"
            className="mt-6 text-5xl font-gochi-hand"
          />
        </form>
      </div>
    </AnimatePresence>
  );
};

export default ContactStuff;
