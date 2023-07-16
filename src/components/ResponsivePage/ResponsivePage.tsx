import "./ResponsivePage.css";

type Props = React.HTMLAttributes<HTMLDivElement>;

const ResponsivePage = (props: Props) => {
  const { className, children, ...rest } = props;
  return <div className={`ResponsivePage ${className || ""}`} {...rest}>{children}</div>;
};

export default ResponsivePage;
