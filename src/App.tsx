import { AnimatedOutlet, AnimatedPage, Appbar, Footer } from "@/components";

import "./index.css";

export const App = () => {
  return (
    <div className="min-h-screen flex flex-col text-2xl">
      <Appbar />
      <AnimatedPage>
        <div className="pt-28 flex flex-col min-h-screen">
          <div className="grow flex justify-center">
            <AnimatedOutlet />
          </div>
          <Footer />
        </div>
      </AnimatedPage>
    </div>
  );
};
