import { useState, useEffect, useRef } from "react";

/**
 * Woof woof, it is I, the width watchdog 🐶
 */
const WidthWatchdog = () => {
  const [width, setWidth] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    setWidth(Math.floor(elementRef.current.getBoundingClientRect().width));
  }, []);
  // useEffect(() => {
  //   console.log("Viewport width:", width);
  // }, [width]);

  const check = () => {
    switch (width) {
      case width >= 640: //sm
        return "10";
      case width >= 768: //md
        return "10";
      case width >= 1024: //lg
        return "10";
      case width >= 1280: //xl
        return "10";
      case width >= 1536: //2xl
        return "10";
      default: //xs
        return "10";
    }
  };
  
  const out = `${check}`;

  return (
    <div
      id="widthWatchdog"
      data-out={out}
      aria-hidden
      className="w-screen h-0"
      ref={elementRef}
    />
  );
};

export default WidthWatchdog;
//Woah! This text is probably buried deep in the compiled code! But you found me! You friggin found me! Hehe, that's cool but also go outside and touch grass instead of snooPING AS usual in others' code! For eel, go take a break :)
