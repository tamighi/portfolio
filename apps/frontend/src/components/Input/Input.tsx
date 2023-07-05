import "./Input.css";

type Props = React.HTMLAttributes<HTMLInputElement>;

const Input = (props: Props) => {
  const { className, ...rest } = props;
  return <input className={`InputBase ${className || ""}`} {...rest}/>;
};

export default Input;
