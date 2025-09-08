import { experiencesArray } from "@/assets";

import { ExperienceSectionHeader } from "./ExperienceSectionHeader";

const Experience = () => {
  return (
    <div className="flex flex-col gap-6">
      {experiencesArray.map((experience) => {
        return (
          <div key={experience.id} className="flex flex-col overflow-hidden">
            <ExperienceSectionHeader
              title={experience.title}
              date={experience.period}
            />
            <p>{experience.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
