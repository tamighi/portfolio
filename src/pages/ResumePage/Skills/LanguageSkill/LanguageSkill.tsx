import "./LanguageSkill.css";

type Props = {
  logo: string;
  name: string;
};

const LanguageSkill = (props: Props) => {
  const { logo, name } = props;
  return (
    <div className="SkillContainer">
      <img src={logo} alt={name} height="48px" />
      <span className="SkillText">{name}</span>
    </div>
  );
};

export default LanguageSkill;
