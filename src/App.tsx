import { AnimatedOutlet, AnimatedPage, Footer } from "components";

import "./Global.css";

export const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedPage>
        <AnimatedOutlet />
      </AnimatedPage>
      <Footer />
    </div>
  );
};
