import { useContext } from "react";
import BubbleText from "./BubbleText";
import LinkStripe from "./LinkStripe";
import Tilt from "react-parallax-tilt";
import { GitHubLogo } from "./GitHubLogo";
import { RiExternalLinkLine } from "react-icons/ri";
import { ClassContext } from "../../Contexts";
import StackImage from "./StackImage";

const PsdToHtmlCard = () => {
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
            href="https://c4ti4.github.io/psdtohtml/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="./psdtohtml.webp"
              alt="Website screenshot"
              className="pointer-events-none rounbded-2xl"
            />
          </a>
        </Tilt>
      </div>
      <div className={infoClasses}>
        <div className="flex items-baseline justify-center pb-2">
          <LinkStripe href="https://c4ti4.github.io/psdtohtml/">
            PSD&nbsp;&nbsp;To&nbsp;&nbsp;HTML
          </LinkStripe>
          <RiExternalLinkLine className={linkClasses} />
        </div>
        <BubbleText>
          The aim of this page is literally in the title, we were given a mock project with a Photoshop document and it was our task as a group to translate that document, the vision of the imaginary client&apos;s page mockup into reality.
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
              <StackImage
                href="https://www.adobe.com/products/photoshop.html"
                src="./photoshop.svg"
                alt="Adobe Photoshop logo"
              />
            </div>
          </div>
            <div className="w-fit">
              <h1 className={subheadingClasses + " mt-4"}>REPO:</h1>
              <GitHubLogo href="https://github.com/C4TI4/psdtohtml" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default PsdToHtmlCard;