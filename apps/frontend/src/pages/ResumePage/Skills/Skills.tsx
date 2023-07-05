import "./Skills.css";

const Skills = () => {
  return (
    <>
      <div className="SkillListsContainer">
        <ul>
          <h4>Web dev</h4>
          <li>React</li>
          <li>Nestjs</li>
          <li>Typescript</li>
          <li>Typeorm</li>
        </ul>
        <ul>
          <h4>Dev Ops</h4>
          <li>Nginx</li>
          <li>Webpack</li>
          <li>Git</li>
          <li>Docker</li>
        </ul>
        <ul>
          <h4>Software development</h4>
          <li>C++</li>
          <li>C</li>
        </ul>
      </div>
    </>
  );
};

export default Skills;
