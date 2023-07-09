import "./ProjectBanner.css"

type Props = {
  src: string;
  alt: string;
  description: string;
};

const ProjectBanner = (props: Props) => {
  const { src, alt, description } = props;

  return (
    <div className="ProjectBanner">
      <div className="ProjectBannerLeft">
        <div className="ProjectBannerImageContainer">
          <img alt={alt} src={src} className="ProjectBannerImage" />
          <div className="ProjectBannerLinks">
            <a className="ProjectBannerLink">Demo</a>
            <a className="ProjectBannerLink">Code</a>
          </div>
        </div>
      </div>
      <div className="ProjectBannerDescription">{description}</div>
    </div>
  );
};

export default ProjectBanner;
