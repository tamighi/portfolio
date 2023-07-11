import { Footer } from "components";
import { Outlet, ScrollRestoration } from "react-router-dom";

import "./App.css";
import "./Global.css";

export const App = () => {
  return (
    <div className="App">
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};
