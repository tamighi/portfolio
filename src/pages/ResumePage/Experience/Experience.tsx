import { Paragraph } from "@/components";
import { experiencesArray } from "@/assets";

import { ExperienceSectionHeader } from "./ExperienceSectionHeader";

const Experience = () => {
  return (
    <div className="flex flex-col gap-20">
      {experiencesArray.map((experience) => {
        return (
          <div key={experience.id} className="flex flex-col overflow-hidden">
            <ExperienceSectionHeader
              title={experience.title}
              date={experience.period}
            />
            <Paragraph>{experience.description}</Paragraph>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
