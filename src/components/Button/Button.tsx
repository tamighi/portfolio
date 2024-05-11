import { clsx } from "clsx";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: Props) => {
  const { className, ...rest } = props;
  return (
    <button
      className={clsx(
        "bg-[#2a2a47] cursor-pointer p-[8px 12px] rounded-s text-white text-sm font-bold border-none",
        className
      )}
      {...rest}
    />
  );
};

export default Button;
