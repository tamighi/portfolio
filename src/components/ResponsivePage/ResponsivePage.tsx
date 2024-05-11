import { clsx } from "clsx";

type Props = React.HTMLAttributes<HTMLDivElement>;

const ResponsivePage = (props: Props) => {
  const { className, children, ...rest } = props;
  return (
    <div
      className={clsx(
        "flex-grow m-[20px 10px 0 18px] md:mx-[10%] md:mt-8",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default ResponsivePage;
