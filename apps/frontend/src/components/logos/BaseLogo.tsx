type Props = {
  src: string;
  alt?: string;
};

const BaseLogo = (props: Props) => {
  const { src, alt } = props;
  return <img src={src} alt={alt} width="48px" height="48px" />;
};

export default BaseLogo;
