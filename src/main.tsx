import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app";

import "@/assets/reset.css";
import { GenerateProvider } from "./context/Generate";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GenerateProvider>
      <App />
    </GenerateProvider>
  </React.StrictMode>,
);
