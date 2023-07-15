import "./LanguageSkill.css";

type Props = {
  Logo: () => JSX.Element;
  name: string;
};

const LanguageSkill = (props: Props) => {
  const { Logo, name } = props;
  return (
    <div className="SkillContainer">
      <Logo />
      <span className="SkillText">{name}</span>
    </div>
  );
};

export default LanguageSkill;
