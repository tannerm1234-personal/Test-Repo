import { Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";

function App() {
  const [tempoRoutes, setTempoRoutes] = useState(null);

  // Only load tempo routes in development
  useEffect(() => {
    if (import.meta.env.VITE_TEMPO === "true") {
      import("tempo-routes")
        .then((module) => {
          setTempoRoutes(module.default);
        })
        .catch((err) => {
          console.error("Failed to load tempo routes:", err);
        });
    }
  }, []);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add this to allow tempo routes to work with catchall */}
        {import.meta.env.VITE_TEMPO === "true" && (
          <Route path="/tempobook/*" element={null} />
        )}
        {/* Add tempo routes as regular routes if available */}
        {import.meta.env.VITE_TEMPO === "true" &&
          tempoRoutes &&
          Array.isArray(tempoRoutes) &&
          tempoRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
      </Routes>
    </Suspense>
  );
}

export default App;
