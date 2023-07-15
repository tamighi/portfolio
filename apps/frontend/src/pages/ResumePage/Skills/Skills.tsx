import {
  CLogo,
  CplusplusLogo,
  DockerLogo,
  GitLogo,
  NestjsLogo,
  ReactLogo,
  TypescriptLogo,
  WebpackLogo,
} from "components";
import { LanguageSkill } from "./LanguageSkill";

import "./Skills.css";

const Skills = () => {
  return (
    <>
      <div className="SkillListsContainer">
        <div className="SkillList">
          <h4 className="SkillTitle">Web development</h4>
          <LanguageSkill Logo={ReactLogo} name="React" />
          <LanguageSkill Logo={NestjsLogo} name="NestJS" />
          <LanguageSkill Logo={TypescriptLogo} name="Typescript" />
        </div>
        <div className="SkillList">
          <h4 className="SkillTitle">Software development</h4>
          <LanguageSkill Logo={CplusplusLogo} name="C++" />
          <LanguageSkill Logo={CLogo} name="C" />
        </div>
        <div className="SkillList">
          <h4 className="SkillTitle">Others</h4>
          <LanguageSkill Logo={WebpackLogo} name="Webpack" />
          <LanguageSkill Logo={GitLogo} name="Git" />
          <LanguageSkill Logo={DockerLogo} name="Docker" />
        </div>
      </div>
    </>
  );
};

export default Skills;
