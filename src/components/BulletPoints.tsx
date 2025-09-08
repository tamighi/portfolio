type Props = {
  bullets: React.ReactNode[];
  label?: string;
  textClasses?: string;
};

const BulletPoints = ({ bullets, label, textClasses }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <span className="underline font-bold">{label}</span>}
      <ul className="flex list-disc list-inside space-x-6 flex-wrap">
        {bullets.map((bullet, i) => (
          <li key={i} className="whitespace-nowrap">
            <span className={textClasses}>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BulletPoints;
