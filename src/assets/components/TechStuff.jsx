import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const TechStuff = () => {
  const [mouseDown, setMouseDown] = useState(false);

  const logo = document.getElementById("react");
  const test1 = () => {
    console.log("🐰 Event listener added!\n");
    document.addEventListener("mousemove", (e) => {
      const logoX = logo.offsetLeft + logo.offsetWidth / 2;
      const logoY = logo.offsetTop + logo.offsetHeight / 2;
      const dX = logoX - e.clientX;
      const dY = logoY - e.clientY;
      let deg = (Math.atan(-dX / dY) * 180) / Math.PI;
      if (dY > 0) {
        deg += 180;
      }
      logo.style.transform = "rotate(" + deg + "deg)";
    });
  };
  const testMsg = console.log("🐇 Event listener cleared!\n");

  const test2 = () => {
    document.removeEventListener("mousemove", testMsg);
  };

  const handleMouseMove = () => {};

  const stop = () => {
    document.removeEventListener("mousemove");
  };

  useEffect(() => {
    const handleMouseUp = (e) => {
      if (e.button !== 2) {
        setTimeout(() => setMouseDown(false), 10);
      }
    };

    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const handleMouseDown = (e) => {
    if (e.button !== 2) {
      setMouseDown(true);
      handleMouseMove();
    }
  };

  return (
    <AnimatePresence>
      <div className="relative">
        <h1 className="text-9xl font-alegreya-bold">MY TOOLS</h1>
        <motion.div
          className="relative flex justify-center"
          // onDragStart={test1}
          // onClick={test1}

          // onDragEnd={test2}
        >
          <div id="react-wrap"
            onMouseDown={test1}
            onMouseUp={test2}>
            <div
              id="react"
              className="absolute"
              
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt="React icon"
                height="128px"
                width="128px"
                className="pointer-events-none select-none cursor-grab"
              />
            </div>
          </div>
        </motion.div>
        <div className="h-[128px] flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/768px-Tailwind_CSS_Logo.svg.png?20230715030042"
            alt="Tailwind CSS logo"
            height="128px"
            width="128px"
            id="nice"
            className="select-none"
          />
        </div>
        <img
          src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/ProgrammingLanguages/javascript.svg"
          alt="JavaScript logo"
          className="rounded-md"
          height="128px"
          width="128px"
        />
        <img
          width="128px"
          height="128px"
          src="./Express.png"
          alt="Express JS logo"
          className="rounded-md bg-slate-200"
        />
        <img src="./MongoDB.svg" height="128px" width="128px" />
        <img src="./PostgreSQL.svg" height="128px" width="128px" />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg"
          alt="Vite logo (pronounced 'veet')"
          height="128px"
          width="128px"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
          alt="Microsoft Visual Studio Code icon"
          height="128px"
          width="128px"
        />
        <h2 className="text-6xl font-alegreya-bold">..AND MORE!</h2>
      </div>
    </AnimatePresence>
  );
};

export default TechStuff;
