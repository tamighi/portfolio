type Props = {
  bullets: React.ReactNode[];
  label?: string;
};

const BulletPoints = ({ bullets, label }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <span className="underline">{label}</span>}
      <ul className="flex list-disc list-inside space-x-6 flex-wrap">
        {bullets.map((bullet, i) => (
          <li key={i} className="whitespace-nowrap">
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BulletPoints;
