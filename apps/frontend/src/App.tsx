import { Footer } from "components";
import { Outlet } from "react-router-dom";

import "./App.css";
import "./Global.css";

export const App = () => {
  return (
    <div className="App">
      <Outlet />
      <Footer />
    </div>
  );
};
