import { Experience } from "@/assets";

type Props = {
  experience: Experience;
};

const ExperienceSectionHeader = (props: Props) => {
  const { experience } = props;

  return (
    <div className="flex justify-between items-center gap-4">
      <div className="flex items-center flex-row gap-4">
        <img
          className="max-h-12 max-w-12"
          src={experience.icon}
          alt={experience.companyName}
        />
        <span className="font-bold">{experience.title}</span>
      </div>
      <span>{experience.period}</span>
    </div>
  );
};

export default ExperienceSectionHeader;
