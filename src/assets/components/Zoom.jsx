import { useRef } from "react";

const Zoom = () => {
  let zoom = useRef(((window.outerWidth - 10) / window.innerWidth) * 100);

  return (
    <h1 className="px-4 py-2 mx-12 text-xl font-bold max-w-fit bg-black/30 rounded-xl">
      Current page width: {window.innerWidth}px
    </h1>
  );
};

export default Zoom;