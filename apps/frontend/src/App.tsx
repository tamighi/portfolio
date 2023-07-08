import { Footer } from "components";
import { Outlet } from "react-router-dom";

import "./App.css";
import "./Global.css";

import underconstruction from "assets/underconstruction.png";

export const App = () => {
  return (
    <div className="App">
      <img
        src={underconstruction}
        alt="Under construction"
        style={{ alignSelf: "center", maxWidth: "300px" }}
      />
      <Outlet />
      <Footer />
    </div>
  );
};
