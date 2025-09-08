type Props = {
  children?: React.ReactNode;
  title: string;
};

const Section = ({ children, title }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="mb-4">
        <h2 className="font-bold text-4xl self-center md:self-start">
          {title}
        </h2>
        <hr />
      </div>
      {children}
    </div>
  );
};

export default Section;
