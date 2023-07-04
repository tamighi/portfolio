import { Routes, useLocation } from "react-router-dom";

import "./App.css";

export const App = () => {
  const location = useLocation();

  return (
    <div className="app">
      <Routes location={location}></Routes>
    </div>
  );
};
