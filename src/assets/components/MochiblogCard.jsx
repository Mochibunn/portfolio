import { RiExternalLinkLine } from "react-icons/ri";
import { GitHubLogo } from "./GitHubLogo";
import Tilt from "react-parallax-tilt";
import LinkStripe from "./LinkStripe";
import BubbleText from "./BubbleText";
import { useContext } from "react";
import { ClassContext } from "../../Contexts";
import StackImage from "./StackImage";

const MochiblogCard = () => {
  const context = useContext(ClassContext);
  const subheadingClasses = context.stackSubheadingClasses;
  const topCardClasses = context.topCardClasses;
  const tiltClasses = context.tiltClasses;
  const infoClasses = context.infoClasses;

  return (
    <div className={topCardClasses}>
      <div className={infoClasses}>
        <div className="flex items-baseline justify-center pb-2">
          <LinkStripe href="https://mochibunn.github.io/Mochiblog/">
            MochibloG
          </LinkStripe>
          <RiExternalLinkLine className="scale-[1.30]" />
        </div>
        <BubbleText noLigatures>
          This simple page was created to show off the things we learned in HTML and CSS in just 2 weeks time. It might be not much but it is my honest work and I love the look and colors of it. If I ever revisit the idea of keeping a personal internet blog around, I will definitely be basing the design off of this page. You can clearly witness my fondness of white blurry acrylic backgrounds, old school typefaces and rounded corners for elements, the polka dot background also adds a bit of that nostalgic feeling, perhaps?
        </BubbleText>
        <div className="relative flex justify-start mt-4 gap-x-12">
          <div id="stack-todo" className="mt-4 mr-9 w-fit">
            <h1 className={subheadingClasses}>TECH STACK:</h1>
            <div className="flex gap-2 mt-2" id="stack-container-todo">
              <StackImage
                href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                src="./HTML5.svg"
                alt="HTML 5 logo"
              />
              <StackImage
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                src="./CSS3.svg"
                alt="CSS 3 logo"
              />
              <StackImage
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                src="./javascript.svg"
                alt="JavaScript logo"
                extra="rounded-md"
              />
            </div>
          </div>
          <div className="w-fit">
            <h1 className={subheadingClasses + " mt-4"}>REPO:</h1>
            <GitHubLogo href="https://github.com/Mochibunn/Mochiblog" />
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
          <a
            href="https://mochibunn.github.io/Mochiblog/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="./mochiblog.webp"
              alt="Website screenshot"
              className="pointer-events-none rounded-2xl"
            />
          </a>
        </Tilt>
      </div>
    </div>
  );
};
export default MochiblogCard;
