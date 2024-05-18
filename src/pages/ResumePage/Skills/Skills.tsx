import { technologies } from "@/assets";

import { LanguageSkill } from "./LanguageSkill";

const Skills = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
      {technologies.map((main, index) => {
        return (
          <div className="flex flex-col gap-3" key={index}>
            <h4 className="text-lg">{main.branch}</h4>
            {main.skills.map((skill, index) => {
              return (
                <LanguageSkill
                  key={index}
                  logo={skill.logo}
                  name={skill.name}
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
