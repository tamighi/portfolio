import { ReactLogo } from "components";
import { LanguageSkill } from "./LanguageSkill";

import "./Skills.css";

const Skills = () => {
  return (
    <>
      <div className="SkillListsContainer">
        <div className="SkillList">
          <h4 className="SkillTitle">Web dev</h4>
          <LanguageSkill Logo={ReactLogo} name ="React" />
          <span className="SkillText">Nestjs</span>
          <span className="SkillText">Typescript</span>
          <span className="SkillText">Typeorm</span>
        </div>
        <div className="SkillList">
          <h4 className="SkillTitle">DevOps</h4>
          <span className="SkillText">Nginx</span>
          <span className="SkillText">Webpack</span>
          <span className="SkillText">Git</span>
          <span className="SkillText">Docker</span>
        </div>
        <div className="SkillList">
          <h4 className="SkillTitle">Software development</h4>
          <span className="SkillText">C++</span>
          <span className="SkillText">C</span>
        </div>
      </div>
    </>
  );
};

export default Skills;
