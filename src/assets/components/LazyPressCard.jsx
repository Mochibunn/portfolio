import { RiExternalLinkLine } from "react-icons/ri";
import { GitHubLogo } from "./GitHubLogo";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import LinkStripe from "./LinkStripe";
import BubbleText from "./BubbleText";
import ImageSlide from "./ImageSlide";

const LazyPressCard = () => {
  return (
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
            {/* <img
              src="./vinylC.webp"
              alt="Website screenshot"
              className="pointer-events-none rounded-2xl"
            /> */}
            <div className="relative">
              <ImageSlide />
            </div>
          </a>
        </Tilt>
      </div>
    </div>
  );
};

export default LazyPressCard;