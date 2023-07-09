import "./EducationSectionHeader.css";

type Props = {
  title: string;
  date: string;
};

const EducationSectionHeader = (props: Props) => {
  const { date, title } = props;

  return (
    <div className="EducationSectionHeader">
      <span className="EducationSectionTitle">{title}</span>
      <span className="EducationSectionDate">{date}</span>
    </div>
  );
};

export default EducationSectionHeader;
