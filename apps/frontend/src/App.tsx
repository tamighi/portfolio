import { Footer } from "components";
import { Outlet } from "react-router-dom";

import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <div className="Page">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
