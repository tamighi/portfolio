import { skills } from "@/assets";

import { LanguageSkill } from "./LanguageSkill";

const Skills = () => {
  return (
    <div className="flex flex-row flex-wrap gap-8">
      {skills.map((main, index) => {
        return (
          <div key={index} className="flex flex-col flex-1 items-center gap-6">
            <h2 className="text-2xl underline">{main.branch}</h2>
            <div className="grid grid-flow-col [grid-template-rows:repeat(5,auto)] gap-4">
              {main.technologies.map((technology, index) => {
                return (
                  <LanguageSkill
                    key={index}
                    logo={technology.logo}
                    name={technology.name}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
