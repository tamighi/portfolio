type Props = {
  src: string;
  alt?: string;
};

const BaseLogo = (props: Props) => {
  const { src, alt } = props;
  return <img src={src} alt={alt} height="48px" />;
};

export default BaseLogo;
