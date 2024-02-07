import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/styles/fonts.css";
import App from "./App.jsx";
import ConsoleMessages from "./assets/components/ConsoleMessages.jsx";

document.getElementById("nojs").remove();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <ConsoleMessages />
  </React.StrictMode>
);
