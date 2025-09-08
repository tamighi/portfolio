type Props = {
  logo: string;
  name: string;
};

const LanguageSkill = (props: Props) => {
  const { logo, name } = props;
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-xl">{name}</span>
      <img src={logo} alt={name} className="max-h-10 max-w-10" />
    </div>
  );
};

export default LanguageSkill;
