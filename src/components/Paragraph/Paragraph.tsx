import { clsx } from "clsx";

type Props = React.HTMLAttributes<HTMLParagraphElement>;

const Paragraph = (props: Props) => {
  const { className, children, ...rest } = props;
  return (
    <p
      className={clsx(
        "text-sm md:text-lg m-0 whitespace-break-spaces",
        className
      )}
      {...rest}
    >
      {children}
    </p>
  );
};

export default Paragraph;
