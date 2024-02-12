import { useContext } from "react";
import { ClassContext } from "../../Contexts";
import PropTypes from "prop-types";

const StackImage = ({ href, src, alt }) => {
  const context = useContext(ClassContext);
  const stackClasses = context.stackClasses;
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <img className={stackClasses} src={src} alt={alt} />
    </a>
  );
};

StackImage.propTypes = {
  href: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default StackImage;
