import "./Input.css";

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea = (props: Props) => {
  const { className, ...rest } = props;
  return <textarea className={`InputBase TextArea ${className || ""}`} {...rest} />;
};

export default TextArea;
