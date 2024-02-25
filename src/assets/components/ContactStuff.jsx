import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import { ClassContext } from "../../Contexts";
const transitionOnce = {
  type: "spring",
  bounce: 0.6,
  duration: 1.5,
};

const ContactStuff = () => {
  const context = useContext(ClassContext);
  const headingClasses = context.componentTitleClasses;
  const contactClasses =
    "w-full p-4 rounded-2xl bg-purple-950 font-asap text-2xl formfield relative z-10";

  return (
    <AnimatePresence>
      <div className="relative flex flex-col items-center w-screen py-12 bg-purp min-h-[600px]">
        <h1 className={headingClasses}>CONTACT</h1>
        <form
          name="contact"
          data-netlify="true"
          method="POST"
          className="flex flex-col items-center w-full md:w-11/12 lg:w-10/12 xl:w-7/12"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="w-9/12 md:w-7/12">
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
          <div className="w-9/12 mt-4 md:w-7/12">
            <label htmlFor="email">
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
              name="email"
              required
              className={contactClasses}
            />
          </div>
          <div className="w-11/12 mt-4">
            <label htmlFor="message" className="text-5xl font-gochi-hand">
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
                amount: 0,
              }}
              name="message"
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
            whileTap={{
              scale: 1.4,
              opacity: 0.5,
            }}
            viewport={{
              once: true,
              amount: 0.8,
            }}
            type="submit"
            className="mt-6 text-5xl cursor-pointer font-gochi-hand"
          />
        </form>
      </div>
    </AnimatePresence>
  );
};

export default ContactStuff;
