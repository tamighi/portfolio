import "./Input.css";

type Props = React.HTMLAttributes<HTMLTextAreaElement>;

const TextArea = (props: Props) => {
  const { className, ...rest } = props;
  return <textarea className={`InputBase ${className || ""}`} {...rest} />;
};

export default TextArea;
