import { clsx } from "clsx";

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea = (props: Props) => {
  const { className, ...rest } = props;
  return (
    <textarea
      className={clsx(
        "min-w-0 p-3 rounded-s bg-[#2a2a47] text-white border-none focus:outline-none resize-y",
        className
      )}
      {...rest}
    />
  );
};

export default TextArea;
