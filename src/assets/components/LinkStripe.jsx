import "../styles/linkStripe.css";
import PropTypes from "prop-types";

/**
 * LinkStripe - Simple yet nice looking link component
 * @param {href} string
 * @returns
 */
const LinkStripe = ({ children, href}) => {
  return (
    <ul className="text-6xl text-center nav-ul font-alegreya-bold">
      <li className="nav-li">
        <a
          target="_blank"
          rel="noreferrer"
          className="nav-a"
          href={href || "#"}
          >
          <span className="nav-a-letters">
            <Text>{children}</Text>
          </span>
          <span className="nav-a-stripe nav-a-stripe--front"> </span>
          <span className="nav-a-stripe nav-a-stripe--mid"> </span>
          <span className="nav-a-stripe nav-a-stripe--back"> </span>
          <span className="nav-a-letters-top">
            <Text>{children}</Text>
          </span>
        </a>
      </li>
    </ul>
  );
};

const Text = ({ children }) => {
  return (
    <>
      {children.split("").map((child, idx) => (
        <span className="nav-a-letter" key={idx}>
          {child}
        </span>
      ))}
    </>
  );
};

LinkStripe.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string,
};
Text.propTypes = {
  children: PropTypes.string.isRequired,
};

export default LinkStripe;
/* Original code by https://twitter.com/juxtopposed */
/* Modified by https://github.com/Mochibunn */
