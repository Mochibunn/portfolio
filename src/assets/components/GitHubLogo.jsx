import { motion } from "framer-motion";
import PropTypes from "prop-types";

export const GitHubLogo = ({ href }) => {
  const ghClasses = {
    img: "aspect-square w-[60px] md:w-[64px] lg:w-[72px] xl:w-[84px] mt-2 pointer-events-none",
    div: "aspect-square w-[60px] md:w-[64px] lg:w-[72px] xl:w-[84px] origin-center",
  };

  return (
    <motion.div
      whileHover={{
        y: 10,
        transition: {
          ease: "easeInOut",
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        },
      }}
      className={ghClasses.div}
    >
      <motion.div
        whileHover={{
          scale: 1.15,
          rotate: 10,
        }}
        className="origin-center"
      >
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className={ghClasses.div}
        >
          <img
            src="./github.svg"
            alt="Octocat logo"
            className={ghClasses.img} />
        </a>
      </motion.div>
    </motion.div>
  );
};
GitHubLogo.propTypes = {
  href: PropTypes.string,
};
