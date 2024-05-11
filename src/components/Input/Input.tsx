import { clsx } from "clsx";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const Input = (props: Props) => {
  const { className, ...rest } = props;
  return (
    <input
      className={clsx(
        "min-w-0 p-3 rounded-s bg-[#2a2a47] text-white border-none focus:outline-none",
        className
      )}
      {...rest}
    />
  );
};

export default Input;
