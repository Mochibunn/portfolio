import { useContext } from "react";
import BubbleText from "./BubbleText";
import LinkStripe from "./LinkStripe";
import Tilt from "react-parallax-tilt";
import { GitHubLogo } from "./GitHubLogo";
import { RiExternalLinkLine } from "react-icons/ri";
import { ClassContext } from "../../Contexts";
import StackImage from "./StackImage";

const ToDoJSCard = () => {
  const context = useContext(ClassContext);
  const subheadingClasses = context.stackSubheadingClasses;
  const topCardClasses = context.topCardClasses;
  const tiltClasses = context.tiltClasses;
  const infoClasses = context.infoClasses;
  const linkClasses = context.linkClasses;

  return (
    <div className={topCardClasses}>
      <div className={tiltClasses}>
        <Tilt
          tiltAngleXInitial={0}
          tiltAngleYInitial={-10}
          transitionSpeed={1000}
          glareEnable
          glareBorderRadius="12px"
          glareMaxOpacity={0.3}
          glarePosition="right"
          className="w-fit overflow-clip rounded-2xl"
        >
          <a
            href="https://mochibunn.github.io/ToDoBeastList/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="./todoJS.webp"
              alt="Website screenshot"
              className="pointer-events-none rounbded-2xl"
            />
          </a>
        </Tilt>
      </div>
      <div className={infoClasses}>
        <div className="flex items-end justify-center pb-2">
          <LinkStripe href="https://mochibunn.github.io/ToDoBeastList/">
            To-Do&nbsp;&nbsp;Beast&nbsp;&nbsp;List
          </LinkStripe>
          <RiExternalLinkLine className={linkClasses} />
        </div>
        <BubbleText>
          This may appear to be just another to-do list, but it is one that
          perhaps no one else on the internet has created. This to-do list was
          created before learning anything about React and other powerful JS
          tools and frameworks. This was a group project, but due to two of my
          group members becoming ill, I wrote all of the code for this list. The
          page may appear bare and uninteresting, but this was intentional
          because I wanted to achieve a clean minimalist Notion look.
        </BubbleText>
        <div className="relative flex justify-start mt-4 gap-x-6 lg:gap-x-12">
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
              <GitHubLogo href="https://github.com/Mochibunn/ToDoBeastList" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoJSCard;
