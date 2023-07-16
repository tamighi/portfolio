import "./Button.css";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: Props) => {
  const { className, ...rest } = props;
  return <button className={`Button ${className || ""}`} {...rest} />
};

export default Button;
