type Props = {
  title: string;
  date: string;
};

const EducationSectionHeader = (props: Props) => {
  const { date, title } = props;

  return (
    <div className="flex flex-col justify-between mb-7">
      <span className="text-lg font-bold">{title}</span>
      <span className="text-md">{date}</span>
    </div>
  );
};

export default EducationSectionHeader;
