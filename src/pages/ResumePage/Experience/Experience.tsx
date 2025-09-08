import { experiencesArray } from "@/assets";

import { ExperienceSectionHeader } from "./ExperienceSectionHeader";
import { BulletPoints } from "@/components";

const Experience = () => {
  return (
    <div className="flex flex-col gap-14">
      {experiencesArray.map((experience) => {
        return (
          <div
            key={experience.id}
            className="flex flex-col gap-6 overflow-hidden"
          >
            <ExperienceSectionHeader experience={experience} />
            <p className="whitespace-break-spaces">{experience.description}</p>
            <div className="flex flex-col gap-2">
              <span className="font-bold">Features:</span>
              <BulletPoints
                bullets={experience.features}
                textClasses="text-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-bold">Languages:</span>
              <BulletPoints
                bullets={experience.languages}
                textClasses="text-lg"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
