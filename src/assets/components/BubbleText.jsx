// import * as styles from "../styles/bubble.modules.css";
import { useEffect } from "react";
import PropTypes from "prop-types";

/**
 * BubbleText - A pretty, visual component for rendering "bubble" text.
 * @requires prop-types
 * @param {string} content Text for the component to transform 
 * @returns 
 */
const BubbleText = ({content}) => {
  useEffect(() => {
    const spans = document.querySelectorAll(".hover-text span");

    spans.forEach((span) => {
      span.addEventListener("mouseenter", function () {
        this.style.fontWeight = "900";
        this.style.color = "rgb(238, 242, 255)";

        const leftNeighbor = this.previousElementSibling;
        const rightNeighbor = this.nextElementSibling;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = "500";
          leftNeighbor.style.color = "rgb(199, 210, 254)";
        }
        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = "500";
          rightNeighbor.style.color = "rgb(199, 210, 254)";
        }
      });

      span.addEventListener("mouseleave", function () {
        this.style.fontWeight = "100";
        this.style.color = "rgb(165, 180, 252)";

        const leftNeighbor = this.previousElementSibling;
        const rightNeighbor = this.nextElementSibling;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = "100";
          leftNeighbor.style.color = "rgb(165, 180, 252)";
        }

        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = "100";
          rightNeighbor.style.color = "rgb(165, 180, 252)";
        }
      });
    });
  }, []);

  return (
    <h2 className="text-4xl font-thin text-justify text-indigo-300 hover-text bubble">
      <Text>{content}</Text>
    </h2>
  );
};

const Text = ({ children }) => {
  return (
    <>
      {children.split("").map((child, idx) => (
        <span
          style={{
            transition: "0.15s font-weight, 0.15s color",
          }}
          key={idx}
          >
          {child}
        </span>
      ))}
    </>
  );
};

BubbleText.propTypes = {
  content: PropTypes.string.isRequired,
}
Text.propTypes = {
  children: PropTypes.string.isRequired,
}

  export default BubbleText;

  //Original code from https://www.hover.dev/components/other#bubble-text
  // Modified by https://github.com/Mochibunn