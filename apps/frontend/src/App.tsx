import { AnimatedOutlet, AnimatedPage, Footer } from "components";

import "./App.css";
import "./Global.css";

export const App = () => {
  return (
    <div className="App">
      <AnimatedPage>
        <AnimatedOutlet />
      </AnimatedPage>
      <Footer />
    </div>
  );
};
