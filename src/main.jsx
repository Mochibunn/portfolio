import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ConsoleMessages from "./assets/components/ConsoleMessages.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <App />
      <ConsoleMessages />
  </React.StrictMode>
);
