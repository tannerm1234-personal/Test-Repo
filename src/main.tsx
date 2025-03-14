import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

// Only initialize Tempo in development
if (import.meta.env.VITE_TEMPO === "true") {
  // Use dynamic import to avoid loading in production
  import("tempo-devtools")
    .then(({ TempoDevtools }) => {
      TempoDevtools.init();
    })
    .catch((err) => {
      console.warn("Failed to load tempo-devtools:", err);
    });
}

const basename = import.meta.env.BASE_URL || "/";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
