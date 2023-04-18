import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import StateProvider from "./state/StateProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StateProvider>
    <App />
  </StateProvider>
);
