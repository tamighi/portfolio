import { Appbar, ResponsivePage } from "@/components";

import { About } from "./About";
import { Experience } from "./Experience";
import { Skills } from "./Skills";

const ResumePage = () => {
  return (
    <>
      <Appbar />
      <ResponsivePage>
        <div className="flex flex-col gap-2 mb-8">
          <h2
            className="font-bold text-4xl rounded-3xl self-center md:self-start"
          >
            About
          </h2>
          <About />
        </div>
        <div className="flex flex-col gap-2 mb-8">
          <h2
            className="font-bold text-4xl rounded-3xl self-center md:self-start"
          >
            Skills
          </h2>
          <Skills />
        </div>
        <div className="flex flex-col gap-2 mb-8">
          <h2
            className="font-bold text-4xl rounded-3xl self-center md:self-start"
          >
            Experience
          </h2>
          <Experience />
        </div>
      </ResponsivePage>
    </>
  );
};

export default ResumePage;
