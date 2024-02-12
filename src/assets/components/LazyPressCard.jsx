import { RiExternalLinkLine } from "react-icons/ri";
import { GitHubLogo } from "./GitHubLogo";
import Tilt from "react-parallax-tilt";
import LinkStripe from "./LinkStripe";
import BubbleText from "./BubbleText";
import { useContext } from "react";
import { ClassContext } from "../../Contexts";

const LazyPressCard = () => {
  const context = useContext(ClassContext);
  const stackClasses = context.stackClasses;
  const subheadingClasses = context.stackSubheadingClasses;
  const topCardClasses = context.topCardClasses;
  const tiltClasses = context.tiltClasses;
  const infoClasses = context.infoClasses;

  return (
    <div className={topCardClasses}>
      <div className="w-1/2">
        <div className="flex items-baseline justify-center pb-2">
          <LinkStripe href="https://lazypress.net/">LazyPress</LinkStripe>
          <RiExternalLinkLine className="scale-[1.30]" />
        </div>
        <BubbleText noLigatures>
          LazyPress was my final group project for the web dev school. It&apos;s
          a working CMS and custom website solution. Originally, the idea was to
          also include a full on website builder but that would&apos;ve taken
          too long for the deadline so the current solution offers you
          professional website building services with your own CMS for it.
        </BubbleText>
        <div className="relative flex justify-end mt-4 gap-x-12">
          <div id="stack-gh-lazy" className={infoClasses}>
            <h1 className={subheadingClasses}>TECH STACK:</h1>
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
            <div className="flex mt-4">
              <div className="mr-9">
                <h1 className={subheadingClasses}>REPO:</h1>
                <GitHubLogo href="https://github.com/Mochibunn/product-lazypress" />
              </div>
              <div>
                <h1 className={subheadingClasses}>BACKEND:</h1>
                <GitHubLogo href="https://github.com/gjlander/backend-lazypress" />
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <h1 className={subheadingClasses}>SAMPLE WEBSITE:</h1>
            <div className="h-[64px] flex flex-col justify-center items-start">
              <div className="flex items-baseline justify-center pb-2">
                <LinkStripe href="https://foodblog-lazypress.netlify.app/">
                  Food&nbsp;&nbsp;Blog
                </LinkStripe>
                <RiExternalLinkLine className="scale-[1.30]" />
              </div>
            </div>
            <div className="w-full mt-4">
              <h1 className={subheadingClasses}>REPO:</h1>
              <GitHubLogo href="https://github.com/priyankapasrija/FoodBlogLazyPress" />
            </div>
          </div>
        </div>
      </div>
      {/* Tilt */}
      <div className={tiltClasses}>
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
