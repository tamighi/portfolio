import { ResponsivePage } from "@/components";

import { About } from "./About";
import { Experience } from "./Experience";
import { Skills } from "./Skills";
import Section from "./Section";

const ResumePage = () => {
  return (
    <ResponsivePage>
      <div className="flex flex-col gap-8">
        <Section title="About">
          <About />
        </Section>
        <Section title="Skills">
          <Skills />
        </Section>
        <Section title="Experience">
          <Experience />
        </Section>
      </div>
    </ResponsivePage>
  );
};

export default ResumePage;
