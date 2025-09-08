type Props = {
  children?: React.ReactNode;
  title: string;
};

const Section = ({ children, title }: Props) => {
  return (
    <div className="flex flex-col gap-2 mb-8">
      <h2 className="font-bold text-4xl rounded-3xl self-center md:self-start">
        {title}
      </h2>
      <hr />
      {children}
    </div>
  );
};

export default Section;
