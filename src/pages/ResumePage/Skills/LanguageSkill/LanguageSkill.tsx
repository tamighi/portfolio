type Props = {
  logo: string;
  name: string;
};

const LanguageSkill = (props: Props) => {
  const { logo, name } = props;
  return (
    <div className="flex items-center gap-3">
      <img src={logo} alt={name} className="h-12" />
      <span className="SkillText">{name}</span>
    </div>
  );
};

export default LanguageSkill;
