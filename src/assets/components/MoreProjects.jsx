
import { motion } from "framer-motion";

const MoreProjects = () => {
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
  }
  

  return (
    <div className="flex gap-12 pb-4 align-middle">
    <div className="relative flex">
      <motion.p
        initial={{
          x: -40,
          y: 20,
          opacity: 0,
          rotate: -2,
        }}
        whileInView={{
          x: 0,
          y: 0,
          opacity: 1,
          rotate: 2,
          transition: transitionOnce,
        }}
        viewport={{
          once: true,
          amount: 0.8,
        }}
        className="self-center text-2xl sm:text-3xl lg:text-5xl font-gochi-hand"
      >
        Other repos on my github
      </motion.p>
      <motion.img
        initial={{
          y: 10,
          opacity: 0,
          rotate: 5,
          scaleY: 1,
        }}
        whileInView={{
          y: -10,
          opacity: 1,
          rotate: 3,
          scaleY: 1,
          transition: transitionOnce,
        }}
        viewport={{
          once: false,
          amount: 0.8,
        }}
        className="w-[100px] lg:w-[128px] scale-y-100 opacity-[0.87] absolute -right-12 -top-8 select-none pointer-events-none"
        src="./arrow-curved.svg"
        alt="Arrow"
      />
    </div>
    <motion.a
      href="https://github.com/Mochibunn?tab=repositories"
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
          rotate: -8,
        }}
        whileInView={{
          y: 5,
          rotate: -8,
          transition: transition,
        }}
        viewport={viewport}
        src="./github.svg"
        alt="Octocat logo"
        className="w-[96px] lg:w-[128px] pointer-events-none"
      />
    </motion.a>
  </div>
  );
};

export default MoreProjects;