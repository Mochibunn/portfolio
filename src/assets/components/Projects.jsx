import { RiExternalLinkLine } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import BubbleText from "./BubbleText";
import LinkStripe from "./LinkStripe";
import PropTypes from "prop-types";

const Projects = () => {
  return (
    <AnimatePresence>
      <div
        id="projects-root"
        className="relative flex flex-col items-center w-screen min-h-screen pt-20 bg-purp"
      >
        <h1 className="mb-12 text-9xl font-alegreya-bold">MY PROJECTS</h1>
        {/* Card component */}
        <div className="flex w-full px-12 justify-evenly rounded-2xl">
          <div className="sticky w-5/12 h-full rounded-2xl top-[30%]">
            <Tilt
              tiltAngleXInitial={0}
              tiltAngleYInitial={-10}
              transitionSpeed={1000}
              glareEnable={true}
              glareBorderRadius="12px"
              glareMaxOpacity={0.3}
              glarePosition="right"
              className="w-fit overflow-clip rounded-2xl"
            >
              <a
                href="https://legacyvinylcountdown.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="./vinylC.webp"
                  alt="Website screenshot"
                  className="pointer-events-none rounded-2xl"
                />
              </a>
            </Tilt>
          </div>
          <div className="block w-6/12">
            <div className="flex items-baseline justify-center">
              <LinkStripe
                href="https://legacyvinylcountdown.netlify.app"
                content="Vinyl&nbsp;&nbsp;Countdown"
              />
              <RiExternalLinkLine className="scale-[1.30]" />
            </div>
            <BubbleText content="Vinyl Countdown is my personal favorite. Most of the front end and some of the back end done by me. All of the albums available are from my physical vinyl collection." />
            <div className="relative flex justify-start mt-4">
              <div id="stack-gh-vc" className="min-w-5/12">
                <h1 className="text-3xl font-alegreya-bold">TECH STACK:</h1>
                <div className="flex gap-2" id="stack-container-vc">
                  <a href="https://react.dev/" target="_blank" rel="noreferrer">
                    <img
                      className="aspect-square w-[64px] pointer-events-none"
                      src="./React.svg"
                      alt="React logo"
                    />
                  </a>
                  <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="aspect-square w-[64px] pointer-events-none"
                      src="./Tailwind.svg"
                      alt="Tailwind logo"
                    />
                  </a>
                  <a
                    href="https://nextui.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="aspect-square w-[64px] pointer-events-none"
                      src="./NextUI.svg"
                      alt="NextUI logo"
                    />
                  </a>
                  <div className="relative" id="PostgreSQL-circle">
                    <img
                      src="./circle.svg"
                      className="aspect-square w-[64px] z-30 relative origin-center scale-[1.25] pointer-events-none"
                      alt="Scribble circle"
                    />
                    <a
                      href="https://www.postgresql.org/"
                      target="_blank"
                      rel="noreferrer"
                      className="absolute inset-0 z-20"
                    >
                      <img
                        src="./PostgreSQL.svg"
                        className="aspect-square w-[64px] pointer-events-none"
                        alt="PostgreSQL logo"
                      />
                    </a>
                  </div>
                </div>
                <h1 className="mt-4 text-3xl font-alegreya-bold">REPO:</h1>
                <GitHubLogo href="https://github.com/Mochibunn/VinylCountdownLegacy" />
              </div>
              <div className="relative">
                <img
                  src="./arrow-orang.svg"
                  className="h-[100px] relative -top-6 pointer-events-none"
                />
              </div>
              <div className="min-w-5/12">
                <h1 className="text-3xl font-alegreya-bold">
                  ALTERNATE VERSION:
                </h1>
                <motion.div
                  initial={{
                    filter: "drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))",
                    scale: 1,
                  }}
                  whileHover={{
                    filter: "drop-shadow(0px 0px 15px rgba(149, 52, 199, 1))",
                    scale: 1.2,
                    transition: {
                      ease: "easeInOut",
                    },
                  }}
                  className="w-fit"
                >
                  <a
                    href="https://vinylcountdown.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="./vinylC.svg"
                      alt="Viny Countdown logo"
                      className="h-[64px] pointer-events-none"
                    />
                  </a>
                </motion.div>
                <div className="flex justify-start">
                  <div className="w-1/2">
                    <h1 className="mt-4 text-3xl font-alegreya-bold">REPO:</h1>
                    <GitHubLogo href="https://github.com/gjlander/VinylCountdown" />
                  </div>
                  <div className="w-1/2">
                    <h1 className="mt-4 text-3xl font-alegreya-bold">
                      BACKEND:
                    </h1>
                    <GitHubLogo href="https://github.com/Mochibunn/VinylCountdownBackend" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

const GitHubLogo = ({ href }) => {
  const ghClasses = {
    img: "aspect-square w-[96px] mt-4 pointer-events-none",
    div: "aspect-square w-[96px] origin-center",
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
            className="aspect-square w-[96px] mt-4 pointer-events-none"
          />
        </a>
      </motion.div>
    </motion.div>
  );
};

GitHubLogo.propTypes = {
  href: PropTypes.string,
};

export default Projects;
