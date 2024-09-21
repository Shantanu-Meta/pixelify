import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import UseImageContext from "./contextAPI/UseImageContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UseImageContext>
      <App />
    </UseImageContext>
  </React.StrictMode>
);

reportWebVitals();
