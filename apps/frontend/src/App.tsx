import { AnimatedOutlet, AnimatedPage, Footer } from "components";
import { ScrollRestoration } from "react-router-dom";

import "./App.css";
import "./Global.css";

export const App = () => {
  return (
    <div className="App">
      <ScrollRestoration />
        <AnimatedPage >
          <AnimatedOutlet />
        </AnimatedPage>
      <Footer />
    </div>
  );
};
