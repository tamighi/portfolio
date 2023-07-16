import { LanguageSkill } from "./LanguageSkill";
import { skills } from "constants";

import "./Skills.css";

const Skills = () => {
  return (
    <>
      <div className="SkillListsContainer">
        {skills.map((main, index) => {
          return (
            <div className="SkillList" key={index}>
              <h4 className="SkillTitle">{main.branch}</h4>
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
    </>
  );
};

export default Skills;
