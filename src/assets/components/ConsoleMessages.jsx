const ConsoleMessages = () => {
  const msg =
    "%c🐰 My site is very new. Lettuce 🥬🐇 know if you find any issues 🐰";
  const styles = [
    "font-size: 12px",
    "color: #e69a8dff",
    "font-family: monospace",
    "background: #5f4b8bff",
    "display: inline-block",
    "padding: 1rem 3rem",
    "border: 4px outset #e69a8dff",
    "border-radius: 10px;",
  ].join(";");
  console.log(msg, styles);
};

export default ConsoleMessages;
