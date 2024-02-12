import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Contexts from "./Contexts.jsx";
import ConsoleMessages from "./assets/components/ConsoleMessages.jsx";

document.getElementById("nojs").remove();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Contexts /> { /* ℹ️ The App component has moved to the neighboring "Contexts.jsx" component */}
    <ConsoleMessages />
  </React.StrictMode>
);
