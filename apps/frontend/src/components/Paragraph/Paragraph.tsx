type Props = React.HTMLAttributes<HTMLParagraphElement>;

const Paragraph = (props: Props) => {
  const { className, children, ...rest } = props;
  return (
    <p className={`Paragraph ${className || ""}`} {...rest}>
      {children}
    </p>
  );
};

export default Paragraph;
