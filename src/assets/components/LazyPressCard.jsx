import { RiExternalLinkLine } from "react-icons/ri";
import { GitHubLogo } from "./GitHubLogo";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import LinkStripe from "./LinkStripe";
import BubbleText from "./BubbleText";

const LazyPressCard = () => {
  const stackClasses = "aspect-square w-[64px] pointer-events-none";

  return (
    <div className="flex w-full p-12 justify-evenly rounded-2xl">
      <div className="w-1/2">
        <div className="flex items-baseline justify-center pb-2">
          <LinkStripe href="https://lazypress.net/" content="LazyPress" />
          <RiExternalLinkLine className="scale-[1.30]" />
        </div>
        <BubbleText content="LazyPress was my final group project for the web dev school. It's a working CMS and custom website solution. Originally, the idea was to also include a full on website builder but that would've taken too long for the deadline so the current solution offers you professional website building services with your own CMS for it." />
        <div className="relative flex justify-end mt-4 gap-x-12">
          <div id="stack-gh-lazy" className="w-1/2">
            <h1 className="text-3xl font-alegreya-bold">TECH STACK:</h1>
            <div className="flex gap-2" id="stack-container-lazy">
              <a href="https://react.dev/" target="_blank" rel="noreferrer">
                <img
                  className={stackClasses}
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
                  className={stackClasses}
                  src="./Tailwind.svg"
                  alt="Tailwind logo"
                />
              </a>
              <a href="https://nextui.org/" target="_blank" rel="noreferrer">
                <img
                  className={stackClasses}
                  src="./NextUI.svg"
                  alt="NextUI logo"
                />
              </a>
              <a
                href="https://www.mongodb.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={stackClasses}
                  src="./MongoDB.svg"
                  alt="MongoDB logo"
                />
              </a>
              <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
                <img
                  className={"p-1 rounded-md bg-slate-200 " + stackClasses}
                  src="./Express.svg"
                  alt="Express logo"
                />
              </a>
            </div>
            <div className="flex">
              <div className="mr-10">
                <h1 className="mt-4 text-3xl font-alegreya-bold">REPO:</h1>
                <GitHubLogo href="https://github.com/Mochibunn/product-lazypress" />
              </div>
              <div className="">
                <h1 className="mt-4 text-3xl font-alegreya-bold">BACKEND:</h1>
                <GitHubLogo href="https://github.com/gjlander/backend-lazypress" />
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <h1 className="text-3xl font-alegreya-bold">SAMPLE WEBSITE:</h1>
            <div className="h-[64px] flex flex-col justify-center items-start">
              <div className="flex items-baseline justify-center pb-2">
                <LinkStripe
                  href="https://foodblog-lazypress.netlify.app/"
                  content="Food&nbsp;&nbsp;Blog"
                  />
                <RiExternalLinkLine className="scale-[1.30]" />
              </div>
            </div>
            <div className="w-full">
              <h1 className="mt-4 text-3xl font-alegreya-bold">REPO:</h1>
              <GitHubLogo href="https://github.com/Mochibunn/product-lazypress" />
            </div>
          </div>
        </div>
      </div>
      {/* Tilt */}
      <div className="sticky w-5/12 h-full rounded-2xl top-[30%]">
        <Tilt
          tiltAngleXInitial={0}
          tiltAngleYInitial={10}
          transitionSpeed={1000}
          glareEnable={true}
          preload="none"
          glareBorderRadius="12px"
          glareMaxOpacity={0.3}
          glarePosition="left"
          className="w-fit overflow-clip rounded-2xl"
        >
          <a href="https://lazypress.net/" target="_blank" rel="noreferrer">
            <video
              loop={true}
              muted={true}
              autoPlay={true}
              controls={false}
              playsInline={true}
              disableRemotePlayback={true}
              disablePictureInPicture={true}
              src="./lazyP.mp4"
              poster="./lazyP.webp"
              alt="Website slideshow"
              className="pointer-events-none rounded-2xl"
            />
          </a>
        </Tilt>
      </div>
    </div>
  );
};

export default LazyPressCard;
