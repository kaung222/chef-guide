import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CustomContextProvider } from "./context/Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CustomContextProvider>
      <App />
    </CustomContextProvider>
  </BrowserRouter>
);
