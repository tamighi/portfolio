import { LanguageSkill } from "./LanguageSkill";
import { skills } from "constants";

import "./Skills.css";

const Skills = () => {
  return (
    <>
      <div className="SkillListsContainer">
        {skills.map((skillx, index) => {
          return (
            <div className="SkillList" key={index}>
              <h4 className="SkillTitle">{skillx.branch}</h4>
              {skillx.skills.map((skill, index) => {
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
