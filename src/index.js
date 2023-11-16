import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //   <BrowserRouter basename="/cpa_platform">
  //     <App />
  //   </BrowserRouter>
  // </React.StrictMode>
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
