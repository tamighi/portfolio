import { skills } from "@/assets";

import { LanguageSkill } from "./LanguageSkill";

const Skills = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
      {skills.map((main, index) => {
        return (
          <div className="flex flex-col gap-4" key={index}>
            <h2 className="text-2xl font-semibold">{main.branch}</h2>
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
        );
      })}
    </div>
  );
};

export default Skills;
